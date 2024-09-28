import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Seungwon Kang, a passionate web developer.</p>
      <p><b>As an aspiring web developer, my mission is to design and develop innovative, 
        user-centric websites and applications that enhance online experiences.
        I strive to combine creativity with technical expertise to deliver solutions that meet the evolving needs of 
        businesses and users alike. Through continuous learning and collaboration, 
        I aim to build a future where technology empowers people and transforms the way they 
        interact with the digital world.</b></p>
      <p>Explore my projects, services, and more.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
};

export default Home;