import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Drawer,
  FormControl,
  InputLabel,
  InputAdornment,
  useTheme,
  Divider,
  Avatar,
  Badge,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Menu, X } from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [location, setLocation] = useState("Pakistan");

  const provinces = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Jammu & Kashmir",
  ];

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ 
          justifyContent: "space-between", 
          gap: 2,
          px: { xs: 2, md: 4 },
          py: 1
        }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 1,
                cursor: 'pointer'
              }}
              onClick={() => navigate("/home")}
            >
              Eventure
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box display="flex" gap={3} alignItems="center" flexGrow={1} mx={4}>
              {/* Search Bar */}
              <TextField
                placeholder="Search events..."
                variant="outlined"
                size="small"
                fullWidth
                sx={{ 
                  maxWidth: 400,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 50,
                    backgroundColor: theme.palette.action.hover,
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Location Select */}
              <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Location</InputLabel>
                <Select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start" sx={{ mr: 1 }}>
                      <LocationOnIcon color="action" fontSize="small" />
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: 50,
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 1
                    }
                  }}
                >
                  <MenuItem value="Pakistan">🇵🇰 Pakistan</MenuItem>
                  {provinces.map((province) => (
                    <MenuItem key={province} value={province}>
                      {province}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Action Buttons */}
          <Box display="flex" alignItems="center" gap={1}>
            {!isMobile && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => navigate("/home/create-event")}
                  sx={{
                    borderRadius: 50,
                    px: 3,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: 'none',
                    }
                  }}
                >
                  Create Event
                </Button>
                
                <IconButton onClick={() => navigate("/profile")}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar sx={{ width: 36, height: 36, bgcolor: theme.palette.primary.main }}>
                      <AccountCircleIcon />
                    </Avatar>
                  </StyledBadge>
                </IconButton>
              </>
            )}
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton 
                onClick={() => setIsSidebarOpen(true)} 
                color="inherit"
                sx={{
                  color: theme.palette.text.primary
                }}
              >
                <Menu size={24} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            p: 2,
            width: 320,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
          <IconButton
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </IconButton>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" flexDirection="column" gap={3} mt={2}>
          {/* Search */}
          <TextField
            placeholder="Search events..."
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 50,
                backgroundColor: theme.palette.action.hover,
              }
            }}
          />

          {/* Location */}
          <FormControl fullWidth size="small">
            <InputLabel>Location</InputLabel>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              startAdornment={
                <InputAdornment position="start" sx={{ mr: 1 }}>
                  <LocationOnIcon color="action" fontSize="small" />
                </InputAdornment>
              }
              sx={{
                borderRadius: 50,
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 1
                }
              }}
            >
              <MenuItem value="Pakistan">🇵🇰 Pakistan</MenuItem>
              {provinces.map((province) => (
                <MenuItem key={province} value={province}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Profile */}
          <Button
            startIcon={<AccountCircleIcon />}
            onClick={() => navigate("/profile")}
            sx={{
              justifyContent: 'flex-start',
              px: 2,
              py: 1.5,
              borderRadius: 1,
              textTransform: 'none',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              }
            }}
          >
            My Profile
          </Button>

          {/* Create Event */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => navigate("/home/create-event")}
            fullWidth
            sx={{
              borderRadius: 50,
              py: 1.5,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              }
            }}
          >
            Create Event
          </Button>

          <Divider sx={{ my: 1 }} />

          {/* Logout */}
          <Button
            variant="outlined"
            color="error"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
            fullWidth
            sx={{
              borderRadius: 50,
              py: 1.5,
              textTransform: 'none',
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;