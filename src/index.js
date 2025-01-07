import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this import for React 18
import './index.css'; // Tailwind or your custom CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
