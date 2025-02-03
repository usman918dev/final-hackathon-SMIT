import './Login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/authSlice';
import { MoonLoader } from 'react-spinners';
import Btn1 from '../../components/submit/Btn1';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // New state for forgot password
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowSpinner(true);
    setTimeout(async () => {
      const resultAction = await dispatch(login({ email, password }));
      setShowSpinner(false);

      if (login.fulfilled.match(resultAction)) {
        navigate('/home');
      } else {
        setShowForgotPassword(true); // Show the "Forgot Password" link if login fails
      }
    }, 2000);
    
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {showSpinner ? (
        <MoonLoader size={15} color="#3498db" />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">Login</button> */}
          <Btn1/>
        </form>
      )}

      {error && <p className="error-message">{error}</p>}
      
      {showForgotPassword && (
        <div className="forgot-password-link">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      )}
      
      <div className="register-now">
        <p>New user? <a href="/signup">Register now</a></p>
      </div>
    </div>
  );
};

export default Login;
