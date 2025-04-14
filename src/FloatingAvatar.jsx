import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const FloatingAvatar = () => {
  const [phase, setPhase] = React.useState('Follicular');

  const spring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 20 },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={spring} className="fixed bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
      <img src="/images/avatar.png" alt="Assistant Avatar" className="w-12 h-12" />
    </animated.div>
  );
};

export default FloatingAvatar;
