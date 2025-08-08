import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import ReviewForm from '../../components/ReviewForm';
import { 
  Box, 
  Typography, 
  Paper, 
  Divider, 
  CircularProgress 
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Reviewpage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);
  const { id: eventId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You need to log in to view reviews.');
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/events/reviews/${eventId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setReviews(response.data.reviews);
        setError(null);
      } catch (err) {
        console.error('Error fetching reviews:', err.response?.data?.message || err.message);
        setError(err.response?.data?.message || 'Failed to fetch reviews.');
      }
      setLoading(false);
    };

    fetchReviews();
  }, [eventId]);

  return (
    <Box maxWidth="md" mx="auto" p={3} bgcolor="background.paper" borderRadius={2} boxShadow={4}>
      <Typography variant="h4" component="h2" mb={3} fontWeight={700} textAlign="center">
        Event Reviews
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" mb={1} fontWeight={600}>
          Write a Review
        </Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <ReviewForm eventId={eventId} />
        </Paper>
      </Box>

      <Box>
        {loading ? (
          <Box display="flex" justifyContent="center" py={6}>
            <CircularProgress size={50} />
          </Box>
        ) : error ? (
          <Typography color="error" textAlign="center" fontWeight={600} mb={2}>
            {error}
          </Typography>
        ) : reviews.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" fontStyle="italic" mb={2}>
            No reviews yet
          </Typography>
        ) : (
          reviews.map((review) => (
            <Paper
              key={review._id}
              elevation={2}
              sx={{ mb: 3, p: 2, borderLeft: '5px solid', borderColor: 'primary.main' }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="subtitle1" fontWeight={600} fontStyle="italic">
                  {review.userId?.name || 'Anonymous'}
                </Typography>
                <Box display="flex" alignItems="center" color="warning.main" fontWeight={600}>
                  <StarIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {review.rating}/5
                </Box>
              </Box>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                {review.comment}
              </Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Reviewpage;
