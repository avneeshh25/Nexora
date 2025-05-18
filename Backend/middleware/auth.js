const ApiKeyModel = require('../models/ApiKeyModel');

const validateApiKey = async (req, res, next) => {
    try {
        const apiKey = req.headers.authorization?.replace('Bearer ', '');
        
        if (!apiKey) {
            return res.status(401).json({ message: 'No API key provided' });
        }
        
        const key = await ApiKeyModel.findOne({
            key: apiKey,
            isActive: true,
            expiresAt: { $gt: new Date() }
        });
        
        if (!key) {
            return res.status(401).json({ message: 'Invalid or expired API key' });
        }
        
        // Add API key to request object for later use
        req.apiKey = apiKey;
        req.userId = key.userId;
        
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { validateApiKey };