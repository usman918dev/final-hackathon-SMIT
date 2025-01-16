import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import CreateEvent from './pages/createEvent/CreateEvent';
import EventDetails from './pages/event/EventDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/create-event" element={<CreateEvent />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
