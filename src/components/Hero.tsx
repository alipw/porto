import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Alif</span>
          </h1>
          <h2 className="hero-subtitle">
            Backend Developer & System Architect
          </h2>
          <p className="hero-description">
            I build efficient, secure, and scalable backend systems that power modern applications.
            With a strong background in competitive programming, I solve complex problems with elegant solutions.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* You can replace this with an actual image */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--primary-color)" d="M47.5,-67.2C59.3,-55.6,65.3,-38.5,70.3,-21.2C75.4,-3.9,79.5,13.7,74.3,28.1C69.1,42.5,54.6,53.7,39.3,63.4C24,73,8,81.1,-6.9,79.6C-21.8,78.1,-35.6,67.1,-47.1,54.8C-58.7,42.5,-67.9,28.9,-73.4,12.4C-78.9,-4.1,-80.7,-23.5,-73.1,-38.6C-65.5,-53.6,-48.4,-64.4,-32,-71.3C-15.6,-78.2,0.2,-81.2,15.6,-78.2C31.4,-75.2,35.7,-78.7,47.5,-67.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <span className="scroll-arrow"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero; 