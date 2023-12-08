import React from 'react';
import './styles.css';

const ScrollToTopBtn = () => {
  return (
    <div role="complementary" aria-label="Scroll to top button">
      <button id="scrollToTopBtn" onClick={() => window.scrollTo(0, 0)}>
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTopBtn;

