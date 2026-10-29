import React from "react";

function ResultView({
  correctCount,
  total,
  percent,
  message,
  wrongCount,
  skippedCount,
  bestStreak,
  onReview,
  onRestart,
}) {
  return (
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
        <button className="nav-btn" onClick={onReview}>
          Review answers
        </button>
        <button className="restart-btn" onClick={onRestart}>
          Restart (shuffle)
        </button>
      </div>
    </section>
  );
}

export default ResultView;
