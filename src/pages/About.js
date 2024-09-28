import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="I will path to my here image.jpg" alt="Seungwon Kang" />
      <p>My name is Seungwon Kang, and I am an aspiring web developer with a strong interest in creating modern,
         responsive, and user-friendly websites. Currently,
         I am working on expanding my skills in both front-end and back-end development,
         with a focus on technologies such as HTML, CSS, JavaScript, and frameworks like React.
         I am also learning server-side development and database management to build full-stack applications.</p>
         
      <p>In addition to technical skills, I am passionate about solving complex problems,
            collaborating in teams, and continuously improving my knowledge of the latest industry trends.
            My portfolio includes projects like a hotel booking system, an online shopping mall,
            and a social media platform, which reflect my commitment to building functional and visually appealing web applications.</p>
      <p>I am driven by the desire to develop solutions that not only meet business goals but also enhance the user experience.
             With my growing knowledge and dedication, I am excited about the future opportunities in the field of web development.</p>
      <a href="/resumeTest.pptx" download>Download my Resume</a>
    </div>
  );
};

export default About;