import React, { useState } from 'react';
import './styles.css';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav role="navigation">
      <div className="navbar-container">
        <ul className={isMenuVisible ? 'nav-list active' : 'nav-list'} role="menu">
          <li role="none"><a href="/" onClick={toggleMenu} role="menuitem">Home</a></li>
          <li role="none"><a href="#about" onClick={toggleMenu} role="menuitem">About</a></li>
          <li role="none"><a href="#expertise" onClick={toggleMenu} role="menuitem">Expertise</a></li>
          <li role="none"><a href="#services" onClick={toggleMenu} role="menuitem">Services</a></li>
          <li role="none"><a href="#testimonials" onClick={toggleMenu} role="menuitem">Testimonials</a></li>
          <li role="none"><a href="#contact" onClick={toggleMenu} role="menuitem">Contact</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu} role="button">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;