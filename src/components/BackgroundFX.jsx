import { useEffect, useRef } from 'react';

/**
 * Full-screen living background:
 *  1. Aurora blobs drifting on cyclic paths while the whole palette hue-rotates.
 *  2. A slowly scrolling perspective-style grid.
 *  3. A canvas constellation of particles that links up and reacts to the mouse.
 * Everything is fixed + pointer-events-none, so it never blocks the UI.
 */
export default function BackgroundFX() {
  const canvasRef = useRef(null);
  const auroraRef = useRef(null);

  // Gentle scroll parallax for the aurora layer.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (auroraRef.current) {
          auroraRef.current.style.transform = `translate3d(0, ${window.scrollY * -0.08}px, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Particle constellation.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let rafId = 0;
    let particles = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(95, Math.floor((w * h) / 15000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const LINK = 130;
    const MOUSE_R = 170;

    const draw = (time) => {
      const isDark = document.documentElement.classList.contains('dark');
      // Hue slowly breathes between teal (170) and violet (270).
      const hue = 170 + ((Math.sin(time / 4200) + 1) / 2) * 100;
      const light = isDark ? 65 : 38;
      const dotAlpha = isDark ? 0.8 : 0.55;
      const lineAlpha = isDark ? 0.22 : 0.16;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;

          // Mouse pulls particles gently toward the cursor.
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const md = Math.hypot(mdx, mdy);
          if (md < MOUSE_R) {
            p.x += mdx * 0.012;
            p.y += mdy * 0.012;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 90%, ${light}%, ${dotAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(${hue}, 90%, ${light}%, ${(1 - d / LINK) * lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const md2 = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (md2 < MOUSE_R) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `hsla(${hue + 40}, 95%, ${light}%, ${(1 - md2 / MOUSE_R) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (!reduceMotion) rafId = requestAnimationFrame(draw);
    };

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="fx-root fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div ref={auroraRef} className="fx-aurora">
        <span className="fx-blob fx-blob-a" />
        <span className="fx-blob fx-blob-b" />
        <span className="fx-blob fx-blob-c" />
        <span className="fx-blob fx-blob-d" />
      </div>
      <div className="fx-grid" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="fx-vignette" />
    </div>
  );
}
