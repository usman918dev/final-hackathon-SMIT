import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventDetails } from '../../redux/slices/eventSlice';
import Reviewpage from '../review/Reviewpage';
import RemoveBtn from '../../components/removeBtn/RemoveBtn';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Chip,
  Button,
  CircularProgress,
  Alert,
  IconButton,
  useTheme
} from '@mui/material';
import {
  LocationOn,
  Category,
  CalendarToday,
  ArrowBack,
  RateReview,
  Edit
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReviewForm from '../../components/ReviewForm';

const EventImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 400,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(3),
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down('sm')]: {
    height: 250,
  },
}));

const EventDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.events.eventDetails);
  const loading = useSelector((state) => state.events.status === 'loading');
  const error = useSelector((state) => state.events.error);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchEventDetails(id));
  }, [dispatch, id]);

  const handleReviewClick = () => {
    navigate(`/event-details/review/${id}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={handleBackClick}>
          Go Back
        </Button>
      </Container>
    );
  }

  if (!event) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Event not found
        </Alert>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={handleBackClick}>
          Go Back
        </Button>
      </Container>
    );
  }

  // To handle multi-paragraph description, split by line breaks or double newlines
  // (assuming description text might contain '\n' or '\n\n')
  const descriptionParagraphs = event.description
    ? event.description.split(/\n\s*\n/) // split by double newlines
    : [];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleBackClick} sx={{ mr: 1 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="span" sx={{ cursor: 'pointer' }} onClick={handleBackClick}>
          Back to Events
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        {event.imageUrl && <EventImage src={event.imageUrl} alt={event.title} />}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, flex: 1, minWidth: 0 }}>
            {event.title}
          </Typography>

        </Box>

        {/* Description with proper paragraph spacing */}
        <Box sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
          {descriptionParagraphs.length > 0 ? (
            descriptionParagraphs.map((para, i) => (
              <Typography
                key={i}
                variant="body1"
                paragraph
                sx={{ mb: 2 }}
                style={{ whiteSpace: 'pre-line' }}
              >
                {para.trim()}
              </Typography>
            ))
          ) : (
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {event.description}
            </Typography>
          )}
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Chip
            icon={<LocationOn />}
            label={event.location || 'Location not specified'}
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.background.paper,
              px: 1,
            }}
          />
          <Chip
            icon={<Category />}
            label={event.category || 'Category not specified'}
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.background.paper,
              px: 1,
            }}
          />
          <Chip
            icon={<CalendarToday />}
            label={
              event.date
                ? new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'Date not specified'
            }
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.background.paper,
              px: 1,
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          startIcon={<RateReview />}
          onClick={handleReviewClick}
          sx={{ mt: 2 }}
        >
          Write a Review
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Event Reviews
        </Typography>
        {/* <ReviewForm id={id} /> */}
      </Paper>
    </Container>
  );
};

export default EventDetails;
