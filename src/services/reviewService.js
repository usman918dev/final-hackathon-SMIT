import api from './api';

const submitReview = async (eventId, rating, comment, token) => {
  const response = await api.post(`events/reviews/${eventId}`,{ rating, comment });
  return response.data;
};

export default submitReview;
