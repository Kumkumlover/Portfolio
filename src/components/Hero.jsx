import React from 'react';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { FadeInUp, StaggerContainer, staggerChild, TextReveal, AnimatedCounter, Tilt3DCard, CopyEmailButton, motion } from '../lib/animations';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NextleapIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 22V2h4l7 14V2h4v20h-4l-7-14v14H5z" fill="currentColor"/>
  </svg>
);

export default function Hero() {
  const metrics = [
    { id: '01', value: 'Production', label: 'Designed and deployed Customer onboarding meet agent in Production', source: 'SUPERAGI CRM' },
    { id: '02', value: '60%', label: 'Implemented systematic LLM evaluations to increase the accuricy of conversation agents by 60%.', source: 'SUPERAGI' },
    { id: '03', value: '0 - 1', label: 'Built CRM analytics 0 - 1 in partity with Hubspot/Zoho', source: 'SUPERAGI CRM' },
    { id: '04', value: '30%', label: 'Conducted Primary research to identify product gaps, implemented solutions and increased product adoption 30%', source: 'DIGITAL HARBOR' }
  ];

  return (
    <>
      {/* Part A: Hero Section */}
      <section className="relative bg-canvas-dark pt-[120px] pb-[48px] px-6 overflow-hidden">
        {/* Ambient 3D Depth Orbs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[8%] left-[12%] w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(73,79,223,0.12)_0%,transparent_70%)] animate-float-slow" />
          <div className="absolute top-[18%] right-[10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,168,126,0.09)_0%,transparent_70%)] animate-float-slow-reverse" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-surface-elevated border border-hairline-dark rounded-full px-3 py-1.5 text-stone text-[13px] font-medium">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              Open for PM / AI Opportunities
            </div>
            
            {/* Headline */}
            <h1 
              className="mt-6 text-white" 
              style={{ 
                fontSize: 'clamp(48px, 8vw, 136px)', 
                fontWeight: 500, 
                lineHeight: 1.0, 
                letterSpacing: '-2.72px' 
              }}
            >
              <TextReveal delay={0}>Forward</TextReveal>{' '}
              <TextReveal delay={0.1}>Deployed</TextReveal>
              <br />
              <TextReveal delay={0.2}>
                <em className="italic text-primary">Builder</em>
              </TextReveal>
            </h1>
            
            {/* Subhead */}
            <FadeInUp delay={0.4}>
              <p className="text-[18px] md:text-[20px] text-on-dark-mute max-w-[600px] leading-[1.56] tracking-[-0.09px] mt-8">
                Most PMs write docs and wait. <strong className="text-white font-normal">I research, prototype, Evaluate and iterate.</strong>
              </p>
            </FadeInUp>
            
            {/* CTAs row */}
            <FadeInUp delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-10">
                <motion.a 
                  href="#products" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="h-[48px] px-[28px] rounded-full bg-canvas-light text-ink font-semibold text-[16px] tracking-[0.24px] hover:bg-surface-soft transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  Explore Products <ArrowRight size={18} />
                </motion.a>
                <motion.a 
                  href="https://hercules-cdn.com/file_4VWyEJ04olngM3DpRhutcGns" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="h-[48px] px-[27px] rounded-full border border-white text-white font-semibold text-[16px] tracking-[0.24px] hover:bg-[rgba(255,255,255,0.06)] transition-colors inline-flex items-center"
                >
                  Download Resume
                </motion.a>
              </div>
            </FadeInUp>
            
            {/* Social row */}
            <FadeInUp delay={0.6}>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <CopyEmailButton
                  email="shikharguptah2@gmail.com"
                  buttonClassName="w-10 h-10 rounded-full bg-surface-elevated border border-hairline-dark flex items-center justify-center text-stone hover:text-white hover:border-on-dark-mute"
                >
                  <Mail size={18} />
                </CopyEmailButton>
                <motion.a 
                  href="https://www.linkedin.com/in/shikhar-gupta-505b0b21b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-hairline-dark flex items-center justify-center text-stone hover:text-white hover:border-on-dark-mute transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </motion.a>
                <motion.a 
                  href="https://github.com/Kumkumlover" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-hairline-dark flex items-center justify-center text-stone hover:text-white hover:border-on-dark-mute transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </motion.a>
                <motion.a 
                  href="https://medium.com/@shikharguptah2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-10 h-10 rounded-full bg-surface-elevated border border-hairline-dark flex items-center justify-center text-stone hover:text-white hover:border-on-dark-mute transition-colors"
                  title="Medium Articles"
                >
                  <BookOpen size={18} />
                </motion.a>
                <motion.a 
                  href="https://nextleap.app/portfolio/shikhar-gupta-36qt/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="h-10 px-4 rounded-full bg-surface-elevated border border-hairline-dark flex items-center gap-2 text-stone hover:text-white hover:border-on-dark-mute transition-colors"
                >
                  <NextleapIcon size={16} />
                  <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-primary">Top Fellow</span>
                </motion.a>
              </div>
            </FadeInUp>
          </div>
          
          {/* Right Column — Profile Photo with 3D Tilt */}
          <div className="hidden lg:block lg:col-span-5">
            <FadeInUp delay={0.3}>
              <Tilt3DCard maxRotation={8} className="rounded-[28px]">
                <div className="rounded-[28px] overflow-hidden border border-hairline-dark aspect-square group shadow-2xl">
                  <img 
                    src="https://cdn.hercules.app/file_xcBcDBCfhX2Mf8hti27y7IXd" 
                    alt="Shikhar Gupta" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </Tilt3DCard>
            </FadeInUp>
          </div>
          
        </div>
      </section>

      {/* Part B: Metrics Strip */}
      <section className="bg-canvas-dark pb-[88px] px-6">
        <StaggerContainer className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={metric.id} 
              variants={staggerChild}
              className={`flex flex-col ${index !== 3 ? 'border-r border-hairline-dark pr-8' : ''}`}
            >
              <div className="text-primary text-[13px] font-semibold uppercase tracking-[0.1em] mb-2">
                {metric.id}
              </div>
              <div 
                className="text-white font-semibold" 
                style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1 }}
              >
                {metric.value.includes('%') ? (
                  <AnimatedCounter value={parseInt(metric.value)} suffix="%" />
                ) : (
                  metric.value
                )}
              </div>
              <div className="text-on-dark-mute text-[14px] mt-2">
                {metric.label}
              </div>
              <div className="text-stone text-[13px] uppercase tracking-[0.04em] mt-1">
                {metric.source}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
