import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllEvents, fetchSpecificEventDetails, createEvent } from '../../services/events';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await fetchAllEvents();
  return response;
});

export const fetchEventDetails = createAsyncThunk('events/fetchEventDetails', async (eventId) => {
  const response = await fetchSpecificEventDetails(eventId);
  return response;
});

export const createNewEvent = createAsyncThunk('events/createNewEvent', async (eventData) => {
  const response = await createEvent(eventData);
  return response;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],  // List of all events
    eventDetails: null,  // Single event details
    status: 'idle',
    loading: false,  // Loading state
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Fetch all events
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.status = 'succeeded';
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
        state.loading = false;
      })

      // Fetch specific event details
      .addCase(fetchEventDetails.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchEventDetails.fulfilled, (state, action) => {
        state.eventDetails = action.payload;
        state.status = 'succeeded';
        state.loading = false;
      })
      .addCase(fetchEventDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
        state.loading = false;
      })

      // Create a new event
      .addCase(createNewEvent.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(createNewEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
        state.status = 'succeeded';
        state.loading = false;
      })
      .addCase(createNewEvent.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
        state.loading = false;
      });
  },
});

export default eventsSlice.reducer;
