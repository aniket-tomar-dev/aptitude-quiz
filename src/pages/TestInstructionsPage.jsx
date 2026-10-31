import React from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { getTestById } from "../data/index";
import { getCategoryBySlug } from "../data/categories";

function TestInstructionsPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = getTestById(testId);

  if (!test) return <Navigate to="/categories" replace />;

  const category = getCategoryBySlug(test.category);

  const instructions = [
    "Read each question carefully before selecting your answer.",
    "Each question has four options. Select the most appropriate one.",
    "You can navigate between questions using the Previous and Next buttons, or by clicking the question palette.",
    "You can mark questions for review and come back to them later.",
    "The timer starts as soon as you click 'Start Test'. The test will auto-submit when time is up.",
    "You can submit the test at any time using the Submit button.",
    "Do NOT refresh or close the browser during the test — your progress may be lost.",
    `Correct Answer: +${test.marksPerQuestion} mark${test.marksPerQuestion !== 1 ? "s" : ""} per question.`,
    test.negativeMarking > 0
      ? `Wrong Answer: -${test.negativeMarking} mark(s) per wrong answer.`
      : "No negative marking for wrong answers.",
  ];

  return (
    <div className="page-container page-narrow">
      <nav className="breadcrumb">
        <Link to="/dashboard">Dashboard</Link>
        <span>›</span>
        <Link to={`/category/${test.category}`}>
          {category?.title || test.category}
        </Link>
        <span>›</span>
        <span>Instructions</span>
      </nav>

      <div className="instructions-card">
        <div
          className="instructions-header"
          style={{ background: category?.gradient || "var(--accent-color)" }}
        >
          <span className="instructions-icon">{category?.icon || "📝"}</span>
          <div>
            <h1 className="instructions-title">{test.title}</h1>
            <p className="instructions-category">
              {category?.title} › {test.subcategory.replace(/-/g, " ")}
            </p>
          </div>
        </div>

        <div className="instructions-stats">
          <div className="instr-stat">
            <strong>{test.totalQuestions}</strong>
            <span>Questions</span>
          </div>
          <div className="instr-stat">
            <strong>{test.duration} min</strong>
            <span>Duration</span>
          </div>
          <div className="instr-stat">
            <strong>{test.totalMarks}</strong>
            <span>Total Marks</span>
          </div>
          <div className="instr-stat">
            <strong>+{test.marksPerQuestion}</strong>
            <span>Per Correct</span>
          </div>
          <div
            className="instr-stat"
            style={{ color: test.negativeMarking > 0 ? "#e74c3c" : "#27ae60" }}
          >
            <strong>
              {test.negativeMarking > 0 ? `-${test.negativeMarking}` : "Nil"}
            </strong>
            <span>Negative Mark</span>
          </div>
          <div className="instr-stat">
            <strong>{test.difficulty}</strong>
            <span>Difficulty</span>
          </div>
        </div>

        <div className="instructions-body">
          <h2>📋 Instructions</h2>
          <ol className="instructions-list">
            {instructions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="instructions-actions">
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
          <Link
            to={`/test/${testId}/attempt`}
            className="btn-primary btn-large"
            id="start-test-btn"
          >
            🚀 Start Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestInstructionsPage;
