import React from "react";
import ThreeDotButton from "../3dotbtn/ThreeDotBtn";
import "./style.css"; // Import updated CSS
import RemoveBtn from "../removeBtn/RemoveBtn";

function EventCard({ event }) {
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
        <p className="event-card-date">📅 {event.date}</p>
        <p className="event-card-location">📍 {event.location}</p>
        <p className="event-card-description">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;
