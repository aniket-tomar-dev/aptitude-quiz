import { useState, useCallback, useMemo } from "react";
import { useTimer } from "./useTimer";
import { useTestHistory } from "./useTestHistory";

export function useQuizEngine(test) {
  const { saveAttempt } = useTestHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [isFinished, setIsFinished] = useState(false);
  const [attemptId, setAttemptId] = useState(null);
  const [startTime] = useState(Date.now());

  const handleTimerExpire = useCallback(() => {
    submitTest();
  }, []);

  const timer = useTimer(
    test ? test.duration * 60 : 0,
    handleTimerExpire,
    !!test,
  );

  const questions = test?.questions ?? [];
  const total = questions.length;
  const currentQuestion = questions[currentIndex] ?? null;
  const selectedAnswer = answers[currentIndex] ?? null;

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = total - answeredCount;
  const markedCount = markedForReview.size;

  const correctCount = useMemo(() => {
    return Object.entries(answers).filter(
      ([idx, ans]) => ans === questions[idx]?.correctAnswer,
    ).length;
  }, [answers, questions]);

  const wrongCount = answeredCount - correctCount;
  const skippedCount = unansweredCount;

  const totalMarksObtained = useMemo(() => {
    const correct = correctCount * (test?.marksPerQuestion ?? 1);
    const wrong = wrongCount * (test?.negativeMarking ?? 0);
    return Math.max(0, correct - wrong);
  }, [correctCount, wrongCount, test]);

  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const selectAnswer = useCallback(
    (option) => {
      if (answers[currentIndex] !== undefined) return;
      setAnswers((prev) => ({ ...prev, [currentIndex]: option }));
    },
    [currentIndex, answers],
  );

  const goToQuestion = useCallback(
    (index) => {
      if (index >= 0 && index < total) setCurrentIndex(index);
    },
    [total],
  );

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) setCurrentIndex((i) => i + 1);
  }, [currentIndex, total]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  const toggleMarkForReview = useCallback(() => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) next.delete(currentIndex);
      else next.add(currentIndex);
      return next;
    });
  }, [currentIndex]);

  const submitTest = useCallback(() => {
    if (isFinished) return;
    timer.pause();
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);

    const id = saveAttempt({
      testId: test?.id,
      testTitle: test?.title,
      category: test?.category,
      subcategory: test?.subcategory,
      score: totalMarksObtained,
      totalMarks: test?.totalMarks,
      percent,
      timeTaken,
      correct: correctCount,
      wrong: wrongCount,
      skipped: skippedCount,
      answers: { ...answers },
      questions: test?.questions,
    });

    setAttemptId(id);
    setIsFinished(true);
  }, [
    isFinished,
    timer,
    startTime,
    saveAttempt,
    test,
    totalMarksObtained,
    percent,
    correctCount,
    wrongCount,
    skippedCount,
    answers,
  ]);

  const getQuestionStatus = useCallback(
    (index) => {
      const answered = answers[index] !== undefined;
      const marked = markedForReview.has(index);
      const active = index === currentIndex;
      if (active) return "active";
      if (answered && marked) return "answered-marked";
      if (answered) return "answered";
      if (marked) return "marked";
      return "unanswered";
    },
    [answers, markedForReview, currentIndex],
  );

  return {
    currentIndex,
    answers,
    markedForReview,
    isFinished,
    attemptId,

    currentQuestion,
    selectedAnswer,

    total,
    answeredCount,
    unansweredCount,
    markedCount,
    correctCount,
    wrongCount,
    skippedCount,
    totalMarksObtained,
    percent,

    timer,

    selectAnswer,
    goToQuestion,
    goNext,
    goPrev,
    toggleMarkForReview,
    submitTest,
    getQuestionStatus,
    isFirst: currentIndex === 0,
    isLast: currentIndex === total - 1,
  };
}
