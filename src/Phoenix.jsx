import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Phoenix = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
      <animated.div style={fade} className="text-center space-y-12 max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-6xl font-serif font-semibold text-white">Rise Anew: The Phoenix</h1>
        <div className="flex justify-center">
          <img src="/images/phoenix.png" alt="Phoenix Icon" className="w-32 h-32 animate-float" />
        </div>
        <p className="text-lg text-zinc-300">I rise, renewed and ready.</p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">The Essence of The Phoenix</h2>
          <p className="leading-relaxed tracking-wide">
            The Phoenix archetype embodies rebirth and transformation. After a low phase, often post-menstruation, you burst with renewed energy and motivation. Each cycle is a chance to start fresh, using introspection to spark powerful comebacks.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Bursts of motivation after menstruation</li>
            <li>Viewing each cycle as a chance to “start fresh”</li>
            <li>Using introspection during low-energy times to spark powerful comebacks</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Phase-by-Phase Guidance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Menstrual Phase</h3>
              <p>Encourage rest, reflection, and letting go.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follicular Phase</h3>
              <p>Harness surging energy for new projects or goals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ovulation Phase</h3>
              <p>High creativity & social momentum—collaborate or network.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Luteal Phase</h3>
              <p>Plan for the next transformation, tie up loose ends.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Lifestyle & Self-Care Tips</h2>
          <p className="leading-relaxed tracking-wide">
            Daily ritual idea: “Write down what you want to let go of and burn or discard it symbolically.”
          </p>
          <p className="leading-relaxed tracking-wide">
            Suitable self-care activities: warm baths, essential oils like cinnamon/ginger.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Affirmation</h2>
          <p className="leading-relaxed tracking-wide">
            “I rise stronger and brighter with every new cycle.”
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Foods & Movement</h2>
          <p className="leading-relaxed tracking-wide">
            Recommended foods: spinach, beans, etc.
          </p>
          <p className="leading-relaxed tracking-wide">
            Suggested workouts: gentle yoga when feeling low; short sprints or HIIT when energy is at its peak.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Journaling Prompts</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>What old thoughts or patterns am I ready to shed this cycle?</li>
            <li>Where do I want to direct my renewed energy?</li>
          </ul>
        </div>

        <div className="mt-12">
          <button className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Start Tracking Your Transformation →
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Phoenix;
