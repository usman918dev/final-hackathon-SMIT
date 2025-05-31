import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css'; // Import your global styles
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
