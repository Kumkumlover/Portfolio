import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { FadeInUp, motion } from '../lib/animations';
import { AnimatePresence } from 'framer-motion';

const SpotlightProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="bg-canvas-dark px-6 pb-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-stone text-[13px] font-semibold uppercase tracking-[0.1em] mb-8">
          SPOTLIGHT
        </h2>
        <FadeInUp>
          <div className="bg-surface-elevated rounded-[28px] p-8 md:p-16 border border-hairline-dark hover:border-[rgba(0,168,126,0.2)] transition-colors duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left side */}
              <div className="lg:w-5/12">
                <span className="inline-flex bg-primary text-white text-[13px] font-medium rounded-full px-3 py-1 mb-6">
                  Spotlight Product
                </span>
                <h3
                  className="text-white font-medium mb-4"
                  style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    lineHeight: 1.21,
                    letterSpacing: '-0.48px',
                  }}
                >
                  Firstcall
                </h3>
                <p className="text-on-dark-mute text-[18px] leading-[1.56] tracking-[-0.09px] mb-8 max-w-lg">
                  Full stack cold outreach system<br/>and CRM tracker.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Multistep Evals', 'LLM workflows', 'Pattern engine', 'Chrome extention', 'Open source', 'RAG'].map((tag) => (
                    <span
                      key={tag}
                      className="px-[12px] py-[4px] rounded-full bg-canvas-dark text-stone text-[13px] border border-hairline-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <motion.a
                    href="https://firstcall-landing-gq894hcw7-shikharguptah2-gmailcoms-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="h-[48px] px-[28px] rounded-full bg-primary text-white font-semibold text-[16px] tracking-[0.24px] hover:bg-primary-deep transition-colors inline-flex items-center gap-2"
                  >
                    Get started <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
                    <motion.a
                      href="https://github.com/Kumkumlover/Job-Tracker/blob/main/evaluation_methodology.md"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="text-white font-bold text-[16px] tracking-[0.24px] hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      View Evals Report →
                    </motion.a>
                    <motion.a
                      href="https://github.com/Kumkumlover/Job-Tracker"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="text-white font-bold text-[16px] tracking-[0.24px] hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      View on GitHub →
                    </motion.a>
                    <motion.a
                      href="https://www.loom.com/share/2c29ab4458604aa89052c442a1bf4dad"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="text-white font-bold text-[16px] tracking-[0.24px] hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      Watch Demo →
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Right side - Image Graphic */}
              <div className="lg:w-7/12 w-full mt-4 lg:mt-0">
                <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                  <img 
                    src="/firstcall-demo.png" 
                    alt="Firstcall UI Demo" 
                    className="w-full h-auto object-cover rounded-[14px] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Ambient glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/15 rounded-full blur-[100px] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-primary transition-colors bg-surface-elevated/50 p-2 rounded-full cursor-pointer z-[110]"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
            >
              <X size={28} />
            </button>

            {/* Modal Image */}
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src="/firstcall-demo.png" 
              alt="Firstcall UI Demo Fullscreen" 
              className="max-w-full max-h-[90vh] object-contain rounded-[12px] shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpotlightProject;
