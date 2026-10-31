import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getTestById } from "../data/index";
import { useQuizEngine } from "../hooks/useQuizEngine";
import QuestionPalette from "../components/QuestionPalette";

const LABELS = ["A", "B", "C", "D"];

function TestAttemptPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = getTestById(testId);

  const [showPalette, setShowPalette] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const quiz = useQuizEngine(test);

  useEffect(() => {
    if (quiz.isFinished && quiz.attemptId) {
      navigate(`/result/${quiz.attemptId}`, { replace: true });
    }
  }, [quiz.isFinished, quiz.attemptId, navigate]);

  if (!test) return <Navigate to="/categories" replace />;

  const {
    currentQuestion,
    selectedAnswer,
    currentIndex,
    total,
    answeredCount,
    timer,
  } = quiz;

  function handleSubmit() {
    if (showSubmitConfirm) {
      quiz.submitTest();
    } else {
      setShowSubmitConfirm(true);
    }
  }

  return (
    <div className="attempt-layout">
      <header className="attempt-header">
        <div className="attempt-title-wrap">
          <h2 className="attempt-title">{test.title}</h2>
          <span className="attempt-progress-label">
            {answeredCount}/{total} answered
          </span>
        </div>
        <div className="attempt-header-right">
          <div className={`timer-display timer-${timer.urgency}`}>
            <span className="timer-icon">⏱</span>
            <span className="timer-value">{timer.formatted}</span>
          </div>
          <button
            className="palette-toggle-btn"
            onClick={() => setShowPalette(!showPalette)}
          >
            📋 Palette
          </button>
        </div>
      </header>

      <div className="attempt-progress-bar">
        <div
          className="attempt-progress-fill"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      <div className="attempt-body">
        <main className="question-panel">
          <div className="question-meta">
            <span className="q-number">
              Q{currentIndex + 1} / {total}
            </span>
            <button
              className={`mark-btn ${quiz.markedForReview.has(currentIndex) ? "marked" : ""}`}
              onClick={quiz.toggleMarkForReview}
            >
              {quiz.markedForReview.has(currentIndex)
                ? "🔖 Marked"
                : "🏷 Mark for Review"}
            </button>
          </div>
          <div className="question-card">
            <p className="question-text">{currentQuestion?.question}</p>
          </div>

          <div className="options-grid">
            {currentQuestion?.options.map((opt, i) => {
              let optClass = "option-btn";
              if (selectedAnswer !== null) {
                if (opt === currentQuestion.correctAnswer)
                  optClass += " opt-correct";
                else if (opt === selectedAnswer) optClass += " opt-incorrect";
                else optClass += " opt-disabled";
              } else if (selectedAnswer === opt) {
                optClass += " opt-selected";
              }

              return (
                <button
                  key={opt}
                  className={optClass}
                  disabled={selectedAnswer !== null}
                  onClick={() => quiz.selectAnswer(opt)}
                >
                  <span className="opt-label">{LABELS[i]}</span>
                  <span className="opt-text">{opt}</span>
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && currentQuestion?.explanation && (
            <div className="solution-box">
              <strong>💡 Explanation</strong>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="question-nav">
            <button
              className="nav-btn-attempt"
              onClick={quiz.goPrev}
              disabled={quiz.isFirst}
            >
              ← Previous
            </button>

            {quiz.isLast ? (
              <button
                className="nav-btn-attempt btn-submit"
                onClick={handleSubmit}
              >
                ✅ Submit Test
              </button>
            ) : (
              <button
                className="nav-btn-attempt btn-next"
                onClick={quiz.goNext}
              >
                Next →
              </button>
            )}
          </div>
          {!quiz.isLast && (
            <div className="submit-area">
              <button className="btn-submit-all" onClick={handleSubmit}>
                Submit Test
              </button>
            </div>
          )}
        </main>

        {showPalette && (
          <aside className="palette-sidebar">
            <QuestionPalette
              total={total}
              getQuestionStatus={quiz.getQuestionStatus}
              onJump={quiz.goToQuestion}
              onClose={() => setShowPalette(false)}
            />
          </aside>
        )}
      </div>

      {showSubmitConfirm && !quiz.isFinished && (
        <div
          className="modal-overlay"
          onClick={() => setShowSubmitConfirm(false)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Submit Test?</h3>
            <div className="modal-stats">
              <div>
                <span>✅ Answered</span>
                <strong>{answeredCount}</strong>
              </div>
              <div>
                <span>❌ Unanswered</span>
                <strong>{quiz.unansweredCount}</strong>
              </div>
              <div>
                <span>🔖 Marked</span>
                <strong>{quiz.markedCount}</strong>
              </div>
            </div>
            {quiz.unansweredCount > 0 && (
              <p className="modal-warning">
                ⚠️ You have {quiz.unansweredCount} unanswered question
                {quiz.unansweredCount !== 1 ? "s" : ""}. Are you sure you want
                to submit?
              </p>
            )}
            <div className="modal-actions">
              <button
                className="btn-secondary"
                onClick={() => setShowSubmitConfirm(false)}
              >
                Continue Test
              </button>
              <button
                className="btn-danger"
                onClick={() => {
                  setShowSubmitConfirm(false);
                  quiz.submitTest();
                }}
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestAttemptPage;
