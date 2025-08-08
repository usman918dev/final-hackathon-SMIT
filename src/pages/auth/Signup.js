import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../redux/slices/authSlice";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signup({ username, email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        color: "#E0E0E0",
      }}
    >
      <Paper
        elevation={6}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 380,
          p: 4,
          bgcolor: "#1E293B",
          borderRadius: 0.5,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#60A5FA" }}
        >
          Create Your Account
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={3}
          sx={{ color: "#94A3B8" }}
        >
          Join thousands of users and start your journey today 🚀
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: 1 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            sx: { bgcolor: "#0F172A", color: "#E0E0E0", borderRadius: 1 },
          }}
          InputLabelProps={{ sx: { color: "#94A3B8" } }}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            sx: { bgcolor: "#0F172A", color: "#E0E0E0", borderRadius: 1 },
          }}
          InputLabelProps={{ sx: { color: "#94A3B8" } }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            sx: { bgcolor: "#0F172A", color: "#E0E0E0", borderRadius: 1 },
          }}
          InputLabelProps={{ sx: { color: "#94A3B8" } }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            height: 45,
            bgcolor: "#60A5FA",
            "&:hover": { bgcolor: "#3B82F6" },
            borderRadius: 1,
            fontWeight: "bold",
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
        </Button>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#60A5FA", textDecoration: "none" }}>
              Login now
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
