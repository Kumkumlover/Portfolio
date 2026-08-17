/**
 * Shared animation utilities for the portfolio.
 * Performance-optimized: uses GPU-composited properties only (transform, opacity).
 * Respects prefers-reduced-motion.
 */
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

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

// ─── 3D Parallax Tilt Card Component ────────────────────────
export function Tilt3DCard({
  children,
  className = '',
  maxRotation = 6,
  perspective = 1000,
  glare = true,
  glareOpacity = 0.12,
  glareColor = 'rgba(255, 255, 255, 0.16)',
  style = {},
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxRotation, maxRotation]);

  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const prefersReduced = usePrefersReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    if (glare) {
      setGlarePos({
        x: Math.round((mouseX / width) * 100),
        y: Math.round((mouseY / height) * 100),
      });
    }
  };

  const handleMouseEnter = () => {
    if (!prefersReduced) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (prefersReduced) {
    return (
      <div className={className} style={style} onClick={onClick} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: `${perspective}px`,
        rotateX,
        rotateY,
        ...style,
      }}
      className={`relative ${className}`}
      {...props}
    >
      <div style={{ transformStyle: 'preserve-3d', height: '100%' }}>
        {children}
      </div>

      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

// ─── One-Click Email Copy Tooltip Button ────────────────────
export function CopyEmailButton({
  email = 'shikharguptah2@gmail.com',
  className = '',
  buttonClassName = '',
  showLabel = false,
  children,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className={`relative inline-flex items-center group ${className}`}>
      <motion.button
        type="button"
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`relative inline-flex items-center gap-2 cursor-pointer transition-colors ${buttonClassName}`}
        aria-label="Copy email address"
        title="Copy email to clipboard"
      >
        {children ? (
          children
        ) : (
          <>
            {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
            {showLabel && <span>{email}</span>}
          </>
        )}
      </motion.button>

      {/* Floating Tooltip Pill */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface-elevated text-white text-[12px] font-medium rounded-full shadow-2xl pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5 border border-hairline-dark"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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

