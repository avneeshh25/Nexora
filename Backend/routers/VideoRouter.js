const express = require('express');
const router = express.Router();

// Initialize calls map to track active calls
const activeCalls = new Map();

// Get router with initialized io instance
module.exports = function(io) {
    
    // Setup WebRTC signaling in Socket.IO
    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId;
        
        if (!userId) {
            console.error('User ID not provided in socket connection');
            return;
        }
        
        // Handle call initiation
        socket.on('call-user', ({ receiverId, offer }) => {
            console.log(`Call initiated from ${userId} to ${receiverId}`);
            
            // Store call information
            if (!activeCalls.has(userId)) {
                activeCalls.set(userId, new Set());
            }
            activeCalls.get(userId).add(receiverId);
            
            // Send offer to receiver
            socket.to(receiverId).emit('call-received', {
                callerId: userId,
                offer: offer
            });
        });
        
        // Handle call answer
        socket.on('answer', ({ callerId, answer }) => {
            console.log(`Call answered by ${userId} for caller ${callerId}`);
            socket.to(callerId).emit('answer', { 
                answer,
                receiverId: userId 
            });
        });
        
        // Handle ICE candidates
        socket.on('ice-candidate', ({ target, candidate }) => {
            console.log(`ICE candidate from ${userId} to ${target}`);
            socket.to(target).emit('ice-candidate', {
                from: userId,
                candidate
            });
        });
        
        // Handle call rejection
        socket.on('reject-call', ({ callerId }) => {
            console.log(`Call rejected by ${userId}`);
            socket.to(callerId).emit('call-rejected', {
                rejectedBy: userId
            });
            
            // Remove from active calls
            if (activeCalls.has(callerId)) {
                activeCalls.get(callerId).delete(userId);
            }
        });
        
        // Handle call end
        socket.on('end-call', ({ target }) => {
            console.log(`Call ended by ${userId} with ${target}`);
            socket.to(target).emit('call-ended', {
                endedBy: userId
            });
            
            // Remove from active calls
            if (activeCalls.has(userId)) {
                activeCalls.get(userId).delete(target);
            }
            if (activeCalls.has(target)) {
                activeCalls.get(target).delete(userId);
            }
        });
        
        // Handle disconnection
        socket.on('disconnect', () => {
            console.log(`User ${userId} disconnected`);
            
            // Notify users in active calls with this user
            if (activeCalls.has(userId)) {
                for (const targetId of activeCalls.get(userId)) {
                    socket.to(targetId).emit('call-ended', {
                        endedBy: userId,
                        reason: 'disconnected'
                    });
                }
                activeCalls.delete(userId);
            }
            
            // Check if this user is in any other active calls
            for (const [callerId, targets] of activeCalls.entries()) {
                if (targets.has(userId)) {
                    socket.to(callerId).emit('call-ended', {
                        endedBy: userId,
                        reason: 'disconnected'
                    });
                    targets.delete(userId);
                }
            }
        });
    });
    
    // REST endpoint to get active call status
    router.get('/active/:userId', (req, res) => {
        try {
            const { userId } = req.params;
            const activeCallUsers = [];
            
            // Check if user has active calls
            if (activeCalls.has(userId)) {
                activeCallUsers.push(...activeCalls.get(userId));
            }
            
            // Also check if user is being called by someone else
            for (const [callerId, targets] of activeCalls.entries()) {
                if (targets.has(userId)) {
                    activeCallUsers.push(callerId);
                }
            }
            
            res.status(200).json({ 
                hasActiveCalls: activeCallUsers.length > 0,
                activeCallUsers 
            });
        } catch (err) {
            console.error('Error fetching active calls:', err);
            res.status(500).json({ message: 'Error fetching active call status' });
        }
    });
    
    return router;
};
