import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTestHistory } from "../hooks/useTestHistory";
import { getTestById } from "../data/index";
import { getCategoryBySlug } from "../data/categories";

const LABELS = ["A", "B", "C", "D"];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function ResultPage() {
  const { attemptId } = useParams();
  const { getAttemptById } = useTestHistory();
  const [activeTab, setActiveTab] = useState("summary");
  const [filter, setFilter] = useState("all");

  const attempt = getAttemptById(attemptId);

  if (!attempt) {
    return (
      <div className="page-container page-narrow">
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <h3>Result Not Found</h3>
          <p>This attempt may have been cleared from history.</p>
          <Link to="/dashboard" className="btn-primary">
            ← Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const test = getTestById(attempt.testId);
  const category = getCategoryBySlug(attempt.category);

  const {
    correct,
    wrong,
    skipped,
    percent,
    score,
    totalMarks,
    timeTaken,
    questions,
    answers,
  } = attempt;

  const grade =
    percent >= 90
      ? { label: "Excellent! 🎉", color: "#27ae60" }
      : percent >= 75
        ? { label: "Good Job! 👍", color: "#2980b9" }
        : percent >= 50
          ? { label: "Average 💪", color: "#f39c12" }
          : { label: "Needs Practice 📚", color: "#e74c3c" };

  // Filter questions for review
  const filteredQuestions = (questions || []).filter((q, i) => {
    const userAns = answers?.[i];
    if (filter === "correct") return userAns === q.correctAnswer;
    if (filter === "wrong")
      return userAns !== undefined && userAns !== q.correctAnswer;
    if (filter === "skipped") return userAns === undefined;
    return true;
  });

  return (
    <div className="page-container page-narrow">
      <div className="result-hero" style={{ "--grade-color": grade.color }}>
        <div className="result-hero-inner">
          <p className="result-label">Test Complete</p>
          <div className="result-score-display">
            <span className="result-big-score">{score}</span>
            <span className="result-total-score">/{totalMarks}</span>
          </div>
          <div className="result-percent-ring">
            <span style={{ color: grade.color }}>{percent}%</span>
          </div>
          <p className="result-grade" style={{ color: grade.color }}>
            {grade.label}
          </p>
          <p className="result-test-name">{attempt.testTitle}</p>
        </div>
      </div>

      <div className="result-stats-grid">
        <div className="res-stat correct">
          <strong>{correct}</strong>
          <span>✅ Correct</span>
        </div>
        <div className="res-stat wrong">
          <strong>{wrong}</strong>
          <span>❌ Wrong</span>
        </div>
        <div className="res-stat skipped">
          <strong>{skipped}</strong>
          <span>⏭ Skipped</span>
        </div>
        <div className="res-stat">
          <strong>{percent}%</strong>
          <span>📊 Accuracy</span>
        </div>
        <div className="res-stat">
          <strong>{formatTime(timeTaken)}</strong>
          <span>⏱ Time Taken</span>
        </div>
        <div className="res-stat">
          <strong>
            {correct > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0}%
          </strong>
          <span>🎯 Hit Rate</span>
        </div>
      </div>

      <div className="result-tabs">
        <button
          className={`result-tab${activeTab === "summary" ? " active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          📊 Summary
        </button>
        <button
          className={`result-tab${activeTab === "review" ? " active" : ""}`}
          onClick={() => setActiveTab("review")}
        >
          📖 Answer Review
        </button>
      </div>

      {activeTab === "summary" && (
        <div className="result-summary">
          <div className="result-perf-card">
            <h3>Performance Breakdown</h3>
            <div className="perf-bar-wrap">
              <div className="perf-bar-label">Correct</div>
              <div className="perf-bar-track">
                <div
                  className="perf-bar-fill perf-correct"
                  style={{
                    width: `${(correct / attempt.questions?.length || 0) * 100}%`,
                  }}
                />
              </div>
              <span>{correct}</span>
            </div>
            <div className="perf-bar-wrap">
              <div className="perf-bar-label">Wrong</div>
              <div className="perf-bar-track">
                <div
                  className="perf-bar-fill perf-wrong"
                  style={{
                    width: `${(wrong / attempt.questions?.length || 0) * 100}%`,
                  }}
                />
              </div>
              <span>{wrong}</span>
            </div>
            <div className="perf-bar-wrap">
              <div className="perf-bar-label">Skipped</div>
              <div className="perf-bar-track">
                <div
                  className="perf-bar-fill perf-skipped"
                  style={{
                    width: `${(skipped / attempt.questions?.length || 0) * 100}%`,
                  }}
                />
              </div>
              <span>{skipped}</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "review" && (
        <div className="review-section">
          <div className="review-filter">
            {["all", "correct", "wrong", "skipped"].map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f === "all" && ` (${questions?.length || 0})`}
                {f === "correct" && ` (${correct})`}
                {f === "wrong" && ` (${wrong})`}
                {f === "skipped" && ` (${skipped})`}
              </button>
            ))}
          </div>

          <div className="review-list">
            {filteredQuestions.map((q, displayIdx) => {
              const realIdx = (questions || []).indexOf(q);
              const userAns = answers?.[realIdx];
              const isCorrect = userAns === q.correctAnswer;
              const isSkipped = userAns === undefined;
              let statusClass = isSkipped
                ? "review-skipped"
                : isCorrect
                  ? "review-correct"
                  : "review-wrong";

              return (
                <div key={q.id} className={`review-item ${statusClass}`}>
                  <div className="review-item-header">
                    <span className="review-q-num">Q{realIdx + 1}</span>
                    <span className="review-status">
                      {isSkipped
                        ? "⏭ Skipped"
                        : isCorrect
                          ? "✅ Correct"
                          : "❌ Wrong"}
                    </span>
                  </div>
                  <p className="review-question">{q.question}</p>
                  <div className="review-options">
                    {q.options.map((opt, i) => {
                      let cls = "review-opt";
                      if (opt === q.correctAnswer) cls += " review-opt-correct";
                      else if (opt === userAns) cls += " review-opt-wrong";
                      return (
                        <div key={opt} className={cls}>
                          <span className="review-opt-label">{LABELS[i]}</span>
                          <span>{opt}</span>
                          {opt === q.correctAnswer && (
                            <span className="review-tick">✓</span>
                          )}
                          {opt === userAns && opt !== q.correctAnswer && (
                            <span className="review-cross">✗</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {q.explanation && (
                    <div className="review-explanation">
                      <strong>💡 Explanation:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="result-actions-row">
        <Link to="/dashboard" className="btn-secondary">
          ← Dashboard
        </Link>
        {test && (
          <Link to={`/test/${test.id}/instructions`} className="btn-primary">
            🔄 Retake Test
          </Link>
        )}
        <Link to="/test-history" className="btn-secondary">
          📊 History
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
