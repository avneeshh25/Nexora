const express = require('express');
const router = express.Router();
const ApiKey = require('../models/ApiKeyModel');
const User = require('../models/UserModel');
const crypto = require('crypto');
const verifyToken = require('../middleware/verifyToken');

// Generate new API key (user authenticated via JWT)
router.post('/generate', verifyToken, async (req, res) => {
  try {
    const user = req.user._id; // user id from decoded JWT
    const { feature } = req.body;

    if (!feature) {
      return res.status(400).json({ error: 'Feature is required' });
    }

    // Check if user exists (optional, since JWT is trusted)
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a random API key
    const key = crypto.randomBytes(32).toString('hex');

    // Save the API key to the database
    const apiKey = new ApiKey({ key, user, feature });
    await apiKey.save();

    res.status(200).json({ key });
  } catch (err) {
    console.error('Error generating API key:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// List all API keys for the authenticated user
router.get('/user', verifyToken, async (req, res) => {
  try {
    const user = req.user._id;
    const apiKeys = await ApiKey.find({ user });
    res.json(apiKeys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Revoke an API key (user must own the key)
router.post('/revoke', verifyToken, async (req, res) => {
  try {
    const user = req.user._id;
    const { key } = req.body;
    const apiKey = await ApiKey.findOneAndUpdate(
      { key, user },
      { status: 'revoked' },
      { new: true }
    );
    if (!apiKey) return res.status(404).json({ error: 'API key not found or not owned by user' });
    res.json(apiKey);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Verify API key from SDK
router.post('/verify', async (req, res) => {
  try {
    const { key } = req.body;
    if (!key) {
      return res.status(400).json({ error: 'API key is required' });
    }

    const apiKey = await ApiKey.findOne({ key, status: 'active' });
    if (!apiKey) {
      return res.status(401).json({ valid: false, error: 'Invalid or revoked API key' });
    }

    res.json({ valid: true, feature: apiKey.feature, user: apiKey.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;