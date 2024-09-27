import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="path_to_your_image.jpg" alt="Seungwon Kang" />
      <p>My name is Seungwon Kang, and I am a web developer.</p>
      <a href="path_to_your_resume.pdf" download>Download my Resume</a>
    </div>
  );
};

export default About;