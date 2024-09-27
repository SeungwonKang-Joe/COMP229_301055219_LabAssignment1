import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Your custom logo */}
        <svg height="50" width="50">
          <polygon points="25,0 50,50 0,50" style={{ fill: 'lightblue' }} />
          <text x="14" y="35" fill="black">SK</text>
        </svg>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;