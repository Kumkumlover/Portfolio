import React, { useState } from 'react';
import { Mail, Globe, ChevronDown, FileText } from 'lucide-react';
import { FadeInUp, motion } from '../lib/animations';

// Nextleap custom SVG icon
const NextleapIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 22V2h4l7 14V2h4v20h-4l-7-14v14H5z" fill="currentColor"/>
  </svg>
);

const experiences = [
  {
    company: 'SuperAGI',
    role: 'AI Product Manager (Trainee)',
    period: 'Dec 2025 – Jul 2026',
    context: 'SuperAGI is an AI-native CRM platform that unifies sales, marketing, and customer service teams under one intelligent system.',
    pods: 'Pods: CRM Analytics, Chat, Project Management',
    sections: [
      {
        heading: null,
        bullets: [
          'Scaled CRM Analytics module of SuperAGI on parity with HubSpot and Zoho and up-sold it to 20% of Mid Market customers.',
          'Owned end to end discovery and execution of Project Management and Chat modules and built them from 0–1 successfully replacing JIRA and Slack for internal usage.',
        ],
      },
      {
        heading: 'AI Initiatives',
        bullets: [
          'Built AI Onboarding Agent embedding SuperAGI knowledge base to autonomously conduct customer meetings: guides use-case setup, visual walkthroughs, Q&A — cutting customer success team cost by 60%.',
          'Designed and developed chat-native PM Agent for SuperAGI Chat that monitors conversations/meetings, auto-creates tasks, tracks lifecycle, and sends proactive nudges to owners — cutting project management cost by 40%.',
        ],
      },
    ],
    skills: ['Product Discovery', 'Competitive Analysis', 'PRDs', 'Roadmap Prioritization', 'User Stories', 'Agile Delivery', 'RAG-based Product Experiences', 'Evaluation Frameworks', 'Prompt Design', 'Conversational UX', 'Workflow Orchestration'],
  },
  {
    company: 'Digital Harbor',
    role: 'Product Analyst',
    period: 'Jul 2024 – Mar 2025',
    context: 'Digital Harbor is a product company specialised in healthcare case management and tracking software with clients in US state governments.',
    pods: null,
    sections: [
      {
        heading: null,
        bullets: [
          'Conducted primary research to identify user experience gaps for Micro-apps, and implemented solutions that increased feature adoption within the company by 30%.',
          'Reduced Time-to-market by 15% for a release by defining product roadmaps and prioritising features based on user needs, market research, and business objectives.',
          'Set up the right product metrics and tracking to understand user behaviour, which led to a 70% rise in Live Annotations usage and a 40% drop in users dropping off mid-flow.',
          'Owned end-to-end delivery of 20+ features, managing a 26-member cross-functional team across design, QA, and engineering.',
        ],
      },
    ],
    skills: ['User Research', 'Requirements Gathering', 'Prioritisation', 'Product Analytics', 'Funnel Analysis', 'UAT', 'Release Coordination', 'Stakeholder Management'],
  },
];

const education = [
  {
    institution: 'Center for Management Studies JGI',
    degree: "Bachelor's in Finance & Data Analytics",
    period: 'Sept 2021 – May 2024',
    bullets: [
      'Co-curriculars: Vice President of Finance club, Member of Fashion Team.',
      'Awards: Winner of Crisis Management, Music production competition in inter-college fests.',
    ],
    link: null,
    linkLabel: null,
  },
  {
    institution: 'Nextleap Product Management Fellowship',
    degree: 'Top Fellow',
    badge: 'Top 10%',
    period: 'May 2025 – Jul 2025',
    bullets: [],
    link: 'https://nextleap.app/portfolio/shikhar-gupta-36qt/',
    linkLabel: "View Shikhar's Portfolio →",
  },
];

