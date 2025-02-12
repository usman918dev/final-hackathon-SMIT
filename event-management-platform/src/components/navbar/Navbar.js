import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img  alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search events..." />
      </div>
      <div className="navbar-location">
        <select>
          <option value="">Select Location</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          {/* Add more locations as needed */}
        </select>
      </div>
      <div className='create-eventBtn'><a href='./home/create-event'>+</a></div>
      <div className="navbar-logout">
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* <UserProfile/> */}
      </div>
    </nav>
  );
};

export default Navbar;
