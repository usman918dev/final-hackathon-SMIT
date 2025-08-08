import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../redux/slices/authSlice';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
  useTheme,
} from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      navigate('/home');
    } else {
      setShowForgotPassword(true);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Paper
        elevation={6}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 360,
          p: 4,
          bgcolor: theme.palette.background.paper,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={2}
          sx={{ color: theme.palette.primary.main }}
        >
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            sx: {
              bgcolor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderRadius: 1,
            },
          }}
          InputLabelProps={{
            sx: { color: theme.palette.text.secondary },
          }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            sx: {
              bgcolor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderRadius: 1,
            },
          }}
          InputLabelProps={{
            sx: { color: theme.palette.text.secondary },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            height: 45,
            bgcolor: theme.palette.primary.main,
            '&:hover': { bgcolor: theme.palette.secondary.main },
            borderRadius: 1,
            fontWeight: 'bold',
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>

        {showForgotPassword && (
          <Typography
            variant="body2"
            textAlign="center"
            mt={2}
            component={Link}
            to="/forgot-password"
            style={{
              textDecoration: 'none',
              color: theme.palette.info.main,
            }}
          >
            Forgot your password?
          </Typography>
        )}

        <Box textAlign="center" mt={3}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            New user?{' '}
            <Link
              to="/signup"
              style={{
                color: theme.palette.info.main,
                textDecoration: 'none',
              }}
            >
              Register now
            </Link>
          </Typography>
          <Typography variant="body2" mt={1}>
            <Link
              to="/home"
              style={{
                color: theme.palette.info.main,
                textDecoration: 'none',
              }}
            >
              Guest login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
