import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/events";

// Function to create a new event
export const createEvent = async (eventData) => {
  try {
    const token = localStorage.getItem("token"); // Auth token
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.post(`${API_URL}/create`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};



export const fetchAllEvents = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    console.error("Error details:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};
// const API_URL = 'http://localhost:5000/api/events';

export const fetchSpecificEventDetails = async (Id) => {
  const token = localStorage.getItem('token');
  
  try {
    // Use axios.get with the event ID included in the URL, not as a request body
    const response = await axios.get(`${API_URL}/event/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Event data received:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    console.error("Error details:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message || "Unknown error" };
  }
};