import React, { useState } from "react";
import AnswerOption from "../components/AnswerOption";
import { LABELS } from "../utlis/quizUtils";

function ActiveQuizView({
  total,
  cardIndex,
  currentCard,
  selectedOption,
  answers,
  handleAnswer,
  handlePrev,
  handleNext,
  isFirst,
  isLast,
  setCardIndex,
  setFinished,
}) {
  const [navOpen, setNavOpen] = useState(false);
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <div className="progress-row">
        <p className="progress">
          Question {cardIndex + 1} / {total}
          <span className="progress-sub"> · {answeredCount} answered</span>
        </p>
        <button
          className="jump-btn"
          onClick={() => setNavOpen(!navOpen)}
          aria-expanded={navOpen}
        >
          {navOpen ? "Close" : "Jump to"}
        </button>
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={answeredCount}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="progress-fill"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      {navOpen && (
        <div className="question-nav-grid">
          {Array.from({ length: total }).map((_, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isActive = idx === cardIndex;
            return (
              <button
                key={idx}
                className={`q-btn ${
                  isActive ? "is-active" : isAnswered ? "is-answered" : ""
                }`}
                onClick={() => {
                  setCardIndex(idx);
                  setNavOpen(false);
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      )}

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
        <button className="nav-btn" onClick={handlePrev} disabled={isFirst}>
          ← Previous
        </button>

        {isLast ? (
          <button className="nav-btn finish" onClick={() => setFinished(true)}>
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
        <span className="key-hint"> Keys: A–D to answer, ← → to move.</span>
      </p>
    </>
  );
}

export default ActiveQuizView;
