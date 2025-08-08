// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode for premium feel
    primary: {
      main: '#7DD3FC', // Soft sky blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#60A5FA', // Muted royal blue
      contrastText: '#fff',
    },
    background: {
      default: '#0F172A', // Deep slate/navy
      paper: '#1E293B',   // Slightly lighter for cards
    },
    text: {
      primary: '#F1F5F9', // Near white
      secondary: '#94A3B8', // Muted blue-grey
    },
    error: {
      main: '#F87171', // Soft red
    },
    success: {
      main: '#4ADE80', // Soft green
    },
    warning: {
      main: '#FACC15', // Premium yellow
    },
    info: {
      main: '#38BDF8', // Bright sky blue
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: {
      fontWeight: 600,
      letterSpacing: '0.3px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 14, // Slightly more rounded for premium look
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove paper gradient
        },
      },
    },
  },
});

export default theme;
