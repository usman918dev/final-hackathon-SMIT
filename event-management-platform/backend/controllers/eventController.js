const Event = require('../models/Event'); // Assuming you have an Event model

// Controller to handle event creation
const createEvent = async (req, res) => {
  const { title, description, date, location, category } = req.body;

  // Validate incoming data
  if (!title || !description || !date || !location || !category) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      category,
      createdBy: req.user.id, // Assuming you store user ID from the JWT
    });

    const savedEvent = await newEvent.save();

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      event: savedEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { createEvent };
