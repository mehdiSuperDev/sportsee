// import { useState, useEffect } from "react";
import '../styles/global.css';
import '../styles/variables.css';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
