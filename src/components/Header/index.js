import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/images/me.jpg';
import styles from './styles.css';
import Typewriter from 'typewriter-effect';

function Header() {
  const [headerText, setHeaderText] = useState('Agile & Leadership Coach');
  const headerTexts = ['Agile & Leadership Coach', 'Full Stack Developer', 'Extreme Programming (XP) Practitioner'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = index + 1 === headerTexts.length ? 0 : index + 1;
      setHeaderText(headerTexts[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        <img src={profileImage} alt="Luca Leyva" className="profile-image" /> {/* Use the imported image */}
      </div>
    </header>
  );
}

export default Header;