import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
const darkTheme = createTheme({
  palette: {
    mode: 'light', // change to 'dark' if you want dark mode default
  },
});

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
