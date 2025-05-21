import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import eventsReducer from './slices/eventSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
  },
});

export default store;
