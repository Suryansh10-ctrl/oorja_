import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(document.documentElement.scrollTop > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="backTop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-[70] w-12 h-12 bg-terracotta text-ivory border-[2.5px] border-charcoal hard-sm items-center justify-center hover:bg-charcoal transition-colors${visible ? ' flex' : ' hidden'}`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
