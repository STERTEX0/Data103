import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import RecommendedFood from './components/RecommendedFood'; // Import RecommendedFood component
import ImportantPlaces from './components/ImportantPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommended-food" element={<RecommendedFood />} />
      <Route path="/important-places" element={<ImportantPlaces />} />
    </Routes>
  );
}

export default App;
