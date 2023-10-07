"use client"
import React, { useState, useEffect } from 'react';

const BubbleText = () => {
  const [text, setText] = useState('');
  const fullText = 'Unlock the Power of Data for a Brighter Future';

  useEffect(() => {
    let currentIndex = 0;
    const intervalDuration = 50;

    const animateText = () => {
      setText((prevText) => {
        if (currentIndex < fullText.length) {
          return prevText + fullText[currentIndex++];
        } else {
          clearInterval(intervalId); // Stop the animation
          setTimeout(() => {
            // Start the animation again after a 1-second delay
            currentIndex = 0;
            intervalId = setInterval(animateText, intervalDuration);
          }, 1000); // 1000 milliseconds = 1 second
          return prevText; // Keep the text as is
        }
      });
    };

    let intervalId = setInterval(animateText, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{text}</span>;
};

export default BubbleText;