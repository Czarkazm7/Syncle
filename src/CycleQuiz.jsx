import { useState } from "react";

const questions = [
  {
    question: "How’s your energy today?",
    options: ["Low", "Medium", "High"],
  },
  {
    question: "What’s your emotional vibe?",
    options: ["Sensitive", "Chill", "Playful", "Driven"],
  },
  {
    question: "When did your last period start?",
    options: [
      "Today or yesterday",
      "3–7 days ago",
      "8–14 days ago",
      "15+ days ago",
    ],
  },
  {
    question: "What do you most feel like doing today?",
    options: ["Resting", "Creating", "Socializing", "Finishing things"],
  },
];

const results = {
  Menstrual: {
    emoji: "🌑",
    title: "Menstrual — The Reset",
    message:
      "This is your inner winter — a time for rest, reflection, and renewal.",
  },
  Follicular: {
    emoji: "🌱",
    title: "Follicular — The Bloom",
    message:
      "You're entering a fresh, creative space. Say yes to new ideas and movement.",
  },
  Ovulation: {
    emoji: "🌼",
    title: "Ovulation — The Glow",
    message:
      "You’re radiant, magnetic, and made to connect. Express yourself freely!",
  },
  Luteal: {
    emoji: "🍂",
    title: "Luteal — The Grounding",
    message:
      "It’s time to get cozy, clear clutter, and say no with love. Go inward.",
  },
};

function CycleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setStep("result");
    }
  };

  const getResult = () => {
    if (!answers.length) return results.Menstrual;

    const score = answers.join(" | ");

    if (score.includes("Today") || score.includes("Low")) {
      return results.Menstrual;
    } else if (score.includes("8–14") || score.includes("Playful")) {
      return results.Ovulation;
    } else if (score.includes("3–7") || score.includes("Medium")) {
      return results.Follicular;
    } else {
      return results.Luteal;
    }
  };

  const current = questions[step];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-midnight via-violetCore to-midnight text-white font-sans">
      <div className="bg-glassLilac backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md text-center border border-white/10 transition-all duration-500">
        {step !== "result" ? (
          <>
            <div className="text-sm mb-3 text-zincMist">
              Step {step + 1} of {questions.length}
            </div>
            <h2 className="text-2xl font-bold mb-6">{current.question}</h2>
            <div className="flex flex-col gap-4">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="bg-gradient-to-r from-roseAccent to-plumGlow text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="text-5xl">{getResult().emoji}</div>
            <h2 className="text-2xl font-bold">{getResult().title}</h2>
            <p className="text-md text-zincMist">{getResult().message}</p>
            <button
              onClick={() => {
                setStep(0);
                setAnswers([]);
              }}
              className="mt-6 bg-gradient-to-r from-roseAccent to-plumGlow text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
            >
              Take it again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CycleQuiz;
