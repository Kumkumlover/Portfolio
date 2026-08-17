import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, staggerChild, Tilt3DCard, motion } from '../lib/animations';

const OriginalCases = () => {
  const cases = [
    {
      name: 'DayZero',
      subtitle: 'Proactive Wellness Browser Extension',
      thumbnail: 'https://cdn.hercules.app/file_CKO9DO675sU1BM4fQUXqL8X4',
      desc: 'Uncovered the root user problem of severe cognitive depletion through in-depth interviews and root cause analysis. Vibe-coded a browser extension MVP integrating Google Calendar API for context-aware, proactive interventions. Defined North Star metric (Weekly Resets Completed) and a full metrics framework.',
      tags: ['Problem Discovery', 'Root Cause Analysis', 'MVP Build', 'Metrics Framework'],
      link: 'https://assets.nextleap.app/submissions/NLDoomStop-4c87dc0e-e7a8-460a-8455-7606a05104c1.pdf'
    },
    {
      name: 'NorthStar',
      subtitle: 'Personalised Career Upskill Platform',
      thumbnail: 'https://cdn.hercules.app/file_ZDjGTkRNyTY1g72C3jepcUYE',
      desc: 'Identified learner analysis-paralysis and a whitespace for a guidance-first upskilling product by running 8 user interviews, competitor audit and secondary research. Created the NorthStar MVP with 360° Profile, Adaptive Path Recommendation, Micro-task Ladder and Scaled Feedback Network. Defined metrics & GTM strategy.',
      tags: ['User Research', 'Hypothesis Testing', 'GTM Strategy', 'Wireframing'],
      link: 'https://www.canva.com/design/DAGw5h8JKW8/0Lt1XhLaa1yuF8SVSo6mPA/edit?utm_content=DAGw5h8JKW8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ];

  return (
    <section className="bg-surface-soft text-ink py-[88px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp className="mb-12">
          <p className="text-stone text-[14px] font-semibold uppercase tracking-[0.1em] mb-6">
            03 / ZERO TO ONE
          </p>
          <h2
            className="text-ink font-medium mb-4"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.8px' }}
          >
            From vague signal to <span className="text-primary italic">shipped MVP.</span>
          </h2>
          <p className="text-body text-[18px] leading-[1.56] max-w-2xl">
            End-to-end product cases: uncovering non-obvious user friction, vibe-coding prototypes, and defining metrics that matter.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <motion.div key={item.name} variants={staggerChild} className="h-full">
              <Tilt3DCard maxRotation={6} className="h-full rounded-[20px]">
                <div className="bg-canvas-light border border-hairline-light rounded-[20px] overflow-hidden flex flex-col hover:border-hairline-strong transition-all duration-300 tile-shadow h-full">
                  {/* Thumbnail */}
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-[32px] flex flex-col flex-1">
                    <h3 className="text-[24px] font-medium text-ink mb-1">{item.name}</h3>
                    <p className="text-[14px] text-stone mb-4">{item.subtitle}</p>
                    <p className="text-[16px] text-body leading-[1.5] mb-6 flex-1">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-[12px] py-[4px] rounded-full bg-surface-soft text-ink text-[13px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="h-[48px] px-[28px] rounded-full bg-canvas-dark text-white font-semibold text-[16px] tracking-[0.24px] hover:bg-surface-elevated transition-colors inline-flex items-center gap-2 self-start mt-auto"
                    >
                      View Case Study
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OriginalCases;
