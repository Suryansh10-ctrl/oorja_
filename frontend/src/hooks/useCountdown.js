import { useState, useEffect } from 'react';

function getTarget() {
  const now = new Date();
  let year = now.getFullYear();
  let end = new Date(year, 2, 8, 23, 59, 59);
  if (now > end) year += 1;
  return new Date(year, 2, 6, 18, 0, 0);
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export function useCountdown() {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    function tick() {
      const t = getTarget() - new Date();
      const d = Math.max(0, Math.floor(t / 864e5));
      const h = Math.max(0, Math.floor(t / 36e5) % 24);
      const m = Math.max(0, Math.floor(t / 6e4) % 60);
      const s = Math.max(0, Math.floor(t / 1e3) % 60);
      setTime({ d: pad(d), h: pad(h), m: pad(m), s: pad(s) });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
