import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  styled,
  keyframes,
  Chip
} from '@mui/material';
import {
  Event as EventIcon,
  People as PeopleIcon,
  RateReview as ReviewIcon,
  LocationOn as LocationIcon,
  Celebration as CelebrationIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/slices/eventSlice';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AnimatedButton = styled(Button)(({ theme }) => ({
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    animation: 'none',
    transform: 'scale(1.05)'
  }
}));
const ClampedText = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '4.5em', // Ensures consistent height for 3 lines
});
const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 360,          // Max width in px (you can adjust this)
  width: '100%',          // Make it responsive (full width of container up to maxWidth)
  margin: '0 auto',       // Center horizontally if container is wider
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[8],
  },
}));


export default function Welcome() {
  const navigate = useNavigate();
  const theme = useTheme();
  const specificEventDetail = (id) => {
    navigate(`/event-details/${id}`);
  };
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
  }, [dispatch, status]);
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          color: theme.palette.primary.contrastText,
          py: 10,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.5
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3
                }}
              >
                Discover & Create
                <br />
                <Box component="span" sx={{ color: theme.palette.secondary.light }}>
                  Amazing Events
                </Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Eventure helps you find, manage, and create unforgettable experiences.
                Join thousands of event organizers and attendees.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <AnimatedButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowIcon />}
                  onClick={() => navigate("/login")}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 50,
                    fontWeight: 600
                  }}
                >
                  Get Started
                </AnimatedButton>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 50,
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': { borderWidth: 2 }
                  }}
                >
                  Explore Events
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  perspective: '1000px'
                }}
              >
                <CelebrationIcon
                  sx={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    fontSize: 120,
                    color: theme.palette.secondary.light,
                    opacity: 0.7,
                    transform: 'rotate(20deg)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2
              }
            }}
          >
            Why Choose Eventure?
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 8, color: 'text.secondary' }}>
            Everything you need to manage events seamlessly
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <EventIcon
                    color="primary"
                    sx={{ fontSize: 60, mb: 2, opacity: 0.8 }}
                  />
                  <Typography gutterBottom variant="h5" component="h3">
                    Create Events
                  </Typography>
                  <Typography>
                    Easily create and manage your events with our intuitive dashboard.
                    Set dates, locations, tickets and more in just a few clicks.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <PeopleIcon
                    color="primary"
                    sx={{ fontSize: 60, mb: 2, opacity: 0.8 }}
                  />
                  <Typography gutterBottom variant="h5" component="h3">
                    Connect With Attendees
                  </Typography>
                  <Typography>
                    Engage with your audience through our platform. Get real-time
                    feedback and build a community around your events.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <ReviewIcon
                    color="primary"
                    sx={{ fontSize: 60, mb: 2, opacity: 0.8 }}
                  />
                  <Typography gutterBottom variant="h5" component="h3">
                    Share Reviews
                  </Typography>
                  <Typography>
                    Read and write reviews about events. Help others discover
                    great experiences and learn from community feedback.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Popular Events Section */}

  <Box sx={{ py: 10, bgcolor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 2,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 4,
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2,
            },
          }}
        >
          Popular Events
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 8, color: "text.secondary" }}
        >
          Discover trending events in your area
        </Typography>

<Grid container spacing={4} sx={{ 
  display: 'grid',
  gridTemplateColumns: { 
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  },
  gap: 4
}}>
  {events.slice(0, 6).map((event, index) => (
    <Grid key={index} sx={{ display: "flex" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%", // ensure cards are same height
          transition: "transform 0.3s",
          "&:hover": { transform: "translateY(-5px)" },
          boxShadow: 3,
          maxWidth: 360,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <CardMedia
          component="img"
          image={event.imageUrl}
          alt={event.title}
          sx={{
            height: 200,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1, // take remaining space so footer is pushed down
            display: "flex",
            flexDirection: "column",
            p: 3,
            "&:last-child": { pb: 3 },
            minHeight: 220, // prevent uneven cards
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ mb: 1 }}
          >
            {event.title}
          </Typography>

          {/* Category Chip */}


          <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "4.5em",
            }}
          >
            {event.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "auto",
              mb: 2,
            }}
          >
            <LocationOnIcon
              color="action"
              sx={{ mr: 1, fontSize: 18 }}
            />
            <Typography variant="body2" color="text.secondary">
              {event.location || "Major Cities, PK"}
            </Typography>
            
          </Box>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => specificEventDetail(event._id)}
            sx={{
              alignSelf: "flex-start",
              borderRadius: 50,
              textTransform: "none",
              fontSize: "0.75rem",
              px: 2.5,
              py: 0.8,
            }}
            startIcon={<ArrowForwardIcon fontSize="small" />}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/events")}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 },
            }}
          >
            View All Events
          </Button>
        </Box>
      </Container>
    </Box>
      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          // background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://source.unsplash.com/random/1600x800/?crowd')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Create Your Next Event?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9 }}>
            Join thousands of organizers who trust Eventure to manage their events
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowIcon />}
            onClick={() => navigate("/home/create-event")}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            Create Event Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}