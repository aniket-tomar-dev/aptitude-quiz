import { useState, useEffect } from "react";
import ResultView from "./components/ResultView";
import ActiveQuizView from "./components/ActiveQuizView";
import { useQuizKeyboard } from "./utlis/useQuizKeyboard";
import {
  BEST_KEY,
  THEME_KEY,
  buildDeck,
  readBestStreak,
  getInitialTheme,
} from "./utlis/quizUtils";

function App() {
  const [deck, setDeck] = useState(buildDeck);
  const [cardIndex, setCardIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(readBestStreak);
  const [finished, setFinished] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const total = deck.length;
  const currentCard = deck[cardIndex];
  const selectedOption = answers[cardIndex] ?? null;

  const correctCount = Object.entries(answers).filter(
    ([i, ans]) => ans === deck[i].back,
  ).length;
  const percent = Math.round((correctCount / total) * 100);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme]);

  function handleAnswer(selectedAnswer) {
    if (selectedOption !== null) return;
    setAnswers({ ...answers, [cardIndex]: selectedAnswer });
    if (selectedAnswer === currentCard.back) {
      const next = streak + 1;
      setStreak(next);
      if (next > bestStreak) {
        setBestStreak(next);
        try {
          localStorage.setItem(BEST_KEY, String(next));
        } catch {}
      }
    } else {
      setStreak(0);
    }
  }

  const handleNext = () => cardIndex < total - 1 && setCardIndex(cardIndex + 1);
  const handlePrev = () => cardIndex > 0 && setCardIndex(cardIndex - 1);
  const handleRestart = () => {
    setDeck(buildDeck());
    setCardIndex(0);
    setAnswers({});
    setStreak(0);
    setFinished(false);
  };

  useQuizKeyboard({
    finished,
    currentCard,
    handleAnswer,
    handleNext,
    handlePrev,
  });

  let message =
    percent >= 80
      ? "Fantastic performance! 🎉"
      : percent >= 50
        ? "Well done—just a bit more practice! 👍"
        : "Keep practicing—you can do it!💪";

  return (
    <div className="app">
      <main className="App">
        <header>
          <h1>Aptitude Quiz</h1>
          <span className="stats">
            Streak <strong>{streak}</strong> · Best{" "}
            <strong>{bestStreak}</strong>
          </span>
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </header>

        {finished ? (
          <ResultView
            correctCount={correctCount}
            total={total}
            percent={percent}
            message={message}
            wrongCount={Object.keys(answers).length - correctCount}
            skippedCount={total - Object.keys(answers).length}
            bestStreak={bestStreak}
            onReview={() => setFinished(false)}
            onRestart={handleRestart}
          />
        ) : (
          <ActiveQuizView
            total={total}
            cardIndex={cardIndex}
            currentCard={currentCard}
            selectedOption={selectedOption}
            answers={answers}
            handleAnswer={handleAnswer}
            handlePrev={handlePrev}
            handleNext={handleNext}
            isFirst={cardIndex === 0}
            isLast={cardIndex === total - 1}
            setCardIndex={setCardIndex}
            setFinished={setFinished}
          />
        )}
      </main>
    </div>
  );
}

export default App;
