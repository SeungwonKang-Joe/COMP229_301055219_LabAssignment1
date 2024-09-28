import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 최신 react-router-dom에서 useHistory 대신 useNavigate 사용

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate(); // useNavigate 훅으로 리디렉션 처리

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 폼 데이터 콘솔에 출력 (실제 백엔드 없이 시뮬레이션)
    navigate('/'); // 폼 제출 후 홈 페이지로 리디렉션
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Me</h1>

      {/* Contact Information Panel */}
      <div className="contact-panel">
        <p><strong>Phone:</strong> 1-111-222-3333</p>
        <p><strong>Email:</strong> skang69@centennial.ca</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
      </div>

      {/* Interactive Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;