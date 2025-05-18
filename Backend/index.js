const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
require('./connection');
const UserRouter = require('./routers/UserRouter');
const ChatRouter = require('./routers/ChatRouter');
const MessageModel = require('./models/MessageModel');
const APIKeyRouter = require('./routers/apiKey');
const AuthRouter = require('./routers/AuthRouter');
const { validateApiKey } = require('./middleware/auth');

const app = express();
const server = http.createServer(app);

// Socket.IO setup with CORS
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.set('io', io);

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/user', UserRouter);
app.use('/chat', validateApiKey, ChatRouter);
app.use('/auth', AuthRouter);
app.use('/apikey', APIKeyRouter);

// Store connected users and their socket IDs
const userSockets = new Map();

io.use(async (socket, next) => {
    const apiKey = socket.handshake.auth.apiKey;
    if (!apiKey) {
        return next(new Error('Authentication error'));
    }
    // API key validation will be handled by validateApiKey middleware
    next();
});

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    
    const userId = socket.handshake.query.userId;
    if (userId) {
        if (!userSockets.has(userId)) {
            userSockets.set(userId, new Set());
        }
        userSockets.get(userId).add(socket.id);
        socket.userId = userId;
        console.log(`User ${userId} connected with socket ${socket.id}`);
        
        // Notify other users about online status
        socket.broadcast.emit('user_online', { userId });
    }

    // Handle sending messages
    socket.on('send_message', async (message) => {
        try {
            const newMessage = new MessageModel({
                id: message.id,
                senderId: message.senderId,
                receiverId: message.receiverId,
                content: message.content,
                timestamp: message.timestamp,
                type: message.type || 'text',
                status: 'sent'
            });
            await newMessage.save();

            // Send to all receiver's sockets
            const receiverSockets = userSockets.get(message.receiverId);
            if (receiverSockets) {
                const messageWithDeliveryStatus = { ...message, status: 'delivered' };
                receiverSockets.forEach(socketId => {
                    io.to(socketId).emit('message', messageWithDeliveryStatus);
                });
                
                // Update message status
                await MessageModel.findByIdAndUpdate(message.id, { status: 'delivered' });
                
                // Notify sender about delivery
                socket.emit('message_delivered', { messageId: message.id });
            }

            // Send to all sender's other sockets
            const senderSockets = userSockets.get(message.senderId);
            if (senderSockets) {
                senderSockets.forEach(socketId => {
                    if (socketId !== socket.id) {
                        io.to(socketId).emit('message', message);
                    }
                });
            }
        } catch (error) {
            console.error('Error handling message:', error);
            socket.emit('error', { error: 'Failed to send message' });
        }
    });

    // Handle message delivery confirmation
    socket.on('message_delivered', async ({ messageId, senderId, receiverId }) => {
        try {
            await MessageModel.findByIdAndUpdate(messageId, { status: 'delivered' });
            
            // Notify sender about delivery
            const senderSockets = userSockets.get(senderId);
            if (senderSockets) {
                senderSockets.forEach(socketId => {
                    io.to(socketId).emit('message_delivered', { messageId });
                });
            }
        } catch (error) {
            console.error('Error handling message delivery:', error);
        }
    });

    // Handle message read confirmation
    socket.on('message_read', async ({ messageId, senderId, receiverId }) => {
        try {
            await MessageModel.findByIdAndUpdate(messageId, { status: 'read' });
            
            // Notify sender about read status
            const senderSockets = userSockets.get(senderId);
            if (senderSockets) {
                senderSockets.forEach(socketId => {
                    io.to(socketId).emit('message_read', { messageId });
                });
            }
        } catch (error) {
            console.error('Error handling message read status:', error);
        }
    });

    // Handle typing indicators
    socket.on('typing', ({ receiverId, isTyping }) => {
        const receiverSockets = userSockets.get(receiverId);
        if (receiverSockets) {
            receiverSockets.forEach(socketId => {
                io.to(socketId).emit('typing', {
                    userId: socket.userId,
                    isTyping
                });
            });
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        if (socket.userId) {
            console.log(`Socket disconnected: ${socket.id} for user ${socket.userId}`);
            const userSocketSet = userSockets.get(socket.userId);
            if (userSocketSet) {
                userSocketSet.delete(socket.id);
                // Only emit user_offline if all sockets for this user are disconnected
                if (userSocketSet.size === 0) {
                    userSockets.delete(socket.userId);
                    socket.broadcast.emit('user_offline', { userId: socket.userId });
                }
            }
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});