import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/slices/authSlice";
import { MoonLoader } from "react-spinners";
import "./Auth.css"; // Import your CSS file

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth); // Added loading state

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch signup action
    await dispatch(signup({ username, email, password }));
  };

  // Redirect user if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="su-page su-mine-container">
      <span className='su-side-card'>
        <h2>Welcome to Our Community! 🌟</h2>
        <p>
          Join thousands of users and experience the best platform for managing
          your events and bookings. Stay organized, stay connected!
        </p>
        <blockquote>
          "The journey of a thousand miles begins with a single step." <br/>- Lao Tzu
        </blockquote>
      </span>
      <span className="su-form su-form-main">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error if signup fails */}
        {loading && <MoonLoader size={30} color="#3498db" />} {/* Show loading spinner */}

        <form onSubmit={handleSubmit} className="su-form-main">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="register-now login-link">
          Already have an account? <a href="/login">Login Now</a>
        </p>
      </span>
    </div>
  );
};

export default Signup;
