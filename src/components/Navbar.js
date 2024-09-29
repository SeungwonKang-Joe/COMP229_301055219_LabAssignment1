/* 
  File Name: COMP229_SeungwonKang.css
  Student's Name: Seungwon Kang
  StudentID: 301055219
  Date: September 28, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* My custom logo */}
        <svg height="50" width="50">
          <polygon points="25,0 50,50 0,50" style={{ fill: 'lightblue' }} />
          <text x="14" y="35" fill="black">SK</text>
        </svg>
      </div>
      <ul>
        <li><Link to="/COMP229_301055219_LabAssignment1/">Home</Link></li>
        <li><Link to="/COMP229_301055219_LabAssignment1/about">About Me</Link></li>
        <li><Link to="/COMP229_301055219_LabAssignment1/projects">Projects</Link></li>
        <li><Link to="/COMP229_301055219_LabAssignment1/services">Services</Link></li>
        <li><Link to="/COMP229_301055219_LabAssignment1/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;