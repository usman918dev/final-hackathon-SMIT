import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/slices/eventSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map(event => (
          <li key={event.id} className="event-item">
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <button onClick={() => navigate('/event-details')}>details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const Home = () => {
//   const events = [
//     { id: 1, name: 'Event 1', date: '2023-10-01' },
//     { id: 2, name: 'Event 2', date: '2023-10-15' },
//     { id: 3, name: 'Event 3', date: '2023-11-01' },
//   ];
//   const navigate = useNavigate();

//   return (
//     <div className="homePage">
//       <div className="welcome-container">
//         <h1>Welcome to the Event Management Platform</h1>
//         <p>Here are the upcoming events:</p>
//         <ul className="event-list">
//           {events.map(event => (
//             <li key={event.id} className="event-item">
//               <h3>{event.name}</h3>
//               <p>{event.date}</p>
//               <button onClick={() => navigate('/event-details')}>details</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;