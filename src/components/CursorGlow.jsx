import { useEffect, useRef } from 'react';

/**
 * Soft spotlight + trailing ring that follow the cursor. The ring grows over
 * links and buttons. Only runs on devices with a real mouse.
 */
export default function CursorGlow() {
  const spotRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    const spot = spotRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let sx = tx;
    let sy = ty;
    let rx = tx;
    let ry = ty;
    let scale = 1;
    let targetScale = 1;
    let rafId = 0;
    let shown = false;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        spot.style.opacity = '1';
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
      dot.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
      const interactive = e.target.closest && e.target.closest('a, button, input, textarea, [role="button"]');
      targetScale = interactive ? 2.3 : 1;
    };

    const loop = () => {
      sx += (tx - sx) * 0.07;
      sy += (ty - sy) * 0.07;
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      scale += (targetScale - scale) * 0.18;

      spot.style.transform = `translate3d(${sx - 320}px, ${sy - 320}px, 0)`;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale})`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={spotRef} className="cursor-spot fixed top-0 left-0 -z-10 pointer-events-none opacity-0" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 z-[100] pointer-events-none opacity-0" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot fixed top-0 left-0 z-[100] pointer-events-none opacity-0" aria-hidden="true" />
    </>
  );
}
