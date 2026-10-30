import { useState, useCallback } from "react";

const HISTORY_KEY = "quiz-test-history";

function readHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useTestHistory() {
  const [history, setHistory] = useState(readHistory);

  const saveAttempt = useCallback((attemptData) => {
    const attempt = {
      attemptId: generateId(),
      date: new Date().toISOString(),
      ...attemptData,
    };
    const updated = [attempt, ...readHistory()];
    writeHistory(updated);
    setHistory(updated);
    return attempt.attemptId;
  }, []);

  const clearHistory = useCallback(() => {
    writeHistory([]);
    setHistory([]);
  }, []);

  const getAttemptById = useCallback(
    (attemptId) => history.find((a) => a.attemptId === attemptId) || null,
    [history],
  );

  const getAttemptsByTestId = useCallback(
    (testId) => history.filter((a) => a.testId === testId),
    [history],
  );

  const analytics = {
    totalAttempts: history.length,
    averageScore:
      history.length > 0
        ? Math.round(
            history.reduce((sum, a) => sum + a.percent, 0) / history.length,
          )
        : 0,
    categoryBreakdown: history.reduce((acc, a) => {
      if (!acc[a.category]) acc[a.category] = { attempts: 0, totalPercent: 0 };
      acc[a.category].attempts++;
      acc[a.category].totalPercent += a.percent;
      return acc;
    }, {}),
    recentAttempts: history.slice(0, 5),
    bestAttempt: history.reduce(
      (best, a) => (!best || a.percent > best.percent ? a : best),
      null,
    ),
  };

  return {
    history,
    saveAttempt,
    clearHistory,
    getAttemptById,
    getAttemptsByTestId,
    analytics,
  };
}
