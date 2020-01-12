import React from 'react';
import { useTransition, animated } from 'react-spring';

const LoadAnimation = () => {
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0, 100vw, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -20vw, 0)' },
  });

  return (
    <>
      {transitions.map(({props, key }) => (
        <animated.div key={key} style={props} />
      ))}
    </>
  );
};

export default LoadAnimation;
