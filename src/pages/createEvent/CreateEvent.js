import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../config/firebaseConfig';
import { createNewEvent } from '../../redux/slices/eventSlice';
import { useNavigate } from 'react-router-dom';
const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = (imageFile) => {
    return new Promise((resolve, reject) => {
      setIsUploading(true);
      const storageRef = ref(storage, `event-images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

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
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Image uploaded successfully, URL:', downloadURL);
          setIsUploading(false);
          resolve(downloadURL);
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = '';

      if (image) {
        imageUrl = await uploadImage(image);
      }

      const updatedFormData = { ...formData, imageUrl };

      await dispatch(createNewEvent(updatedFormData));
      navigate('/home')

      setLoading(false);
      setImage(null);
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        category: '',
      });
    } catch (err) {
      console.error('Error creating event:', err);
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
            // required
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
