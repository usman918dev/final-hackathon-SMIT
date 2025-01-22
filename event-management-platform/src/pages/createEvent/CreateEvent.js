import React, { useState } from 'react';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../config/firebaseConfig';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
  });

  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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
    const token = localStorage.getItem('token'); // Get the JWT token from localStorage

    try {
      if (image) {
        setIsUploading(true);
        const storageRef = ref(storage, `event-images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error('Error uploading image:', error);
            setError('Failed to upload image');
            setIsUploading(false);
            setLoading(false);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('Image uploaded successfully, URL:', downloadURL);

            // Add the image URL to the formData
            const updatedFormData = { ...formData, imageUrl: downloadURL };

            // Send form data to the server
            const response = await axios.post(
              'http://localhost:5000/api/events/create',
              updatedFormData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log('Event created:', response.data);
            setLoading(false);
            setIsUploading(false);
          }
        );
      } else {
        // If no image, submit form data as is
        const response = await axios.post(
          'http://localhost:5000/api/events/create',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Event created:', response.data);
        setLoading(false);
      }
    } catch (err) {
      console.error('Error creating event:', err);
      setError('Failed to create event');
      setLoading(false);
      setIsUploading(false);
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
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" disabled={loading || isUploading}>
          {loading || isUploading ? 'Processing...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
