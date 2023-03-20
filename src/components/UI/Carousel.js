import React, { useState, useEffect } from 'react';

const Carousel = ({ textItems, delay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % textItems.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentIndex, delay, textItems]);

  return (
    <div className="carousel">
      <p>{textItems[currentIndex]}</p>
    </div>
  );
};

export default Carousel;
