// src/components/BackToTopButton.js
import React, { useEffect, useState } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-success position-fixed`}
      style={{
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        display: isVisible ? 'inline-block' : 'none',
        borderRadius: '50%',
        padding: '10px 14px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

export default BackToTopButton;
