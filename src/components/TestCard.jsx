import React from "react";
import { Link } from "react-router-dom";

function TestCard({ test, categoryColor }) {
  const difficultyColors = {
    Beginner: "#27ae60",
    Intermediate: "#f39c12",
    Advanced: "#e74c3c",
    Mixed: "#8e44ad",
  };

  return (
    <Link to={`/test/${test.id}/instructions`} className="test-card">
      <div className="test-card-header">
        <span
          className="difficulty-badge"
          style={{ background: difficultyColors[test.difficulty] || "#666" }}
        >
          {test.difficulty}
        </span>
        <span className="test-duration">⏱ {test.duration} min</span>
      </div>
      <h3 className="test-card-title">{test.title}</h3>
      <p className="test-card-desc">{test.description}</p>
      <div className="test-card-meta">
        <span>📝 {test.totalQuestions} Qs</span>
        <span>🏆 {test.totalMarks} marks</span>
        {test.negativeMarking > 0 && (
          <span>⚠️ -{test.negativeMarking} neg</span>
        )}
      </div>
      <div className="test-card-action">Start Test →</div>
    </Link>
  );
}

export default TestCard;
