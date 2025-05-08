import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import POSSystem from './pages/POS';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<POSSystem />} />
        <Route path="/pos" element={<POSSystem />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;