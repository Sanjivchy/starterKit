// routes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../page404/page404'; // Assuming you have a NotFound component

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Fallback route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
