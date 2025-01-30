import api from "./api"; // Import your existing Axios instance

// Create Event
export const createEvent = async (eventData) => {
  try {
    const response = await api.post("/events/create", eventData); 
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};

// Fetch All Events
export const fetchAllEvents = async () => {
  try {
    const response = await api.get("/events/all"); 
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};

// Fetch Specific Event Details
export const fetchSpecificEventDetails = async (id) => {
  try {
    const response = await api.get(`/events/event/${id}`); 
    console.log("Event data received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};

export const getUserName = async () => {
  const username = await api.get("http://localhost:5000/api/user/username")
  console.log(username.data);

  return username.data
}
