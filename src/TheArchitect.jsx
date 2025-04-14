import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const TheArchitect = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-gray-100">
      <animated.div style={fade} className="text-center space-y-12 max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-6xl font-serif font-semibold text-gray-100">Master Planner: The Architect</h1>
        <p className="text-lg text-gray-300">I build my life with intention and precision.</p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">About The Architect</h2>
          <p className="leading-relaxed tracking-wide">
            The Architect is strategic and intentional. Her cycle mirrors her mind — steady, thoughtful, and driven by clarity. Especially in the luteal phase, she thrives on planning, wrapping up projects, and laying groundwork for the next chapter.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Peak productivity in the luteal phase</li>
            <li>Loves lists, structure, and systematizing life</li>
            <li>Finds power in reflecting and optimizing during menstruation</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Cycle Phase Guidance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Menstrual Phase</h3>
              <p>Reflect and review what worked (and didn’t)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follicular Phase</h3>
              <p>Map out goals and start structured planning</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ovulation Phase</h3>
              <p>Share plans or collaborate where energy supports it</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Luteal Phase</h3>
              <p>Focus mode — refine, finish, finalize</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Lifestyle Tips</h2>
          <p className="leading-relaxed tracking-wide">
            Daily ritual: “End the day with a 3-minute audit: what went well, what to shift.”
          </p>
          <p className="leading-relaxed tracking-wide">
            Self-care ideas: minimalist desk setup, digital detox evenings, habit tracker use.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Affirmation</h2>
          <p className="leading-relaxed tracking-wide">
            “I design my life with purpose. Every step is intentional.”
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Foods & Movement</h2>
          <p className="leading-relaxed tracking-wide">
            Foods: complex carbs, omega-3s, and mood stabilizers (quinoa, sweet potato, leafy greens, walnuts).
          </p>
          <p className="leading-relaxed tracking-wide">
            Movement: structured workouts (circuits, Pilates, strength training); restorative yoga during menstruation.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-600 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Journaling Prompts</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Which systems in my life are supporting me — and which ones are draining me?</li>
            <li>What can I refine this cycle to feel more focused and empowered?</li>
          </ul>
        </div>

        <div className="mt-12">
          <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Start Your Cycle Plan →
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Meet the Other Archetypes →
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default TheArchitect;
