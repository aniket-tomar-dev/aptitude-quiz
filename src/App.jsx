import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import TestInstructionsPage from "./pages/TestInstructionsPage";
import TestAttemptPage from "./pages/TestAttemptPage";
import ResultPage from "./pages/ResultPage";
import TestHistoryPage from "./pages/TestHistoryPage";
import { useTheme } from "./hooks/useTheme";

function AppShell() {
  useTheme();

  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route
            path="/test/:testId/instructions"
            element={<TestInstructionsPage />}
          />
          <Route path="/test/:testId/attempt" element={<TestAttemptPage />} />
          <Route path="/result/:attemptId" element={<ResultPage />} />
          <Route path="/test-history" element={<TestHistoryPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
