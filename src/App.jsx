import flashcards from "../data";
import { useState, useEffect } from "react";
import AnswerOption from "./components/AnswerOption";

const LABELS = ["A", "B", "C", "D"];
const BEST_KEY = "quiz-best-streak";
const THEME_KEY = "quiz-theme";

/* ---------- helpers ---------- */
function shuffle(arr) {
  const a = [...arr]; // copy, original data is never changed
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// shuffles the questions AND the options of every question
function buildDeck() {
  return shuffle(flashcards).map((card) => ({
    ...card,
    options: shuffle(card.options),
  }));
}

function readBestStreak() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* ---------- component ---------- */
function App() {
  const [deck, setDeck] = useState(buildDeck);
  const [cardIndex, setCardIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { cardIndex: selectedOption }
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(readBestStreak);
  const [finished, setFinished] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const total = deck.length;
  const currentCard = deck[cardIndex];
  const selectedOption = answers[cardIndex] ?? null;
  const isFirst = cardIndex === 0;
  const isLast = cardIndex === total - 1;

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([i, ans]) => ans === deck[i].back,
  ).length;
  const wrongCount = answeredCount - correctCount;
  const skippedCount = total - answeredCount;
  const percent = Math.round((correctCount / total) * 100);

  /* dark mode: set on <html> + remember */
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
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
        } catch {
          /* ignore */
        }
      }
    } else {
      setStreak(0);
    }
  }

  function handleNext() {
    if (!isLast) setCardIndex(cardIndex + 1);
  }

  function handlePrev() {
    if (!isFirst) setCardIndex(cardIndex - 1);
  }

  function handleRestart() {
    setDeck(buildDeck()); // new random order
    setCardIndex(0);
    setAnswers({});
    setStreak(0);
    setFinished(false);
  }

  /* keyboard shortcuts: A-D = answer, ← → = previous / next */
  useEffect(() => {
    function onKeyDown(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (finished) return;

      const optionIndex = ["a", "b", "c", "d"].indexOf(e.key.toLowerCase());

      if (optionIndex !== -1) {
        const option = currentCard.options[optionIndex];
        if (option !== undefined) handleAnswer(option);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  /* ---------- result message ---------- */
  let message = "Aur practice karo, tum kar loge! 💪";
  if (percent >= 80) message = "Shandaar performance! 🎉";
  else if (percent >= 50) message = "Accha kiya, thoda aur practice! 👍";

  return (
    <div className="app">
      <main className="App">
        <header>
          <h1>Quizconst</h1>

          <span className="stats">
            Streak <strong>{streak}</strong> · Best{" "}
            <strong>{bestStreak}</strong>
          </span>

          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </header>

        {finished ? (
          /* ---------------- RESULT SCREEN ---------------- */
          <section className="result">
            <p className="result-label">Quiz complete</p>
            <h2 className="result-score">
              {correctCount} <span>/ {total}</span>
            </h2>
            <p className="result-percent">{percent}% sahi</p>
            <p className="result-msg">{message}</p>

            <div className="result-grid">
              <div className="stat">
                <strong>{correctCount}</strong>
                <span>Correct</span>
              </div>
              <div className="stat">
                <strong>{wrongCount}</strong>
                <span>Wrong</span>
              </div>
              <div className="stat">
                <strong>{skippedCount}</strong>
                <span>Skipped</span>
              </div>
              <div className="stat">
                <strong>{bestStreak}</strong>
                <span>Best streak</span>
              </div>
            </div>

            <div className="result-actions">
              <button className="nav-btn" onClick={() => setFinished(false)}>
                Review answers
              </button>
              <button className="restart-btn" onClick={handleRestart}>
                Restart (shuffle)
              </button>
            </div>
          </section>
        ) : (
          /* ---------------- QUIZ SCREEN ---------------- */
          <>
            <p className="progress">
              Question {cardIndex + 1} / {total}
            </p>

            <div className="flashcard">
              <h2>{currentCard.front}</h2>
            </div>

            <div className="answers">
              {currentCard.options.map((option, i) => (
                <AnswerOption
                  key={option}
                  option={option}
                  label={LABELS[i]}
                  onAnswer={handleAnswer}
                  correctAnswer={currentCard.back}
                  selectedOption={selectedOption}
                />
              ))}
            </div>

            {selectedOption !== null && (
              <div className="solution">
                <strong>Solution</strong>
                <p>{currentCard.solution}</p>
              </div>
            )}

            <div className="nav">
              <button
                className="nav-btn"
                onClick={handlePrev}
                disabled={isFirst}
              >
                ← Previous
              </button>

              {isLast ? (
                <button
                  className="nav-btn finish"
                  onClick={() => setFinished(true)}
                >
                  Finish ✓
                </button>
              ) : (
                <button className="nav-btn" onClick={handleNext}>
                  Next →
                </button>
              )}
            </div>

            <p className="game-hint">
              Streak resets to 0 on a wrong answer.
              <span className="key-hint">
                {" "}
                Keys: A–D to answer, ← → to move.
              </span>
            </p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
