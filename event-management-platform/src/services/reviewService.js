import axios from 'axios';

const submitReview = async (eventId, rating, comment, token) => {
  const response = await axios.post(
    `http://localhost:5000/api/events/reviews/${eventId}`,
    { rating, comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default submitReview;
