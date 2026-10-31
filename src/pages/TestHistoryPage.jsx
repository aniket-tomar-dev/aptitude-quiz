import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTestHistory } from "../hooks/useTestHistory";
import { CATEGORIES } from "../data/categories";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function TestHistoryPage() {
  const { history, analytics, clearHistory } = useTestHistory();
  const [filterCat, setFilterCat] = useState("all");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const filtered =
    filterCat === "all"
      ? history
      : history.filter((a) => a.category === filterCat);

  const gradeColor = (p) =>
    p >= 90 ? "#27ae60" : p >= 75 ? "#2980b9" : p >= 50 ? "#f39c12" : "#e74c3c";

  const catPerf = Object.entries(analytics.categoryBreakdown).map(
    ([cat, data]) => ({
      cat,
      avg: Math.round(data.totalPercent / data.attempts),
      attempts: data.attempts,
      label: CATEGORIES.find((c) => c.id === cat)?.title || cat,
      color: CATEGORIES.find((c) => c.id === cat)?.color || "#666",
    }),
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Test History & Analytics</h1>
        <p className="page-subtitle">
          Track your progress and review past performance.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h3>No Tests Attempted Yet</h3>
          <p>Start a test to see your performance here.</p>
          <Link to="/categories" className="btn-primary">
            Browse Tests
          </Link>
        </div>
      ) : (
        <>
          <div className="analytics-grid">
            <div className="analytics-card">
              <span className="analytics-icon">📝</span>
              <strong>{analytics.totalAttempts}</strong>
              <span>Tests Attempted</span>
            </div>
            <div className="analytics-card">
              <span className="analytics-icon">📊</span>
              <strong>{analytics.averageScore}%</strong>
              <span>Average Score</span>
            </div>
            <div className="analytics-card">
              <span className="analytics-icon">🏆</span>
              <strong>{analytics.bestAttempt?.percent ?? 0}%</strong>
              <span>Best Score</span>
            </div>
            <div className="analytics-card">
              <span className="analytics-icon">🗂️</span>
              <strong>{catPerf.length}</strong>
              <span>Categories Explored</span>
            </div>
          </div>
          {catPerf.length > 0 && (
            <section className="section">
              <h2 className="section-title">Category Performance</h2>
              <div className="cat-perf-list">
                {catPerf.map(({ cat, avg, attempts, label, color }) => (
                  <div key={cat} className="cat-perf-item">
                    <div className="cat-perf-info">
                      <span className="cat-perf-label">{label}</span>
                      <span className="cat-perf-meta">
                        {attempts} attempt{attempts !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="cat-perf-bar-wrap">
                      <div className="cat-perf-bar-track">
                        <div
                          className="cat-perf-bar-fill"
                          style={{ width: `${avg}%`, background: color }}
                        />
                      </div>
                      <span className="cat-perf-val" style={{ color }}>
                        {avg}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">All Attempts</h2>
              <div className="history-controls">
                <select
                  className="cat-filter-select"
                  value={filterCat}
                  onChange={(e) => setFilterCat(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
                <button
                  className="btn-danger-outline"
                  onClick={() => setShowClearConfirm(true)}
                >
                  🗑 Clear History
                </button>
              </div>
            </div>

            <div className="history-table-wrap">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Correct</th>
                    <th>Time</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((attempt) => (
                    <tr key={attempt.attemptId}>
                      <td>
                        <Link
                          to={`/result/${attempt.attemptId}`}
                          className="history-test-link"
                        >
                          {attempt.testTitle}
                        </Link>
                      </td>
                      <td className="capitalize">
                        {attempt.category?.replace(/-/g, " ")}
                      </td>
                      <td>
                        {new Date(attempt.date).toLocaleDateString("en-IN")}
                      </td>
                      <td>
                        <span
                          style={{
                            color: gradeColor(attempt.percent),
                            fontWeight: 700,
                          }}
                        >
                          {attempt.score}/{attempt.totalMarks}
                        </span>
                      </td>
                      <td>{attempt.correct}</td>
                      <td>{formatTime(attempt.timeTaken)}</td>
                      <td>
                        <span
                          className="percent-badge"
                          style={{ background: gradeColor(attempt.percent) }}
                        >
                          {attempt.percent}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="empty-state" style={{ padding: "2rem" }}>
                  <p>No attempts in this category.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {showClearConfirm && (
        <div
          className="modal-overlay"
          onClick={() => setShowClearConfirm(false)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Clear All History?</h3>
            <p>
              This action cannot be undone. All your test history and analytics
              will be permanently deleted.
            </p>
            <div className="modal-actions">
              <button
                className="btn-secondary"
                onClick={() => setShowClearConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="btn-danger"
                onClick={() => {
                  clearHistory();
                  setShowClearConfirm(false);
                }}
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestHistoryPage;
