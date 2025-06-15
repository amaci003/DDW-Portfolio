import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Contacto from './Contacto';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/DDW-Portfolio">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>
);
