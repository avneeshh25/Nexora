const express = require('express');
const router = express.Router();
const { validateApiKey } = require('../middleware/auth');
const ApiKeyModel = require('../models/ApiKeyModel');
const crypto = require('crypto');
const mongoose = require('mongoose');

// Generate new API key
router.post('/generate-key', async (req, res) => {
    try {
        const { userId } = req.body;
        
        const apiKey = crypto.randomBytes(32).toString('hex');
        const newApiKey = new ApiKeyModel({
            key: apiKey,
            userId,
            isActive: true,
            limits: {
                maxMessages: 1000,
                maxCallDuration: 3600
            }
        });

        await newApiKey.save();
        res.status(201).json(newApiKey);
    } catch (error) {
        console.error('Error generating API key:', error);
        res.status(500).json({ message: 'Error generating API key' });
    }
});

// Get all API keys for a user
router.get('/api-keys/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        
        // Check if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }
        
        const keys = await ApiKeyModel.find({ userId });
        res.json(keys);
    } catch (error) {
        console.error('Error fetching API keys:', error);
        res.status(500).json({ message: 'Error fetching API keys' });
    }
});

// Validate API key
router.post('/validate-key', async (req, res) => {
    try {
        const { apiKey } = req.body;
        const key = await ApiKeyModel.findOne({
            key: apiKey,
            isActive: true
        });

        if (!key) {
            return res.status(401).json({ message: 'Invalid API key' });
        }

        res.json({ valid: true });
    } catch (error) {
        console.error('Error validating API key:', error);
        res.status(500).json({ message: 'Error validating API key' });
    }
});

// Deactivate API key
router.post('/deactivate-key', async (req, res) => {
    try {
        const { key } = req.body;
        await ApiKeyModel.findOneAndUpdate(
            { key },
            { isActive: false }
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Error deactivating API key:', error);
        res.status(500).json({ message: 'Error deactivating API key' });
    }
});

// Track usage
router.post('/usage/track', validateApiKey, async (req, res) => {
    try {
        const { type, value } = req.body;
        const update = {};
        update[`usage.${type}`] = value;

        await ApiKeyModel.findOneAndUpdate(
            { key: req.apiKey },
            { $inc: update }
        );

        res.json({ success: true });
    } catch (error) {
        console.error('Error tracking usage:', error);
        res.status(500).json({ message: 'Error tracking usage' });
    }
});

// Get usage statistics
router.get('/usage/stats', validateApiKey, async (req, res) => {
    try {
        const { timeframe = 'daily' } = req.query;
        const key = await ApiKeyModel.findOne({ key: req.apiKey });

        if (!key) {
            return res.status(404).json({ message: 'API key not found' });
        }

        // For demo purposes, generate some sample data
        const days = timeframe === 'daily' ? 7 : timeframe === 'weekly' ? 4 : 12;
        const dailyStats = Array.from({ length: days }, (_, i) => ({
            date: new Date(Date.now() - (i * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
            messagesSent: Math.floor(Math.random() * 100),
            messagesReceived: Math.floor(Math.random() * 100),
            callsDuration: Math.floor(Math.random() * 3600),
            callsInitiated: Math.floor(Math.random() * 10)
        }));

        res.json({
            daily: dailyStats.reverse(),
            total: key.usage
        });
    } catch (error) {
        console.error('Error fetching usage stats:', error);
        res.status(500).json({ message: 'Error fetching usage stats' });
    }
});

module.exports = router;