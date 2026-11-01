import React from "react";

function QuestionPalette({ total, getQuestionStatus, onJump, onClose }) {
  const statusColors = {
    active: "var(--accent-color)",
    answered: "#27ae60",
    marked: "#f39c12",
    "answered-marked": "#8e44ad",
    unanswered: "var(--secondary-color)",
  };

  const statusLabels = {
    answered: "Answered",
    unanswered: "Not Answered",
    marked: "Marked for Review",
    "answered-marked": "Answered & Marked",
  };

  const counts = {
    answered: 0,
    unanswered: 0,
    marked: 0,
    "answered-marked": 0,
  };
  for (let i = 0; i < total; i++) {
    const s = getQuestionStatus(i);
    if (s !== "active" && counts[s] !== undefined) counts[s]++;
  }

  return (
    <div className="question-palette">
      <div className="palette-header">
        <h3>Question Palette</h3>
        <button
          className="palette-close"
          onClick={onClose}
          aria-label="Close palette"
        >
          ✕
        </button>
      </div>

      <div className="palette-legend">
        {Object.entries(statusLabels).map(([status, label]) => (
          <div key={status} className="legend-item">
            <span
              className="legend-dot"
              style={{ background: statusColors[status] }}
            />
            <span>
              {counts[status]} {label}
            </span>
          </div>
        ))}
      </div>

      <div className="palette-grid">
        {Array.from({ length: total }, (_, i) => {
          const status = getQuestionStatus(i);
          return (
            <button
              key={i}
              className={`palette-btn palette-${status}`}
              style={{
                background:
                  status === "active" ? statusColors.active : undefined,
                borderColor: statusColors[status],
              }}
              onClick={() => {
                onJump(i);
                if (onClose) onClose();
              }}
              title={`Question ${i + 1}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionPalette;
