"use client"
import React, { useState, useEffect } from 'react';

const TypePipe = ( {fulltext} : {fulltext :string}) => {
const [text, setText] = useState('');


useEffect(() => {
    let currentIndex = 0;
    const intervalDuration = 50;

    const animateText = () => {
      setText(fulltext.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fulltext.length) {
        clearInterval(intervalId); // Stop the animation
        setTimeout(() => {
          // Start the animation again after a 1-second delay
          currentIndex = 0;
          intervalId = setInterval(animateText, intervalDuration);
        }, 1000); // 1000 milliseconds = 1 second
      }
    };

    let intervalId = setInterval(animateText, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{text}</span>;
};

export default TypePipe;