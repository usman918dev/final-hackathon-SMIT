// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signup } from '../../redux/slices/authSlice';

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const resultAction = await dispatch(signup({ username, email, password }));
//     if (signup.fulfilled.match(resultAction)) {
//       navigate('/home');
//     }
//   };

//   return (
//     <div className='signupPage'>
//       <div className='signup-form'>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit} className='form'>
//           <div className='form-group'>
//             <label htmlFor='username'>Username:</label>
//             <input
//               className='input'
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Email:</label>
//             <input
//               className='input'
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Password:</label>
//             <input
//               className='input'
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Redux state
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    // Dispatch signup action
    await dispatch(signup({ username, email, password }));
    setIsLoading(false); // End loading state
  };

  // Use useEffect to navigate once the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='signupPage'>
      <div className='signup-form'>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>} {/* Display error message if signup fails */}
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              className='input'
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              className='input'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              className='input'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
