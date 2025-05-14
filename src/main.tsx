
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Make sure we're listening on the correct port for production environments
const port = import.meta.env.VITE_PORT || 8080;
console.log(`Application starting on port ${port}`);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(<App />);
