import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function UpArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only update state if needed (for performance)
      const shouldBeVisible = window.scrollY > 400;
      setVisible(prev => prev !== shouldBeVisible ? shouldBeVisible : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
    data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="300"
      onClick={scrollToTop}
      className="fixed bottom-6 right-10 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}

export default UpArrow;
