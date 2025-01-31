import React, { useEffect, useState } from 'react'; // Add useState
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/slices/eventSlice';
import { useNavigate } from 'react-router-dom';
import EventCard from '../../components/event/EventCard';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import UserProfile from '../../components/userprofile/UserProfile';
import { getUserName } from '../../services/events';

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // Add state for username

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);

  const specificEventDetail = (id) => {
    navigate(`/event-details/${id}`);
  };

  const handleGetUserName = async () => {
    try {
      const username = await getUserName();
      setUsername(username); // Update state
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map(event => (
          <li key={event._id} className="event-item">
            {/* <EventCard key={event._id} event={event} imageUrl={event.imageUrl} /> */}
            <button onClick={() => specificEventDetail(event._id)}>Details</button>
          </li>
        ))}
      </ul>
      <UserProfile />
      <button onClick={handleGetUserName}>Get User Name</button>
      {username && <h1>{username}</h1>}
    </div>
  );
};

export default Home;
