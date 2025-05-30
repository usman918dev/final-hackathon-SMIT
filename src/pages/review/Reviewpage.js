import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import ReviewForm from '../../components/ReviewForm';
import '../event/eventDetails.css'; // Import glassmorphism CSS

const EventDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null); 
  const { id: eventId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You need to log in to view reviews.');
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/events/reviews/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        setReviews(response.data.reviews);
        setError(null); 
      } catch (error) {
        console.error('Error fetching reviews:', error.response?.data?.message || error.message);
        setError(error.response?.data?.message || 'Failed to fetch reviews.');
      }
    };

    fetchReviews();
  }, [eventId]);

  return (
    <div className="review-glass-container">
      <h2 className="review-glass-title">Event Reviews</h2>
      <div className="review-glass-form-section">
        <h3 className="review-glass-form-title">Write a Review</h3>
        <div className="review-glass-form-card">
          <ReviewForm eventId={eventId} />
        </div>
      </div>
      <div className="review-glass-list">
        {error ? (
          <p className="review-glass-error">{error}</p>
        ) : reviews.length === 0 ? (
          <p className="review-glass-empty">No reviews yet</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="review-glass-card">
              <div className="review-glass-header">
                <span className="review-glass-user">
                  {review.userId?.name || 'Anonymous'}
                </span>
                <span className="review-glass-rating">
                  <span className="review-glass-star">★</span> {review.rating}/5
                </span>
              </div>
              <p className="review-glass-comment">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventDetails;
