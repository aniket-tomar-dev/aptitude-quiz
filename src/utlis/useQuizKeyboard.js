import { useEffect } from "react";

export function useQuizKeyboard({
  finished,
  currentCard,
  handleAnswer,
  handleNext,
  handlePrev,
}) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (finished) return;

      const optionIndex = ["a", "b", "c", "d"].indexOf(e.key.toLowerCase());

      if (optionIndex !== -1) {
        const option = currentCard.options[optionIndex];
        if (option !== undefined) handleAnswer(option);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [finished, currentCard, handleAnswer, handleNext, handlePrev]);
}
