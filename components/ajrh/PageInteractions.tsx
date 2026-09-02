'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageInteractions() {
  const mouseX = useSpring(useMotionValue(-200), { stiffness: 180, damping: 28 });
  const mouseY = useSpring(useMotionValue(-200), { stiffness: 180, damping: 28 });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [clickPulse, setClickPulse] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const onMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 120);
      mouseY.set(event.clientY - 120);
    };
    const onPointerDown = () => setClickPulse((value) => value + 1);
    const onScroll = () => {
      const current = window.scrollY;
      setScrollDirection(current > lastScroll ? 'down' : 'up');
      lastScroll = current;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (current / max) * 100 : 0);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 h-60 w-60 rounded-full bg-green-300/10 blur-3xl"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        key={clickPulse}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 border-2 border-green-400/0"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: [0, 0.16, 0], scale: [0.98, 1, 1.01] }}
        transition={{ duration: 0.45 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-green-500"
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-6 right-6 z-50 hidden h-9 w-9 items-center justify-center rounded-full border border-green-200 bg-white/80 text-green-600 shadow-lg backdrop-blur sm:flex"
        animate={{ y: scrollDirection === 'down' ? 3 : -3, opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-lg leading-none">{scrollDirection === 'down' ? '↓' : '↑'}</span>
      </motion.div>
    </>
  );
}
