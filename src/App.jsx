import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import Phases from './Phases';
import Journal from './Journal';
import Science from './Science';
import FloatingAvatar from './FloatingAvatar';
import GlassmorphismCard from './GlassmorphismCard';
import CycleQuiz from './CycleQuiz';
import Phoenix from './Phoenix';
import Oracle from './Oracle';
import TheMuse from './TheMuse';
import TheArchitect from './TheArchitect';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-b ${darkMode ? 'from-gray-900 to-gray-800' : 'from-indigo-950 to-purple-900'} text-white relative`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-purple-900 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/path/to/your/svg-blob.svg')] bg-no-repeat bg-cover opacity-30 blur-2xl"></div>
          <div className="absolute inset-0 bg-[url('/path/to/your/organic-circle.svg')] bg-no-repeat bg-cover opacity-30 blur-2xl"></div>
        </div>
        <nav className="p-4 flex justify-between items-center relative z-10 max-w-6xl mx-auto sticky top-0 bg-indigo-950/80 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Sync & Flow Logo" className="w-12 h-12" />
            <span className="text-lg font-semibold uppercase">Sync & Flow</span>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white font-medium hover:underline transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/phases" className="text-white font-medium hover:underline transition-colors duration-300">Phases</Link>
            </li>
            <li>
              <Link to="/journal" className="text-white font-medium hover:underline transition-colors duration-300">Journal</Link>
            </li>
            <li>
              <Link to="/science" className="text-white font-medium hover:underline transition-colors duration-300">Science</Link>
            </li>
            <li>
              <Link to="/quiz" className="text-white font-medium hover:underline transition-colors duration-300">Quiz</Link>
            </li>
            <li>
              <Link to="/phoenix" className="text-white font-medium hover:underline transition-colors duration-300">Phoenix</Link>
            </li>
            <li>
              <Link to="/oracle" className="text-white font-medium hover:underline transition-colors duration-300">Oracle</Link>
            </li>
            <li>
              <Link to="/muse" className="text-white font-medium hover:underline transition-colors duration-300">The Muse</Link>
            </li>
            <li>
              <Link to="/architect" className="text-white font-medium hover:underline transition-colors duration-300">The Architect</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="text-white dark:text-gray-800">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
        <FloatingAvatar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phases" element={<Phases />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/science" element={<Science />} />
          <Route path="/quiz" element={<CycleQuiz />} />
          <Route path="/phoenix" element={<Phoenix />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/muse" element={<TheMuse />} />
          <Route path="/architect" element={<TheArchitect />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const pulse = useSpring({
    loop: { reverse: true },
    from: { scale: 1 },
    to: { scale: 1.05 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 py-20 px-6 bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/path/to/your/svg-blob.svg')] bg-no-repeat bg-cover opacity-30 blur-2xl"></div>
        <div className="absolute inset-0 bg-[url('/path/to/your/organic-circle.svg')] bg-no-repeat bg-cover opacity-30 blur-2xl"></div>
      </div>
      <animated.div style={fade} className="text-center space-y-12 relative z-10 max-w-6xl mx-auto">
        <h1 className="text-6xl font-serif font-semibold text-white">Reclaim Your Rhythm. Redefine Your Power.</h1>
        <p className="text-lg text-zinc-300">A science-backed cycle syncing system for modern women who want to feel powerful all month long.</p>
        <animated.button style={pulse} className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          Take the Cycle Quiz →
        </animated.button>
      </animated.div>

      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-white text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Step 1</h3>
            <p className="text-zinc-300">Sign up and take the quiz to understand your cycle.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Step 2</h3>
            <p className="text-zinc-300">Get personalized insights and tips.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Step 3</h3>
            <p className="text-zinc-300">Sync with your body and feel empowered.</p>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-white text-center mb-12">Choose Your Sync Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center">
            <img src="/images/sync1.png" alt="Sync Type 1" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Type 1</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center">
            <img src="/images/sync2.png" alt="Sync Type 2" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Type 2</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center">
            <img src="/images/sync3.png" alt="Sync Type 3" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Type 3</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center">
            <img src="/images/sync4.png" alt="Sync Type 4" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Type 4</h3>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-white text-center mb-12">Results That Speak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <p className="text-zinc-300">“Sync & Flow has completely transformed my relationship with my cycle.”</p>
            <p className="text-zinc-300 mt-4">— Jane D.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <p className="text-zinc-300">“I feel more in tune with my body than ever before.”</p>
            <p className="text-zinc-300 mt-4">— Sarah L.</p>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-white text-center mb-12">Meet Your Coach</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <img src="/images/avatar.png" alt="Coach Avatar" className="w-48 h-48 rounded-full shadow-xl" />
          <div className="text-center md:text-left">
            <p className="text-zinc-300">“I’m here to guide you through your cycle journey with love and expertise.”</p>
            <p className="text-zinc-300 mt-4">— Your Coach</p>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-semibold text-white mb-8">Start Your Sync Journey</h2>
        <animated.button style={pulse} className="bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          Take the Cycle Quiz →
        </animated.button>
      </div>
    </div>
  );
};

export default App;
