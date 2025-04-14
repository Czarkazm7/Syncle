import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const TheMuse = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      <animated.div style={fade} className="text-center space-y-12 max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-6xl font-serif font-semibold text-pink-700">Creative Spark: The Muse</h1>
        <p className="text-lg text-gray-700">I express my essence fully and boldly.</p>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">About The Muse</h2>
          <p className="leading-relaxed tracking-wide">
            The Muse is full of expressive energy, especially during ovulation. She thrives in connection, lights up in social spaces, and channels emotion into creativity. From conversation to painting, she uses her voice and vision to inspire.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Radiant and social during ovulation</li>
            <li>Expresses emotions through art, writing, or dance</li>
            <li>Needs creative space to process feelings before menstruation</li>
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Cycle Phase Guidance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Menstrual Phase</h3>
              <p>Gentle journaling, sketching emotions</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follicular Phase</h3>
              <p>Experiment with ideas, plan creative outings</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ovulation Phase</h3>
              <p>Shine socially — host, share, perform</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Luteal Phase</h3>
              <p>Channel emotion into creative rituals (poetry, music, collage)</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Lifestyle Tips</h2>
          <p className="leading-relaxed tracking-wide">
            Daily creative habit: “Keep a spark notebook — jot words, doodles, or feelings each day.”
          </p>
          <p className="leading-relaxed tracking-wide">
            Self-care ideas: attend art workshops, decorate her space with beauty.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Affirmation</h2>
          <p className="leading-relaxed tracking-wide">
            “I let my creativity and joy flow freely.”
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Foods & Movement</h2>
          <p className="leading-relaxed tracking-wide">
            Foods: mood-supportive — berries, chocolate, seeds, avocado.
          </p>
          <p className="leading-relaxed tracking-wide">
            Movement: dance-based fitness, expressive yoga, nature walks with music.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-md p-6 max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-medium mb-4 leading-tight tracking-tight">Journaling Prompts</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>What story wants to be told through me today?</li>
            <li>What colors or images represent how I feel right now?</li>
          </ul>
        </div>

        <div className="mt-12">
          <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Start Your Creative Flow →
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
            Explore the Other Archetypes →
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default TheMuse;
