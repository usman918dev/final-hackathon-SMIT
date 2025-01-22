const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Event = require('../models/Event');

// Post a review for an event
router.post('/reviews/:eventId', async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { eventId } = req.params;
    const userId = req.user._id; // Get the user ID from the authentication token (if available)

    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Create and save the review
    const newReview = new Review({
      eventId,
      userId,
      rating,
      comment
    });
    await newReview.save();

    res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

// Get all reviews for a specific event
router.get('/reviews/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch reviews for the event
    const reviews = await Review.find({ eventId }).populate('userId', 'name'); // Assuming user info is stored in a `User` model

    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

module.exports = router;
