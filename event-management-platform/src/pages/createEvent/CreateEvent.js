import React, { useState } from 'react';
import axios from 'axios';


const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log('====================================');
    const token = localStorage.getItem('token'); // Get the JWT token from localStorage
    console.log(token);
    console.log('====\================================');
    
    try {
      const response = await axios.post('http://localhost:5000/api/events/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Event created:', response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to create event');
      setLoading(false);
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="create-event-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Event Location"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Event Category"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;