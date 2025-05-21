// EventList.js

import React from 'react';

function EventList() {
  // Define the rsvpEvent function
  const rsvpEvent = (eventId) => {
    // Your RSVP logic goes here
    console.log(`RSVP for event ID: ${eventId}`);
    // You might want to update state, or call an API to mark the event as RSVPed
  };

  return (
    <div>
      <h2>Event List</h2>
      {/* Example button that calls rsvpEvent */}
      <button onClick={() => rsvpEvent(1)}>RSVP to Event 1</button>
      <button onClick={() => rsvpEvent(2)}>RSVP to Event 2</button>
    </div>
  );
}

export default EventList;
