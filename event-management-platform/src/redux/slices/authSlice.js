import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    const { token } = response.data;
    
    // Store token in localStorage
    localStorage.setItem('token', token);
    
    console.log('====================================');
    console.log('Login form submitted:', credentials);
    console.log('====================================');
    return token;
  } catch (error) {
    // Return error message
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
