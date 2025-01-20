import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllEvents, fetchSpecificEventDetails } from '../../services/events';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await fetchAllEvents();
  return response;
});

export const fetchEventDetails = createAsyncThunk('events/fetchEventDetails', async (eventId) => {
  const response = await fetchSpecificEventDetails(eventId);
  return response;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],  // List of all events
    eventDetails: null,  // Single event details
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;  // Store all events
        state.status = 'succeeded';
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(fetchEventDetails.fulfilled, (state, action) => {
        state.eventDetails = action.payload;  // Store specific event details
        state.status = 'succeeded';
      })
      .addCase(fetchEventDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default eventsSlice.reducer;
