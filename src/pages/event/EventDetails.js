import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventDetails } from '../../redux/slices/eventSlice';
import Reviewpage from '../review/Reviewpage';
import "./eventDetails.css"; // Import CSS file
import RemoveBtn from '../../components/removeBtn/RemoveBtn';

export default function EventDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.eventDetails);
  const loading = useSelector((state) => state.events.status === 'loading');
  const error = useSelector((state) => state.events.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEventDetails(id));
  }, [dispatch, id]);

  const handleReviewClick = () => {
    navigate(`/event-details/review/${id}`);
  };

  if (loading) {
    return <div className="event-details-container">Loading...</div>;
  }

  if (error) {
    return <div className="event-details-container error-message">{error}</div>;
  }

  if (!event) {
    return <div className="event-details-container error-message">Event not found</div>;
  }

  return (
    <div className="event-details-container">
      {/* Event Image */}
      {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="event-image" />}

      {/* Event Info */}
      <div className="event-info">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>
        <p className="event-location">📍 {event.location}</p>
        <p className="event-category">📌 {event.category}</p>
        <RemoveBtn />
        {/* Review Button */}
        <button className="review-btn" onClick={handleReviewClick}>Write a Review</button>
      </div>

      {/* Review Section */}
      <Reviewpage id={id} />
    </div>
  );
}
