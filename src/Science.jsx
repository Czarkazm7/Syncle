import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Science = () => {
  const [nerdMode, setNerdMode] = useState(false);

  const toggleView = () => {
    setNerdMode(!nerdMode);
  };

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-midnight to-violetCore text-white">
      <animated.div style={fade} className="p-6 rounded-lg shadow-lg bg-glassLilac backdrop-blur-md border border-white/10">
        <h2 className="text-2xl font-bold mb-4">Hormonal Changes Across the Menstrual Cycle</h2>
        <button
          onClick={toggleView}
          className="bg-gradient-to-r from-roseAccent to-plumGlow text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out mb-4"
        >
          {nerdMode ? 'Chill Mode' : 'Nerd Mode'}
        </button>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">28-Day Hormone Timeline</h3>
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for the hormone timeline chart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Hormone Timeline Chart</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Hormone Details</h3>
          {nerdMode ? (
            <div>
              <p><strong>Estrogen:</strong> Detailed scientific explanation with citations.</p>
              <p><strong>Progesterone:</strong> Detailed scientific explanation with citations.</p>
              <p><strong>LH:</strong> Detailed scientific explanation with citations.</p>
              <p><strong>FSH:</strong> Detailed scientific explanation with citations.</p>
            </div>
          ) : (
            <div>
              <p><strong>Estrogen:</strong> Supports the growth of the uterine lining.</p>
              <p><strong>Progesterone:</strong> Prepares the uterus for potential pregnancy.</p>
              <p><strong>LH:</strong> Triggers ovulation.</p>
              <p><strong>FSH:</strong> Stimulates the growth of follicles in the ovaries.</p>
            </div>
          )}
        </div>
      </animated.div>
    </div>
  );
};

export default Science;
