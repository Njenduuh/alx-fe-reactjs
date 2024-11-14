// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import App component
import './index.css';     // If you have a global stylesheet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
