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

    const token = localStorage.getItem('token'); // Get the JWT token from localStorage

    try {
      // Sending POST request to the backend to create an event
      const response = await axios.post(
        'http://localhost:5000/api/events/create',
        formData,
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`, // Add JWT token to the request headers
        //   },
        // }
      );

      if (response.data.success) {
        alert('Event created successfully!');
        // Optionally, redirect or reset form after successful creation
        setFormData({
          title: '',
          description: '',
          date: '',
          location: '',
          category: '',
        });
      } else {
        alert('Failed to create event.');
      }
    } catch (error) {
      setError('Error creating event. Please try again.');
      console.error('Error creating event:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
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
        <div>
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










// import React, { useState } from 'react';
// import axios from 'axios';


// const CreateEvent = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     date: '',
//     location: '',
//     category: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const token = localStorage.getItem('token'); // Get the JWT token from localStorage

//     try {
//       const response = await axios.post('http://localhost:5000/api/events/create', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('Event created:', response.data);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to create event');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="create-event-container">
//       <h2>Create Event</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit} className="create-event-form">
//         <div className="form-group">
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Event Title"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Event Description"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Event Location"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             placeholder="Event Category"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Creating...' : 'Create Event'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;