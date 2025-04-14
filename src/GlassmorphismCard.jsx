import React from 'react';

const GlassmorphismCard = ({ children }) => {
  return (
    <div className="bg-glassLilac backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto">
      {children}
    </div>
  );
};

export default GlassmorphismCard;
