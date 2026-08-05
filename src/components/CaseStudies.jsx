import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, staggerChild, motion } from '../lib/animations';

export default function CaseStudies() {
  const deepDives = [
    {
      title: 'Solving Scheduled Deliveries in Zepto',
      type: 'System Design & PRD',
      desc: 'Market analysis of why users weren\'t choosing scheduled delivery in Zepto. Designed feature with unit economics analysis (₹17–25 savings/₹200 order) and user adoption funnels.',
      thumbnail: 'https://cdn.hercules.app/file_q4KXnFCxunzRcLbGnz5LOs6j',
      link: 'https://medium.com/@shikharguptah2/how-i-increased-the-adoption-of-scheduled-deliveries-for-zepto-b98af15ae8ed'
    }
  ];

  const teardowns = [
    {
      title: 'Cracking UPI Growth with Super Money',
      type: 'PDF Strategy Teardown',
      thumbnail: 'https://cdn.hercules.app/file_ItsmR1vpOKprcNhx8rc4usab',
      link: 'https://assets.nextleap.app/submissions/Super-2cb17b2e-211f-4d6c-bfc9-ef6b0100c926.pdf',
      borderColor: 'border-l-accent-teal'
    },
    {
      title: 'No Broker\'s Next Big Bet',
      type: 'PDF Strategy Teardown',
      thumbnail: 'https://cdn.hercules.app/file_kfdr422Lmdip8mEH1zAbI05n',
      link: 'https://assets.nextleap.app/submissions/NoBroker-a3837ac1-2b2f-4e07-804f-830218703749.pdf',
      borderColor: 'border-l-accent-blue-link'
    }
  ];

  return (
    <section id="case-studies" className="bg-canvas-light text-ink py-[88px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="text-stone text-[14px] font-semibold uppercase tracking-[0.1em] mb-6">
            02 / CASE STUDIES
          </div>
          
          {/* Section 1: Deep dive articles and teardowns */}
          <h2 
            className="text-ink font-medium mb-10" 
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.64px' }}
          >
            Deep dive articles and teardowns
          </h2>
        </FadeInUp>

        <StaggerContainer className="space-y-6 mb-6">
          {deepDives.map((article, idx) => (
            <motion.div 
              key={idx} 
              variants={staggerChild}
              className="flex flex-col md:flex-row gap-6 items-stretch p-6 rounded-[20px] border border-hairline-light bg-canvas-light hover:border-ink transition-colors group"
            >
              <div className="w-full md:w-[240px] shrink-0 rounded-[12px] overflow-hidden aspect-[4/3]">
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[13px] text-stone font-medium mb-2">
                    {article.type}
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.4] text-ink group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-[16px] text-body leading-[1.5] mb-4">
                    {article.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[14px] font-bold text-ink hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    Read on Medium <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {teardowns.map((item, idx) => (
            <motion.a 
              key={idx}
              variants={staggerChild}
              href={item.link} 
              target="_blank" 
              rel="noreferrer"
              className={`flex gap-4 p-6 rounded-[20px] border border-hairline-light bg-canvas-light hover:border-ink transition-colors group border-l-[3px] ${item.borderColor}`}
            >
              <div className="w-[80px] h-[80px] shrink-0 rounded-[12px] overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-[16px] font-medium text-ink group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <div className="text-[13px] text-stone mt-1">
                  {item.type}
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
