import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text = "Data Science & AI/ML Engineer", speed = 80, deleteSpeed = 50, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length - 1));
      }, deleteSpeed);
    } else if (!isDeleting && displayedText.length === text.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), pause / 2);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, deleteSpeed, pause]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {displayedText}
      <span className="cursor-blink border-r-2 border-primary ml-1"></span>
    </span>
  );
};

export default TypingAnimation;