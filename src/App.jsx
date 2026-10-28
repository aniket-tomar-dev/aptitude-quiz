import flashcards from "../data";
import { useState } from "react";
import AnswerOption from "./components/AnswerOption";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const currentCard = flashcards[cardIndex];
  const selectedOption = answers[cardIndex] ?? null;
  const isFirst = cardIndex === 0;
  const isLast = cardIndex === flashcards.length - 1;

  function handleAnswer(selectedAnswer) {
    if (selectedOption !== null) {
      return;
    }

    setAnswers({ ...answers, [cardIndex]: selectedAnswer });

    if (selectedAnswer === currentCard.back) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }
  function handleNext() {
    if (!isLast) setCardIndex(cardIndex + 1);
  }
  function handlePrev() {
    if (!isFirst) setCardIndex(cardIndex - 1);
  }
  function handleRestart() {
    setCardIndex(0);
    setAnswers({});
    setScore(0);
  }

  return (
    <div className="app">
      <main className="App">
        <header>
          <h1>Aptitude Test</h1>

          <span>
            Score <strong>{score}</strong>
          </span>
        </header>
        <p className="progress">
          Question {cardIndex + 1} / {flashcards.length}
        </p>

        <div className="flashcard">
          <h2>{currentCard.front}</h2>
        </div>

        <div className="answers">
          {currentCard.options.map((option) => (
            <AnswerOption
              key={option}
              option={option}
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
          <button className="nav-btn" onClick={handlePrev} disabled={isFirst}>
            ← Previous
          </button>
          <button className="nav-btn" onClick={handleNext} disabled={isLast}>
            Next →
          </button>
        </div>

        {isLast && selectedOption !== null && (
          <button className="restart-btn" onClick={handleRestart}>
            Restart quiz
          </button>
        )}

        <p className="game-hint">
          Every correct answer increases your score. One mistake resets it.
        </p>
      </main>
    </div>
  );
}

export default App;
