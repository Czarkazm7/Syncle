import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const phases = [
  {
    name: 'Menstrual Phase',
    symbol: '🌑',
    subtitle: 'The Reset',
    emotionalState: 'Restful and rejuvenating',
    bestSelfCare: {
      foods: 'Warm, comforting foods',
      movements: 'Rest and light activity',
      rituals: 'Focus on relaxation and rest',
    },
    affirmation: 'I am healing and rejuvenating',
    color: 'bg-roseAccent',
    background: 'bg-[url("/path/to/menstrual-bg.svg")]',
  },
  {
    name: 'Follicular Phase',
    symbol: '🌸',
    subtitle: 'The Bloom',
    emotionalState: 'Energetic and vibrant',
    bestSelfCare: {
      foods: 'Salads, lean proteins',
      movements: 'Cardio, yoga',
      rituals: 'Stay active and hydrated',
    },
    affirmation: 'I am strong and capable',
    color: 'bg-sky-500',
    background: 'bg-[url("/path/to/follicular-bg.svg")]',
  },
  {
    name: 'Ovulation Phase',
    symbol: '🌱',
    subtitle: 'The Glow',
    emotionalState: 'Happy and confident',
    bestSelfCare: {
      foods: 'Whole grains, healthy fats',
      movements: 'Light exercise',
      rituals: 'Take it easy and relax',
    },
    affirmation: 'I am confident and attractive',
    color: 'bg-lime-500',
    background: 'bg-[url("/path/to/ovulation-bg.svg")]',
  },
  {
    name: 'Luteal Phase',
    symbol: '🌺',
    subtitle: 'The Nourish',
    emotionalState: 'Calm and centered',
    bestSelfCare: {
      foods: 'Nutritious carbs, proteins',
      movements: 'Rest and gentle exercise',
      rituals: 'Prioritize self-care',
    },
    affirmation: 'I am nurturing and caring',
    color: 'bg-violetCore',
    background: 'bg-[url("/path/to/luteal-bg.svg")]',
  },
];

const PhaseCard = ({ phase }) => {
  const [hovered, setHovered] = React.useState(false);

  const spring = useSpring({
    transform: hovered ? 'scale(1.01)' : 'scale(1)',
    boxShadow: hovered ? '0 10px 20px rgba(255, 105, 180, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={spring}
      className={`relative p-6 rounded-2xl shadow-xl bg-glassLilac backdrop-blur-md border border-white/10 ${phase.background} bg-no-repeat bg-cover`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute top-0 left-0 h-1 w-full ${phase.color} rounded-t-2xl`}></div>
      <h2 className="text-2xl font-bold mb-4 text-gray-100">{phase.symbol} {phase.name} — {phase.subtitle}</h2>
      <p className="text-gray-100"><strong>Emotional State:</strong> {phase.emotionalState}</p>
      <p className="text-gray-100"><strong>Best Foods:</strong> {phase.bestSelfCare.foods}</p>
      <p className="text-gray-100"><strong>Best Movements:</strong> {phase.bestSelfCare.movements}</p>
      <p className="text-gray-100"><strong>Creative Rituals:</strong> {phase.bestSelfCare.rituals}</p>
      <p className="text-gray-100"><strong>Daily Affirmation:</strong> {phase.affirmation}</p>
    </animated.div>
  );
};

const Phases = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-midnight to-violetCore text-white">
      <h1 className="text-4xl font-bold mb-8">Cycle Phases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {phases.map((phase, index) => (
          <PhaseCard key={index} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default Phases;
