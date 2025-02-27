import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              {/* Replace this with your image */}
              <div className="placeholder-image"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              Hello! I'm a passionate backend developer with full-stack capabilities. I specialize in 
              building efficient, secure, and scalable applications that deliver exceptional performance.
              My expertise lies in designing and implementing robust backend systems that can handle 
              complex business requirements.
            </p>
            
            <h3>My Expertise</h3>
            <p>
              With years of experience, I've mastered the art of creating both small, efficient monolith 
              applications and large-scale microservices architectures. I take pride in writing clean, 
              maintainable code that stands the test of time and scales with business needs.
            </p>
            
            <h3>Competitive Programming</h3>
            <p>
              My strong background in competitive programming has sharpened my problem-solving skills and 
              algorithmic thinking. This experience allows me to approach complex technical challenges with 
              confidence and find optimal solutions even under tight constraints.
            </p>
            
            <h3>When I'm Not Coding</h3>
            <p>
              Outside of professional work, I enjoy staying updated with the latest backend technologies, 
              participating in coding competitions, and contributing to open-source projects. I believe that 
              continuous learning and diverse technical challenges help me grow as a developer.
            </p>
            
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 