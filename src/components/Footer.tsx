import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <h2>Portfolio</h2>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Social</h3>
            <ul>
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer">Dev.to</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:yourname@example.com">yourname@example.com</a></li>
              <li>Your City, Country</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Made with <span className="heart">❤</span> using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 