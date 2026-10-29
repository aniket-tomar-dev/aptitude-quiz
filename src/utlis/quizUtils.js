import flashcards from "../../data";

export const LABELS = ["A", "B", "C", "D"];
export const BEST_KEY = "quiz-best-streak";
export const THEME_KEY = "quiz-theme";

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildDeck() {
  return shuffle(flashcards).map((card) => ({
    ...card,
    options: shuffle(card.options),
  }));
}

export function readBestStreak() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
