import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/slices/eventSlice';

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
