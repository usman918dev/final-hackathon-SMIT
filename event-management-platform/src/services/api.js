import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response, // Pass successful responses through
  async (error) => {
    if (error.response?.status === 401) {
      console.log('Token expired. Logging out...');
      localStorage.removeItem('token'); // Remove the invalid token
      window.location.href = '/login'; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