const ExperienceFooter = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <>
      {/* Part A: Experience Section */}
      <section id="experience" className="bg-canvas-dark text-white pt-[120px] pb-[88px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <p className="text-stone text-[14px] font-semibold uppercase tracking-[0.1em] mb-6">
              04 / EXPERIENCE
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <h2
                className="text-white font-medium"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.8px' }}
              >
                Experience
              </h2>
              <a
                href="https://hercules-cdn.com/file_4VWyEJ04olngM3DpRhutcGns"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-[44px] px-[22px] rounded-full bg-surface-elevated border border-hairline-dark text-stone text-[14px] font-semibold hover:text-white hover:border-on-dark-mute transition-colors self-start md:self-auto"
              >
                <FileText size={16} />
                View Resume
              </a>
            </div>
          </FadeInUp>

          {/* Timeline & Expandable Experience Cards */}
          <div className="relative flex flex-col gap-6 mb-16">
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-hairline-dark" />
            {experiences.map((exp, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={exp.company} className="relative">
                  {/* Timeline node */}
                  <div
                    className={`absolute left-[10px] top-[40px] -translate-y-1/2 w-[12px] h-[12px] rounded-full transition-colors duration-200 z-10 ${
                      isOpen ? 'bg-primary' : 'bg-surface-elevated border border-hairline-dark'
                    }`}
                  />
                  {/* Card */}
                  <div
                    className={`ml-[40px] bg-surface-elevated border rounded-[20px] overflow-hidden transition-colors duration-200 ${
                      isOpen ? 'border-primary' : 'border-hairline-dark hover:border-on-dark-mute'
                    }`}
                  >
                    {/* Clickable header */}
                    <button
                      className="w-full flex items-center justify-between p-[32px] text-left"
                      onClick={() => toggle(idx)}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-[22px] font-medium text-white leading-none">
                            {exp.company}
                          </h3>
                          <span className="text-on-dark-mute text-[15px]">{exp.role}</span>
                        </div>
                        <span className="inline-flex items-center h-[28px] px-[12px] rounded-full bg-canvas-dark text-stone text-[12px] font-semibold border border-hairline-dark self-start">
                          {exp.period}
                        </span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-stone shrink-0 transition-transform duration-300 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expandable body */}
                    <div
                      style={{
                        maxHeight: isOpen ? '1200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.45s ease',
                      }}
                    >
                      <div className="px-[32px] pb-[32px] border-t border-hairline-dark pt-6 space-y-6">
                        {/* Context */}
                        <p className="text-on-dark-mute text-[14px] leading-[1.6] italic">
                          {exp.context}
                          {exp.pods && <span className="block mt-1 not-italic text-stone text-[13px]">{exp.pods}</span>}
                        </p>

                        {/* Bullet sections */}
                        {exp.sections.map((section, si) => (
                          <div key={si}>
                            {section.heading && (
                              <p className="text-white text-[13px] font-semibold uppercase tracking-[0.08em] mb-3">
                                {section.heading}
                              </p>
                            )}
                            <ul className="space-y-3">
                              {section.bullets.map((point, bi) => (
                                <li key={bi} className="flex gap-3 text-on-dark-mute text-[15px] leading-[1.6]">
                                  <span className="text-primary font-bold mt-0.5 shrink-0">·</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-[10px] py-[3px] rounded-full bg-canvas-dark border border-hairline-dark text-stone text-[12px] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resume CTA below experience */}
          <div className="flex items-center gap-4 mb-16 pt-2 border-t border-hairline-dark">
            <span className="text-stone text-[14px]">Want the full picture?</span>
            <a
              href="https://hercules-cdn.com/file_4VWyEJ04olngM3DpRhutcGns"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white text-[14px] font-semibold hover:text-primary transition-colors"
            >
              <FileText size={15} />
              Download Resume
            </a>
          </div>

          {/* Education */}
          <FadeInUp>
            <div>
              <p className="text-stone text-[13px] font-semibold uppercase tracking-[0.1em] mb-6">Education</p>
              <div className="flex flex-col gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-[200px] shrink-0">
                      <span className="text-stone text-[13px]">{edu.period}</span>
                    </div>
                    <div>
                      <p className="text-white text-[15px] font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-on-dark-mute text-[14px]">{edu.degree}</p>
                        {edu.badge && (
                          <span className="px-[8px] py-[2px] rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-[0.05em] uppercase">
                            {edu.badge}
                          </span>
                        )}
                      </div>
                      {edu.bullets.map((b, bi) => (
                        <p key={bi} className="text-stone text-[13px] leading-[1.6]">{b}</p>
                      ))}
                      {edu.link && (
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 mt-2 text-primary text-[13px] font-medium hover:underline"
                        >
                          <NextleapIcon size={13} />
                          {edu.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Skills Matrix */}
          <FadeInUp>
            <div className="mt-12 flex flex-wrap gap-2">
              {[
                'AI & LLMs', 'PRDs & Specifications', 'Growth Analytics',
                'System Architecture', 'User Research', 'SQL',
                'Prompt Engineering', 'Wireframing', 'Agile/Scrum',
                'A/B Testing', 'Stakeholder Management'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-[12px] py-[4px] rounded-full bg-surface-elevated border border-hairline-dark text-stone text-[13px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Part B: Contact CTA Band */}
      <FadeInUp>
        <section className="bg-primary py-[88px] px-6 text-center">
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.0, letterSpacing: '-0.48px' }}
          >
            Let's build something together.
          </h2>
          <p className="text-[rgba(255,255,255,0.72)] text-[18px] mt-6">
            Open for PM opportunities · Bangalore, India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.a
              href="mailto:shikharguptah2@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="h-[48px] px-[28px] rounded-full bg-canvas-light text-ink font-semibold text-[16px] tracking-[0.24px] hover:bg-surface-soft transition-colors inline-flex items-center gap-2"
            >
              Get in touch
              <Mail size={20} />
            </motion.a>
          </div>
        </section>
      </FadeInUp>

      {/* Part C: Footer */}
      <footer className="bg-canvas-dark border-t border-divider-soft py-[80px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-[4px] flex items-center justify-center text-white text-[12px] font-bold">
                S
              </div>
              <span className="text-white font-medium text-[14px]">Shikhar Gupta</span>
            </div>

            {/* Center */}
            <div className="flex gap-8 text-on-dark-mute text-[14px] font-medium flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/shikhar-gupta-505b0b21b/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                LinkedIn
              </a>
              <a href="https://github.com/Kumkumlover" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                GitHub
              </a>
              <a href="https://nextleap.app/portfolio/shikhar-gupta-36qt/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                <NextleapIcon size={14} />
                Nextleap
              </a>
              <a href="https://medium.com/@shikharguptah2" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                Medium
              </a>
            </div>

            {/* Right */}
            <div className="text-on-dark-mute text-[13px]">
              © 2026 Shikhar Gupta
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-divider-soft w-full text-center text-stone text-[13px]">
            shikharguptah2@gmail.com · +91 7987177269
          </div>
        </div>
      </footer>
    </>
  );
};

export default ExperienceFooter;
