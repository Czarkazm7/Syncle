import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Oracle = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
      <animated.div style={fade} className="text-center space-y-12 max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-6xl font-serif font-semibold text-white">Inner Knowing: The Oracle</h1>
        <div className="flex justify-center">
          <img src="/images/oracle.png" alt="Oracle Icon" className="w-32 h-32 animate-float" />
        </div>
        <p className="text-lg text-zinc-300">I trust my inner wisdom; it guides me toward my truth.</p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">The Essence of The Oracle</h2>
          <p className="leading-relaxed tracking-wide">
            The Oracle archetype embodies heightened intuition and a reflective nature. You prefer solitude or quiet reflection, finding clarity through introspection and dream journaling.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Strong intuitive hits before or during menstruation</li>
            <li>Finds clarity through introspection and dream journaling</li>
            <li>Receives recurring symbolic or spiritual nudges throughout her cycle</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Phase-by-Phase Guidance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Menstrual Phase</h3>
              <p>Encourage journaling, meditation, and dream tracking.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follicular Phase</h3>
              <p>Transform insights into practical goals or personal changes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ovulation Phase</h3>
              <p>Socialize mindfully, but remain open to intuitive “pings.”</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Luteal Phase</h3>
              <p>Pay attention to subtle signs and emotional shifts; wrap up tasks thoughtfully.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Lifestyle & Self-Care Tips</h2>
          <p className="leading-relaxed tracking-wide">
            Daily ritual example: “Spend a few minutes each evening writing down intuitive hits or vivid dreams.”
          </p>
          <p className="leading-relaxed tracking-wide">
            Self-care ideas: cozy, serene environments (soft lighting, candles, gentle music); nature walks to clear the mind.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Affirmation</h2>
          <p className="leading-relaxed tracking-wide">
            “My intuition is my compass, guiding me to clarity and peace.”
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Foods & Movement</h2>
          <p className="leading-relaxed tracking-wide">
            Foods: Warm, comforting soups and teas during menstruation; detox-friendly salads or green smoothies in follicular for mental clarity.
          </p>
          <p className="leading-relaxed tracking-wide">
            Movement: Gentle yoga, slow walking, or Pilates—any exercise that supports inward focus.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Journaling Prompts</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>What deeper truth is emerging for me at this stage of my cycle?</li>
            <li>How can I honor my instincts in day-to-day decisions?</li>
          </ul>
        </div>

        <div className="mt-12">
          <button className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Open Your Oracle Journal →
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Reflect on Your Dreams →
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Oracle;
