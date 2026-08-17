import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Part B: Main Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-canvas-dark/90 backdrop-blur-[12px] border-b border-hairline-dark">
        <div className="h-[64px] max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo mark */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-[8px] flex items-center justify-center text-white font-bold text-[16px]">
              S
            </div>
            <span className="text-white font-semibold text-[16px]">
              Shikhar Gupta
            </span>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <motion.a
              href="#products"
              className="text-on-dark-mute text-[14px] font-semibold hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#case-studies"
              className="text-on-dark-mute text-[14px] font-semibold hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Case Studies
            </motion.a>
            <motion.a
              href="#skills"
              className="text-on-dark-mute text-[14px] font-semibold hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#experience"
              className="text-on-dark-mute text-[14px] font-semibold hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Experience
            </motion.a>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-[2px] bg-primary origin-left"
          style={{ scaleX }}
        />
      </nav>
    </>
  );
}
