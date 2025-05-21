import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import CreateEvent from "./pages/createEvent/CreateEvent";
import EventDetails from "./pages/event/EventDetails";
import ReviewForm from "./components/ReviewForm.js";
import Reviewpage from "./pages/review/Reviewpage";
import Mine from "./pages/mine/Mine";
import PageWrapper from "./components/pagewrapper/PageWrapper.js"; // Import the page transition wrapper

function AnimatedRoutes() {
  
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/home/create-event" element={<PageWrapper><CreateEvent /></PageWrapper>} />
        <Route path="/event-details/:id" element={<PageWrapper><EventDetails /></PageWrapper>} />
        <Route path="/event-details/review/:id" element={<PageWrapper><ReviewForm /></PageWrapper>} />
        <Route path="/review/:id" element={<PageWrapper><Reviewpage /></PageWrapper>} />
        <Route path="/mine" element={<PageWrapper><Mine /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;