import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Ensure 'root' is a valid DOM node
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
