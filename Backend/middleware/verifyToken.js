const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    // JWT can be sent in headers, query, or body
    const token =
      req.headers['authorization']?.split(' ')[1] || // Bearer <token>
      req.query.token ||
      req.body.token;

    if (!token) {
      return res.status(401).json({ error: 'JWT token required' });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');

    // Attach decoded payload to request
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired JWT token' });
  }
};

module.exports = verifyToken;