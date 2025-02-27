import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li className="nav-item"><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
            <li className="nav-item"><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li className="nav-item"><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li className="nav-item"><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 