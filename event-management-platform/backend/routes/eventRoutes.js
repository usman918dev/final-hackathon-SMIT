const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new event
router.post('/create', authenticateToken, (req, res, next) => {
  console.log('POST /crehate route hit');
  next();
}, createEvent);

// Route to get all events
router.get('/all', authenticateToken, (req, res) => {
  console.log('GET /all route hit');
  getEvents(req, res);
});

module.exports = router;
