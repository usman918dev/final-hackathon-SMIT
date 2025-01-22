import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetails = ({ eventId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/reviews/${eventId}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [eventId]);

  return (
    <div className="event-details">
      <h2>Event Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review">
            <p><strong>{review.userId.name}</strong> rated {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
      <ReviewForm eventId={eventId} />
    </div>
  );
};

export default EventDetails;
