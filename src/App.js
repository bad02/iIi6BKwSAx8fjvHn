import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BMICalculation from './components/BMICalculation';
import Resume from './components/Resume';

function App() {
  return (
    <Router basename="/iIi6BKwSAx8fjvHn">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMICalculation />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;


