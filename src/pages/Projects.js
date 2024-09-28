import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div>
        <img src="HotelProject.jpg" alt="Hotel Booking Service" />
        <h2>Hotel Booking Service</h2>
        <p> In this project, I took on the role of a full-stack web developer, responsible for designing and implementing both the front-end user interface and the back-end functionality. I developed the booking system from the ground up, ensuring an intuitive and responsive experience for users, while also managing the server-side logic and database integration.</p>
        <p>The outcome was a functional hotel booking platform that allows users to search for available rooms, view detailed descriptions, and make reservations seamlessly.</p>
      </div>
      <div>
        <img src="shoppingProject.jpg" alt="Online Shopping Mall" />
        <h2>Online Shopping Mall</h2>
        <p>In this project, I served as a front-end developer, focusing on creating an efficient and user-friendly e-commerce platform. I was responsible for the front-end, ensuring that the website provides a smooth shopping experience. My role involved designing the product catalog, implementing the shopping cart functionality.</p>
        <p>This project allowed me to apply my skills in technologies such as React, Node.js and demonstrated my ability to create scalable e-commerce solutions that enhance the user experience while streamlining business operations.</p>
      </div>
      <div>
        <img src="socialProject.jpg" alt="Social Media Website" />
        <h2>Social Media Website</h2>
        <p>In this ongoing project, I responsible for designing and developing a social media platform similar to Instagram. My primary role is to create an engaging and interactive user experience while managing the technical implementation of core features such as user authentication, profile management, and real-time interactions.</p>
      </div>
    </div>
  );
};

export default Projects;