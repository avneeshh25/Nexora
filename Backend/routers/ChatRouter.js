const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const MessageModel = require('../models/MessageModel');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Serve uploaded files
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// File upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const fileUrl = `${req.protocol}://${req.get('host')}/chat/uploads/${req.file.filename}`;
        
        res.json({
            fileUrl,
            fileName: req.file.originalname,
            fileSize: req.file.size,
            fileType: req.file.mimetype
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
});

// Get chat history between two users
router.get('/history/:userId/:receiverId', async (req, res) => {
    try {
        const { userId, receiverId } = req.params;
        const messages = await MessageModel.find({
            $or: [
                { senderId: userId, receiverId },
                { senderId: receiverId, receiverId: userId }
            ]
        }).sort({ timestamp: 1 });
        res.status(200).json(messages);
    } catch (err) {
        console.error('Error fetching chat history:', err);
        res.status(500).json({ message: 'Error fetching chat history' });
    }
});

// Create new message
router.post('/message', async (req, res) => {
    try {
        const { senderId, receiverId, content } = req.body;
        const newMessage = new MessageModel({
            senderId,
            receiverId,
            content,
            timestamp: Date.now(),
            status: 'sent'
        });
        await newMessage.save();
        
        // Emit the message through socket if needed
        if (req.app.get('io')) {
            const io = req.app.get('io');
            io.to(receiverId).emit('new_message', newMessage);
        }
        
        res.status(201).json(newMessage);
    } catch (err) {
        console.error('Error sending message:', err);
        res.status(500).json({ message: 'Error sending message' });
    }
});

// Mark messages as read
router.put('/mark-read', async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        await MessageModel.updateMany(
            { senderId, receiverId, status: { $ne: 'read' } },
            { $set: { status: 'read' } }
        );
        res.status(200).json({ message: 'Messages marked as read' });
    } catch (err) {
        console.error('Error marking messages as read:', err);
        res.status(500).json({ message: 'Error updating message status' });
    }
});

// Delete chat history
router.delete('/delete/:userId/:receiverId', async (req, res) => {
    try {
        const { userId, receiverId } = req.params;
        await MessageModel.deleteMany({
            $or: [
                { senderId: userId, receiverId },
                { senderId: receiverId, receiverId: userId }
            ]
        });
        res.status(200).json({ message: 'Chat history deleted successfully' });
    } catch (err) {
        console.error('Error deleting chat history:', err);
        res.status(500).json({ message: 'Error deleting chat history' });
    }
});

// Get unread message count
router.get('/unread-count/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const unreadCounts = await MessageModel.aggregate([
            {
                $match: {
                    receiverId: userId,
                    status: { $ne: 'read' }
                }
            },
            {
                $group: {
                    _id: '$senderId',
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(unreadCounts);
    } catch (err) {
        console.error('Error fetching unread counts:', err);
        res.status(500).json({ message: 'Error fetching unread message counts' });
    }
});

module.exports = router;