import axios from 'axios';

// Create an axios instance with the default Authorization header
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for your API
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}` // Attach token to each request
  }
});

// Example of making an authenticated API request
api.get('/protected')  // Protected route
  .then((response) => {
    console.log(response.data);  // Handle successful response
  })
  .catch((error) => {
    console.error(error);  // Handle error (e.g., token invalid or expired)
  });

export default api;
