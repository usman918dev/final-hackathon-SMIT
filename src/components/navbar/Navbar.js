import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Menu, X } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  // Detect screen width changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="logo-text">Eventure</h1>
      </div>

      {/* Mobile Menu Button */}
      {isMobile ? (
        <button className="menu-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      ) : (
        <>
          <div className="navbar-search">
            <label htmlFor="search">Search</label>
            <input type="text" placeholder="Search events..." />
          </div>
          <div className="navbar-location">
            <select>
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>
          <div className="create-eventBtn">
            <a href="./home/create-event" className="create-eventBtn">Create Event +</a>
          </div>
        </>
      )}

      {/* Sidebar Menu for Mobile */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-button" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
          <div className="sidebar-links">
            <input type="text" placeholder="Search events..." />
            <select>
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            <a href="./home/create-event" className="create-eventBtn">Create Event +</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
