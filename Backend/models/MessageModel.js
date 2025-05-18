const { Schema, model } = require('../connection');

const messageSchema = new Schema({
    id: { type: String, required: true, unique: true },  // Custom message ID
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Number, default: Date.now },
    status: { type: String, enum: ['sent', 'delivered', 'read'], default: 'sent' },
    type: { type: String, enum: ['text', 'image', 'file'], default: 'text' },
    fileName: String,
    fileUrl: String
});

module.exports = model('messages', messageSchema);