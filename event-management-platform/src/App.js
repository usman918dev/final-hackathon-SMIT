import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import CreateEvent from './pages/createEvent/CreateEvent';
import EventDetails from './pages/event/EventDetails';
import ReviewForm from './components/ReviewForm.js';
import Reviewpage from './pages/review/Reviewpage';
import Try from './pages/login/Try.js';
import Auth from "./pages/login/Auth.js"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<Auth/> } />
        <Route path="/try" element={<Try/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/create-event" element={<CreateEvent />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/event-details/review/:id" element={<ReviewForm />} />
        <Route path="/review/:id" element={<Reviewpage />} />
      </Routes>
    </Router>
  );
}

export default App;
