import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeInUp, StaggerContainer, staggerChild, Tilt3DCard, motion } from '../lib/animations';

export default function ProductsCatalogue() {
  return (
    <section id="products" className="bg-canvas-light text-ink py-[88px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="text-stone text-[14px] font-semibold uppercase tracking-[0.1em] mb-6">
            01 / 0→1 BUILDS
          </div>
          <h2 
            className="text-ink font-medium mb-4" 
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.8px' }}
          >
            Products I shipped <span className="text-primary italic">myself.</span>
          </h2>
          <p className="text-body text-[18px] leading-[1.56] max-w-2xl mb-12">
            From deterministic math engines to spatial analytics visualizers. Built to solve real architectural bottlenecks—not just slide decks.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Fair Split */}
          <motion.div variants={staggerChild} className="h-full">
            <Tilt3DCard maxRotation={7} className="h-full rounded-[20px]">
              <div className="bg-primary text-canvas-light rounded-[20px] p-[32px] flex flex-col h-full hover:bg-primary-deep transition-colors duration-200 shadow-xl">
                <h3 className="text-[32px] font-medium leading-[1.19] tracking-[-0.32px] mb-4">
                  Fair Split
                </h3>
                <p className="text-[16px] text-on-dark-mute leading-[1.5] mb-8 flex-grow">
                  AI receipt splitter using Gemini 2.5 Flash Vision for fact extraction + deterministic Node.js math engine for proportional bill & tax allocation.
                </p>
                <div className="space-y-3 mb-8">
                  {['Gemini 2.5 Flash', 'Vision LLM', 'Node.js Engine', 'Live App'].map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-[14px] font-medium">
                      <CheckCircle2 size={18} className="text-canvas-light" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <motion.a 
                  href="https://fair-split-eight.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full h-[48px] rounded-full bg-canvas-light text-ink font-semibold text-[16px] tracking-[0.24px] hover:bg-surface-soft transition-colors flex items-center justify-center mt-auto"
                >
                  Launch Live App
                </motion.a>
              </div>
            </Tilt3DCard>
          </motion.div>

          {/* Card 2: Analytics Q&A Agent */}
          <motion.div variants={staggerChild} className="h-full">
            <Tilt3DCard maxRotation={7} glareColor="rgba(0, 102, 255, 0.14)" className="h-full rounded-[20px]">
              <div className="bg-canvas-light border border-hairline-light rounded-[20px] p-[32px] flex flex-col h-full hover:border-hairline-strong transition-all duration-300 tile-shadow">
                <h3 className="text-[32px] font-medium leading-[1.19] tracking-[-0.32px] mb-4 text-ink">
                  Analytics Q&A Agent
                </h3>
                <p className="text-[16px] text-body leading-[1.5] mb-8 flex-grow">
                  RAG-based Text-to-SQL Analytics agent converting natural language business questions into SQL queries on e-commerce databases.
                </p>
                <div className="space-y-3 mb-8">
                  {['Text-to-SQL', 'Vanna AI RAG', 'ChromaDB', 'Streamlit'].map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-[14px] font-medium">
                      <CheckCircle2 size={18} className="text-accent-teal" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <motion.a 
                  href="https://github.com/Kumkumlover/analytics-qa-agent" 
                  target="_blank" 
                  rel="noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full h-[48px] rounded-full bg-surface-soft text-ink font-semibold text-[16px] tracking-[0.24px] hover:bg-hairline-light transition-colors flex items-center justify-center mt-auto"
                >
                  View Repository
                </motion.a>
              </div>
            </Tilt3DCard>
          </motion.div>

          {/* Card 3: LILA BLACK */}
          <motion.div variants={staggerChild} className="h-full">
            <Tilt3DCard maxRotation={7} glareColor="rgba(73, 79, 223, 0.14)" className="h-full rounded-[20px]">
              <div className="bg-surface-soft border border-hairline-light rounded-[20px] p-[32px] flex flex-col h-full hover:border-hairline-strong transition-all duration-300 tile-shadow">
                <h3 className="text-[32px] font-medium leading-[1.19] tracking-[-0.32px] mb-4 text-ink">
                  LILA BLACK
                </h3>
                <p className="text-[16px] text-body leading-[1.5] mb-8 flex-grow">
                  Spatial analytics & heatmap visualizer for level designers to explore player & bot behavior across 785 matches of LILA BLACK.
                </p>
                <div className="space-y-3 mb-8">
                  {['Spatial Analytics', 'PyArrow & Pandas', 'Canvas Viz', 'Live Tool'].map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-[14px] font-medium">
                      <CheckCircle2 size={18} className="text-accent-teal" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <motion.a 
                  href="https://lila-black-shikhar.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full h-[48px] rounded-full bg-canvas-dark text-canvas-light font-semibold text-[16px] tracking-[0.24px] hover:bg-surface-elevated transition-colors flex items-center justify-center mt-auto"
                >
                  Launch Visualizer
                </motion.a>
              </div>
            </Tilt3DCard>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
