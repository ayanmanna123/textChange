import React from 'react';
 
import './index.css';
import App from './App';
 
import Home from './components/Home';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App title= "ayan manna" backgroundcolor = "dark"/>} />
      <Route path="/Home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
 
