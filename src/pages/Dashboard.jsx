import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { ALL_TESTS, getTotalTestCount } from "../data/index";
import { useTestHistory } from "../hooks/useTestHistory";
import CategoryCard from "../components/CategoryCard";
import TestCard from "../components/TestCard";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const { history, analytics } = useTestHistory();
  const navigate = useNavigate();

  const totalTests = getTotalTestCount();

  const filteredTests = searchQuery.trim()
    ? ALL_TESTS.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  const featuredTests = ALL_TESTS.slice(0, 4);

  const gradePercent = (p) => {
    if (p >= 90) return { label: "Excellent", color: "#27ae60" };
    if (p >= 75) return { label: "Good", color: "#2980b9" };
    if (p >= 50) return { label: "Average", color: "#f39c12" };
    return { label: "Needs Practice", color: "#e74c3c" };
  };

  return (
    <div className="page-container">
      <section className="dashboard-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">QuizMaster</span>
          </h1>
          <p className="hero-subtitle">
            Sharpen your skills with expert-crafted tests across Aptitude,
            Mathematics, Programming, GK, and English.
          </p>
          <div className="hero-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search tests by name, category, or topic..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {searchQuery.trim() && (
        <section className="section">
          <h2 className="section-title">
            Search Results{" "}
            <span className="section-count">{filteredTests.length} found</span>
          </h2>
          {filteredTests.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <p>No tests found for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="tests-grid">
              {filteredTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          )}
        </section>
      )}

      {!searchQuery && (
        <>
          <section className="stats-row">
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <strong>{totalTests}</strong>
              <span>Total Tests</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🗂️</span>
              <strong>{CATEGORIES.length}</strong>
              <span>Categories</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">✅</span>
              <strong>{analytics.totalAttempts}</strong>
              <span>Tests Attempted</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📈</span>
              <strong>{analytics.averageScore}%</strong>
              <span>Average Score</span>
            </div>
          </section>

          {analytics.recentAttempts.length > 0 && (
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">Recent Results</h2>
                <Link to="/test-history" className="section-link">
                  View all →
                </Link>
              </div>
              <div className="recent-list">
                {analytics.recentAttempts.map((attempt) => {
                  const grade = gradePercent(attempt.percent);
                  return (
                    <div key={attempt.attemptId} className="recent-item">
                      <div className="recent-info">
                        <strong>{attempt.testTitle}</strong>
                        <span className="recent-category">
                          {attempt.category} ·{" "}
                          {new Date(attempt.date).toLocaleDateString("en-IN")}
                        </span>
                      </div>
                      <div
                        className="recent-score"
                        style={{ color: grade.color }}
                      >
                        <strong>{attempt.percent}%</strong>
                        <span>{grade.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Browse Categories</h2>
              <Link to="/categories" className="section-link">
                View all →
              </Link>
            </div>
            <div className="categories-grid">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Recommended Tests</h2>
            </div>
            <div className="tests-grid">
              {featuredTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Dashboard;
