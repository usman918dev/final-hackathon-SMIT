import React from "react";
import ThreeDotButton from "../3dotbtn/ThreeDotBtn";
import "./style.css"; // Import updated CSS
import RemoveBtn from "../removeBtn/RemoveBtn";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  const specificEventDetail = (id) => {
    navigate(`/event-details/${id}`);
  };

  return (
    <div className="event-card">
      {/* Three-dot button positioned at the top-right */}
      <div className="three-dot-container">
        <ThreeDotButton />
        {/* <RemoveBtn/> */}
      </div>

      {/* Event Image */}
      {event.imageUrl && (
        <img src={event.imageUrl} alt={event.title} className="event-card-img" />
      )}

      {/* Event Content */}
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        {/* <p className="event-card-date">📅 {event.date}</p> */}
        {/* <p className="event-card-location">📍 {event.location}</p> */}
        <p className="event-card-description">{event.description}</p>
        <button
          className="details-btn"
          onClick={() => specificEventDetail(event._id)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
