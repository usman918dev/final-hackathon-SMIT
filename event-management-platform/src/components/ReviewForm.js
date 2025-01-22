import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ eventId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        `http://localhost:5000/api/events/reviews/${eventId}`,
        { rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Review submitted:', response.data);
      setIsSubmitting(false);
    } catch (err) {
      setError('Failed to submit review');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-form">
      <h3>Submit a Review</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <option key={ratingValue} value={ratingValue}>
                {ratingValue}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
