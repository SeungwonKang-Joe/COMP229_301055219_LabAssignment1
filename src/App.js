import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar will be shown on all pages */}
        <Navbar />

        {/* Routes to define different paths and the corresponding components */}
        <Routes>
          <Route path="/COMP229_301055219_LabAssignment1/" element={<Home />} />
          <Route path="/COMP229_301055219_LabAssignment1/about" element={<About />} />
          <Route path="/COMP229_301055219_LabAssignment1/projects" element={<Projects />} />
          <Route path="/COMP229_301055219_LabAssignment1/services" element={<Services />} />
          <Route path="/COMP229_301055219_LabAssignment1/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;