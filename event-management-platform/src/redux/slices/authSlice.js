import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api'; 

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", credentials);
      const { token, userId } = response.data; // ✅ Get userId from response

      // ✅ Store both token and userId in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      console.log("userId", userId);
      
      return { token, userId }; // ✅ Return both for Redux state
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signup', userData);
      const { token, userId } = response.data; // ✅ Include userId

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      return { token, userId }; // ✅ Return both
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    error: null,
    loading: false, // ✅ Add loading state
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    },
    clearAuth: (state) => {
      state.error = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true; // ✅ Set loading to true while logging in
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false; // ✅ Set loading to false after successful login
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false; // ✅ Set loading to false after error
      })
      .addCase(signup.pending, (state) => {
        state.loading = true; // ✅ Set loading to true during signup
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false; // ✅ Set loading to false after successful signup
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false; // ✅ Set loading to false after error
      });
  },
});


export const { logout, clearAuth } = authSlice.actions;
export default authSlice.reducer;
