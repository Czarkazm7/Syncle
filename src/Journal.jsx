import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState('');
  const [energy, setEnergy] = useState(3);
  const [symptoms, setSymptoms] = useState([]);
  const [notes, setNotes] = useState('');
  const [gratitude, setGratitude] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date, mood, energy, symptoms, notes, gratitude };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setMood('');
    setEnergy(3);
    setSymptoms([]);
    setNotes('');
    setGratitude('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-midnight to-violetCore text-white">
      <animated.div style={fade} className="p-6 rounded-lg shadow-lg bg-glassLilac backdrop-blur-md border border-white/10 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Cycle Journal</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Mood</label>
            <div className="flex space-x-4">
              {['😊', '😐', '😞', '😢', '😭'].map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setMood(emoji)}
                  className={`text-2xl ${mood === emoji ? 'text-roseAccent' : 'text-white'}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2">Energy Level</label>
            <input
              type="range"
              min="1"
              max="5"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>Low Tide</span>
              <span>Full Bloom</span>
            </div>
          </div>
          <div>
            <label className="block mb-2">Symptoms</label>
            <div className="flex space-x-4">
              {['Bloating', 'Cramps', 'Headache', 'Fatigue'].map((symptom) => (
                <label key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={symptoms.includes(symptom)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSymptoms([...symptoms, symptom]);
                      } else {
                        setSymptoms(symptoms.filter((s) => s !== symptom));
                      }
                    }}
                    className="mr-2"
                  />
                  {symptom}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2">What’s coming up for you today?</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2">One sweet thing today</label>
            <textarea
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-roseAccent to-plumGlow text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
          >
            Save Entry
          </button>
        </form>
      </animated.div>
      <animated.div style={fade} className="mt-8 p-6 rounded-lg shadow-lg bg-glassLilac backdrop-blur-md border border-white/10 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Past Entries</h2>
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="p-4 border rounded bg-glassLilac backdrop-blur-md border border-white/10">
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Mood:</strong> {entry.mood}</p>
              <p><strong>Energy:</strong> {entry.energy}</p>
              <p><strong>Symptoms:</strong> {entry.symptoms.join(', ')}</p>
              <p><strong>Notes:</strong> {entry.notes}</p>
              <p><strong>Gratitude:</strong> {entry.gratitude}</p>
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Journal;
