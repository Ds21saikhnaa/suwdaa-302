'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface CountDownCompProps extends Record<string, any> {
  d: number;
  h: number;
  m: number;
  s: number;
  isEnd: boolean;
  reCount: () => void;
  date?: string | number | Date;
  leadingZero: (val: number) => string | number;
}

interface CountDownProps extends Record<string, any> {
  duration?: number;
  refresh?: () => void;
  callback?: () => void;
  date?: string | number | Date;
  Comp: (props: CountDownCompProps) => React.ReactElement;
}

function CountDown({ date, Comp, refresh, duration, callback, ...rest }: CountDownProps) {
  const timerRef = useRef<any>();
  const counts = duration || Math.floor((new Date(date || '').getTime() - new Date().getTime()) / 1000);
  const counterRef = useRef(counts);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  const isEnd = Object.values(time).every((v) => v === 0);

  const MemoizedComp = useMemo(() => Comp, []);
  const leadingZero = useCallback((count: number) => (count <= 9 ? `0${count}` : count), []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearInterval(timerRef.current);
      } else {
        if (date) {
          // Recalculate remaining time based on current timestamp
          counterRef.current = Math.floor((new Date(date || '').getTime() - new Date().getTime()) / 1000);
        }
        timerRef.current = setInterval(updateTime, 1000); // Adjust interval based on remaining time
        updateTime(); // Update time immediately on visibility change
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(updateTime, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const updateTime = () => {
    let days = Math.floor(counterRef.current / 86400);
    let hours = Math.floor((counterRef.current - days * 86400) / 3600);
    let minutes = Math.floor((counterRef.current - hours * 3600 - days * 86400) / 60);
    let seconds = counterRef.current - days * 86400 - hours * 3600 - minutes * 60;
    setTime({ d: days, h: hours, m: minutes, s: seconds });

    counterRef.current--;

    if (counterRef.current <= 0) {
      callback?.();
    }

    if (counterRef.current < 0) {
      refresh?.();
      clearInterval(timerRef.current);
    }
  };

  const reCount = () => {
    clearInterval(timerRef.current);
    counterRef.current = duration || Math.floor((new Date(date || '').getTime() - new Date().getTime()) / 1000);
    updateTime(); // Call updateTime immediately to update the UI with the new countdown values
    timerRef.current = setInterval(updateTime, 1000);
  };

  return <MemoizedComp {...time} {...rest} leadingZero={leadingZero} reCount={reCount} isEnd={isEnd} date={date} />;
}

export default CountDown;
