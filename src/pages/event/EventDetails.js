import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventDetails } from '../../redux/slices/eventSlice';
import Reviewpage from '../review/Reviewpage';
import "./eventDetails.css";
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
    return <div className="event-glass-container"><div className="event-glass-loading">Loading...</div></div>;
  }

  if (error) {
    return <div className="event-glass-container"><div className="event-glass-error">{error}</div></div>;
  }

  if (!event) {
    return <div className="event-glass-container"><div className="event-glass-error">Event not found</div></div>;
  }

  return (
    <div className="event-glass-container">
      {/* Event Image */}
      {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="event-glass-image" />}

      {/* Event Info */}
      <div className="event-glass-info">
        <h1 className="event-glass-title">{event.title}</h1>
        <p className="event-glass-description">{event.description}</p>
        <p className="event-glass-location">📍 {event.location}</p>
        <p className="event-glass-category">📌 {event.category}</p>
        <div className="event-glass-actions">
          <RemoveBtn />
          <button className="event-glass-review-btn" onClick={handleReviewClick}>Write a Review</button>
        </div>
      </div>

      {/* Review Section */}
      <Reviewpage id={id} />
    </div>
  );
}
