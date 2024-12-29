import axios from "axios";

const API_URL = "http://localhost:5000/api/events";

// Function to create a new event
export const createEvent = async (eventData) => {
  try {
    const token = localStorage.getItem("token"); // Auth token
    const response = await axios.post(`${API_URL}/create`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || "Unknown error" };
  }
};

// Function to fetch all events
export const fetchAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data; // Assuming your backend returns all events
  } catch (error) {
    console.error("Error fetching events:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || "Unknown error" };
  }
};
