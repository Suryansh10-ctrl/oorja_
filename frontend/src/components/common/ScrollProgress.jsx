import { useScrollProgress } from '../../hooks/useScrollProgress.js';

export default function ScrollProgress() {
  const { progress } = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-terracotta z-[90]"
      id="scrollProgress"
      style={{ width: `${progress}%`, transition: 'width .1s linear' }}
    />
  );
}
