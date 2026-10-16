/**
 * Generate a random OORJA ticket ID, e.g. "OORJA-A3FD91"
 */
export function generateTicketId(): string {
  return 'OORJA-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

/**
 * Scroll to the element with the given id smoothly.
 */
export function scrollToSection(id: string): void {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, 80);
}

/**
 * Fire confetti animation on the given canvas element id.
 */
export function fireConfetti(canvasId = 'confetti'): void {
  if (typeof window === 'undefined') return;
  const c = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!c) return;
  const x = c.getContext('2d');
  if (!x) return;

  c.classList.remove('hidden');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const colors = ['#C65332', '#D97732', '#D4A72C', '#66734A', '#242321', '#F7F1E5'];
  const ps = Array.from({ length: 140 }, () => ({
    x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
    y: window.innerHeight / 2,
    vx: (Math.random() - 0.5) * 12,
    vy: Math.random() * -11 - 2,
    s: Math.random() * 8 + 4,
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    col: colors[Math.floor(Math.random() * colors.length)],
    life: 1,
  }));
  let f = 0;
  (function anim() {
    x.clearRect(0, 0, c.width, c.height);
    f++;
    ps.forEach((p) => {
      p.vy += 0.35;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      p.life -= 0.008;
      x.save();
      x.translate(p.x, p.y);
      x.rotate(p.r);
      x.globalAlpha = Math.max(0, p.life);
      x.fillStyle = p.col;
      x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      x.restore();
    });
    if (f < 180) requestAnimationFrame(anim);
    else c.classList.add('hidden');
  })();
}

export const launchConfetti = fireConfetti;
