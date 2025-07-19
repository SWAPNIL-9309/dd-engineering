import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DSA from './components/DSA';
import DBMS from './components/DBMS';
import OOP from './components/OOP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/dbms" element={<DBMS />} />
      <Route path="/oop" element={<OOP />} />
    </Routes>
  );
}

export default App;
