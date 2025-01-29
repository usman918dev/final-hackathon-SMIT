import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// ✅ Attach token dynamically before every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get latest token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle expired token (401 error)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log('Token expired. Logging out...');
      localStorage.removeItem('token'); 
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default api;








