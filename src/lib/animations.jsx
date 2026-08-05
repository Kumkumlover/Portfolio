/**
 * Shared animation utilities for the portfolio.
 * Performance-optimized: uses GPU-composited properties only (transform, opacity).
 * Respects prefers-reduced-motion.
 */
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// ─── Reduced Motion Hook ────────────────────────────────────
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// ─── Fade-In-Up Section Wrapper ─────────────────────────────
// Wraps any section/card to fade in + slide up on scroll entry.
// Uses IntersectionObserver via framer-motion (once: true = no re-triggers).
export function FadeInUp({ children, delay = 0, className = '', y = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container ──────────────────────────────────────
// Parent wrapper that staggers children's fade-in animations.
export function StaggerContainer({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child variant
export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Scroll Progress Bar ────────────────────────────────────
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// ─── Hero Text Reveal (mask clip) ───────────────────────────
export function TextReveal({ children, delay = 0 }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── Card Glow Effect Hook ──────────────────────────────────
// Returns a ref and onMouseMove/Leave handlers for radial glow.
export function useCardGlow() {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--glow-x', `${x}px`);
    ref.current.style.setProperty('--glow-y', `${y}px`);
    ref.current.style.setProperty('--glow-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--glow-opacity', '0');
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}

// ─── Animated Counter ───────────────────────────────────────
// Simple numeric counter that counts up when in view.
export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value, 10);
    if (isNaN(num)) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{isInView ? display : 0}{suffix}
    </span>
  );
}

// Re-export motion for convenient use
export { motion };
