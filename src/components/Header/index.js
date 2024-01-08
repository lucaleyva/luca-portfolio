import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/images/Me3.jpg';
import './styles.css';
import Typewriter from 'typewriter-effect';

function Header() {
  const headerTexts = ['Agile & Leadership Coach', 'Full Stack Developer', 'Extreme Programming (XP) Practitioner'];

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1 id="header_H1">Luca Leyva</h1>
          <p className="header_P">
            <Typewriter
              options={{
                strings: headerTexts,
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <img src={profileImage} alt="picture of Luca Leyva" className="profile-image" /> 
      </div>
    </header>
  );
}

export default Header;