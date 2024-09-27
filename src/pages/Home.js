import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Seungwon Kang, a passionate web developer.</p>
      <p>Explore my projects, services, and more.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
};

export default Home;