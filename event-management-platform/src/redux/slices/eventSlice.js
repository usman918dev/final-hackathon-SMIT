import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllEvents } from '../../services/events';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await fetchAllEvents();
  return response;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default eventsSlice.reducer;
