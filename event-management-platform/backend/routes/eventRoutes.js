const express = require('express');
const { createEvent } = require('../controllers/eventController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new event
router.post('/create', authenticateToken, (req, res, next) => {
    console.log('POST /create route hit');
    next();
  }, createEvent);
  
module.exports = router;
