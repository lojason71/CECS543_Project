import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // If you have any global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* This renders your App component */}
  </React.StrictMode>
);
