import React from 'react';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">My Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img src="hotelBooking.jpg" alt="Hotel Booking Service" />
          <h3>Hotel Booking Service</h3>
          <p>Developing seamless hotel booking systems with real-time availability and user-friendly interfaces.</p>
        </div>
        <div className="service-item">
          <img src="onlineShopping.jpg" alt="Online Shopping Mall" />
          <h3>Online Shopping Mall</h3>
          <p>Building robust e-commerce platforms that offer smooth shopping experiences and secure transactions.</p>
        </div>
        <div className="service-item">
          <img src="socialMedia.jpg" alt="Social Media Website" />
          <h3>Social Media Website</h3>
          <p>Creating interactive social media platforms for users to connect, share, and engage with multimedia content.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;