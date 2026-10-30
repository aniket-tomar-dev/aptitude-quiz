import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Countdown timer hook.
 * @param {number}
 * @param {Function}
 * @param {boolean}
 */
export function useTimer(durationSeconds, onExpire, autoStart = true) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isExpired, setIsExpired] = useState(false);
  const onExpireRef = useRef(onExpire);
  const intervalRef = useRef(null);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setIsExpired(true);
          onExpireRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => {
    if (!isExpired) setIsRunning(true);
  }, [isExpired]);
  const reset = useCallback(
    (newDuration) => {
      clearInterval(intervalRef.current);
      setTimeLeft(newDuration ?? durationSeconds);
      setIsExpired(false);
      setIsRunning(autoStart);
    },
    [durationSeconds, autoStart],
  );

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const urgency =
    timeLeft <= 60 ? "critical" : timeLeft <= 300 ? "warning" : "normal";

  return {
    timeLeft,
    formatted,
    isRunning,
    isExpired,
    urgency,
    pause,
    resume,
    reset,
  };
}
