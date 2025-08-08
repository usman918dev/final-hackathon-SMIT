import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import submitReview from '../services/reviewService';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const ReviewForm = () => {
  const { id: eventId } = useParams();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    if (!rating || comment.trim().length < 10) {
      setError('Please select a rating and write a comment of at least 10 characters.');
      setIsSubmitting(false);
      return;
    }

    const token = localStorage.getItem('token');

    try {
      await submitReview(eventId, rating, comment, token);
      setSuccessMessage('Review submitted successfully!');
      setRating('');
      setComment('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit review');
    }
    setIsSubmitting(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h6" mb={2} fontWeight={600}>
        Submit a Review
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          id="rating-select"
          value={rating}
          label="Rating"
          onChange={(e) => setRating(e.target.value)}
          required
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Comment"
        multiline
        minRows={4}
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review (min 10 characters)"
        required
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        fullWidth
        startIcon={isSubmitting && <CircularProgress size={20} />}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </Button>
    </Box>
  );
};

export default ReviewForm;
