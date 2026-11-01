import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/dashboard", label: "Dashboard", icon: "🏠" },
    { to: "/categories", label: "Categories", icon: "📚" },
    { to: "/test-history", label: "History", icon: "📊" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/dashboard" className="navbar-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">QuizMaster</span>
        </Link>

        <div className="navbar-links">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${location.pathname.startsWith(to) ? " active" : ""}`}
            >
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
