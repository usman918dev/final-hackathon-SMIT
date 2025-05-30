import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import submitReview from '../services/reviewService'; // Import the new service
import "./ReviewForm.css"
const ReviewForm = () => {
  const { id: eventId } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    if (!rating || comment.trim().length < 10) {
      setError('Please select a rating and write a comment of at least 10 characters.');
      setIsSubmitting(false);
      return;
    }

    const token = localStorage.getItem('token');

    try {
      await submitReview(eventId, rating, comment, token); // Use the new service
      setSuccessMessage('Review submitted successfully!');
      setIsSubmitting(false);
      // setTimeout(() => {
      //   navigate(`/events/${eventId}`);
      // }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit review');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-form">
      <h3>Submit a Review</h3>
      {error && <p className="error text-red-500">{error}</p>}
      {successMessage && <p className="success text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label className="block text-sm font-medium mb-2">Rating:</label>
          <select
            className="border rounded p-2"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="" disabled>Select rating</option>
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <option key={ratingValue} value={ratingValue}>
                {ratingValue}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label className="block text-sm font-medium mb-2">Comment:</label>
          <textarea
            className="border rounded w-full p-2"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review (min 10 characters)"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
