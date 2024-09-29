import React from 'react';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">My Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img src="hotelBooking.jpg" alt="Hotel Booking Service" />
          <h3>Hotel Booking Service</h3>
          <p>This project focuses on creating a seamless, user-friendly hotel booking platform. It allows users to search for hotels, check room availability, make reservations, and manage bookings. Key features include real-time updates and responsive design for various devices.</p>
        </div>
        <div className="service-item">
          <img src="onlineShopping.jpg" alt="Online Shopping Mall" />
          <h3>Online Shopping Mall</h3>
          <p>The online shopping mall is an e-commerce platform where users can browse products, add items to a cart, and make purchases. It incorporates user authentication, product filtering, and secure transactions with an intuitive, scalable design.</p>
        </div>
        <div className="service-item">
          <img src="socialMedia.jpg" alt="Social Media Website" />
          <h3>Social Media Website</h3>
          <p>A social media platform that lets users create profiles, share multimedia content (photos and videos), follow others, and engage with posts through comments and likes. The platform supports real-time notifications and an interactive news feed, fostering user engagement and social interaction.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;