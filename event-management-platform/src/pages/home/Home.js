import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/slices/eventSlice";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/event/EventCard";
import Navbar from "../../components/navbar/Navbar";
import UserProfile from "../../components/userprofile/UserProfile";
import { getUserName } from "../../services/events";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);

  const specificEventDetail = (id) => {
    navigate(`/event-details/${id}`);
  };

  const handleGetUserName = async () => {
    try {
      const fetchedUsername = await getUserName();
      setUsername(fetchedUsername);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h2 className="heading">🎉 Upcoming Events</h2>

        {events.length > 0 ? (
          <div className="event-grid">
            {events.map((event) => (
              <div key={event._id} className="event-card">
                <EventCard event={event} imageUrl={event.imageUrl} />
                <button
                  className="details-btn"
                  onClick={() => specificEventDetail(event._id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-events">No upcoming events available.</p>
        )}
      </div>

      <div className="user-section">
        <UserProfile />
        <button className="username-btn" onClick={handleGetUserName}>
          Get User Name
        </button>
        {username && <h2 className="username-display">👤 Hello, {username}!</h2>}
      </div>
    </div>
  );
};

export default Home;
