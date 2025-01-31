// 


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/slices/authSlice";
import { MoonLoader } from "react-spinners"; // Import spinner

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
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/home");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <div className="signupPage">
      <div className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>} {/* Display error if signup fails */}
        {loading && <MoonLoader size={30} color="#3498db" />} {/* Show loading spinner */}

        <form onSubmit={handleSubmit} className="form">
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

        <p className="login-link">
          Already have an account? <a href="/login">Login Now</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
