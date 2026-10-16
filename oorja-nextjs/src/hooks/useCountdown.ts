'use client';

import { useState, useEffect } from 'react';

function getTarget(): Date {
  const now = new Date();
  let year = now.getFullYear();
  const end = new Date(year, 2, 8, 23, 59, 59);
  if (now > end) year += 1;
  return new Date(year, 2, 6, 18, 0, 0);
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function useCountdown() {
  const [time, setTime] = useState({
    d: '00',
    h: '00',
    m: '00',
    s: '00',
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });

  useEffect(() => {
    function tick() {
      const t = getTarget().getTime() - new Date().getTime();
      const d = pad(Math.max(0, Math.floor(t / 864e5)));
      const h = pad(Math.max(0, Math.floor(t / 36e5) % 24));
      const m = pad(Math.max(0, Math.floor(t / 6e4) % 60));
      const s = pad(Math.max(0, Math.floor(t / 1e3) % 60));
      setTime({
        d,
        h,
        m,
        s,
        days: d,
        hours: h,
        mins: m,
        secs: s,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
