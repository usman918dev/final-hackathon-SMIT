import React from 'react';
import ThreeDotButton from '../3dotbtn/ThreeDotBtn';

function EventCard({ event }) {
  return (
    <div className="event-card">

      {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="event-card-img"/>}
      {/* <img className="event-card-img" src={image} alt={title} /> */}
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-date">{event.date}</p>
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-description">{event.description}</p>
        <button className="event-card-btn">RSVP Now</button>
        <ThreeDotButton/>
      </div>

    </div>
  );
}

export default EventCard;
