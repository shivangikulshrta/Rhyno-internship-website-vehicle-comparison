import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';


const RotatingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    onRest: () => setIndex((prev) => (prev + 1) % words.length),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return <animated.span style={props}>{words[index]}</animated.span>;
};

export default RotatingText;