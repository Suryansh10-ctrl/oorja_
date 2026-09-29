import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += 25;
      setProgress(p);
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => setHidden(true), 250);
      }
    }, 180);
    return () => clearInterval(iv);
  }, []);

  if (hidden) return null;

  return (
    <div id="preloader" className={`fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center gap-4 transition-opacity duration-600${progress >= 100 ? ' opacity-0' : ''}`}>
      <div className="loader-pulse text-center">
        <div className="inline-block bg-terracotta text-ivory font-display text-4xl md:text-6xl px-6 py-3 border-[3px] border-charcoal hard-lg tracking-wide">OORJA</div>
        <p className="font-grotesk text-xs tracking-[.35em] mt-4 font-bold">LOADING THE ENERGY…</p>
        <div className="w-48 h-2 bg-cream border-2 border-charcoal mx-auto mt-3 overflow-hidden">
          <div id="loaderBar" className="h-full bg-terracotta transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
