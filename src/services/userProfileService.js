import api from "./api";

const fetchUser = async () => {
  try {
    const response = await api.get("events/userProfile");
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch user data");
  }
};

export { fetchUser };