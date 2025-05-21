import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import ReviewForm from '../../components/ReviewForm';

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
    <div className="event-details">
      <h2>Event Reviews</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p> // Display error message
      ) : reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review">
            <p>
              <strong>
                {review.userId?.name || 'Anonymous'} {/* Safely access user name */}
              </strong>{' '}
              rated {review.rating}/5
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
      {/* <ReviewForm eventId={eventId} /> */}
    </div>
  );
};

export default EventDetails;
