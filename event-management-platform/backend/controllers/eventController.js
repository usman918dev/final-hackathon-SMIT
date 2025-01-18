const Event = require('../models/Event');

// Controller to handle event creation
console.log("jhgfh");
const createEvent = async (req, res) => {
  const { title, description, date, location, category } = req.body;

  if (!title || !description || !date || !location || !category) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
console.log('====================================');
console.log('====================================');
  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      category,
      createdBy: req.user.id,
    });

    const savedEvent = await newEvent.save();

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      event: savedEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Controller to fetch all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createEvent, getEvents };
