import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function UpArrow() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down 400px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
}

export default UpArrow;
