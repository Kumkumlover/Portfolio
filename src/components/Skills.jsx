import React from 'react';
import { 
  Users, 
  FileText, 
  Milestone, 
  Rocket, 
  Target, 
  Sparkles, 
  Terminal, 
  Bot, 
  UserCheck, 
  CheckSquare, 
  Code2, 
  Database, 
  Zap, 
  Server,
  Cloud
} from 'lucide-react';
import { FadeInUp, StaggerContainer, staggerChild, Tilt3DCard, motion } from '../lib/animations';

// Custom Brand SVGs
const JiraIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M11.53 2c0 5.26 4.27 9.53 9.53 9.53V2h-9.53zm-5.76 5.76c0 5.27 4.27 9.54 9.53 9.54V7.76H5.77zM0 13.53C0 18.8 4.27 23.06 9.53 23.06V13.53H0z"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.062c-.42-.326-.98-.7-2.053-.607L3.433 2.528c-.466.047-.56.327-.373.514zm-.42 3.824v13.522c0 .746.42 1.026 1.213.98l14.474-.84c.793-.046.98-.56.98-1.166V6.913c0-.606-.233-.886-.84-.84l-14.987.886c-.606.047-.84.373-.84.933zm13.727.84c.093.42 0 .84-.42.886l-.7.14v9.704c-.606.373-1.213.56-1.726.56-.933 0-1.213-.373-1.913-1.26l-4.572-6.904v6.764l1.4.327c.42.093.466.56.466.84 0 .28-.187.327-.84.327H6.931c-.42 0-.606-.187-.606-.467 0-.326.186-.606.56-.7l1.166-.233V8.871l-1.4-.14c-.373-.047-.513-.374-.513-.653 0-.327.233-.42.7-.467l3.825-.233 4.805 7.184V8.544l-1.26-.14c-.42-.047-.56-.373-.56-.653 0-.327.233-.42.7-.467l3.265-.186c.466-.047.606.28.606.56z"/>
  </svg>
);

const GithubToolIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.19-3.37-1.19-.45-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z"/>
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1.78 14.54l-4.14 1.83 1.83-4.14 6.84-6.84 2.31 2.31z"/>
  </svg>
);

const SheetsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
    <path d="M3 3h18v18H3z"></path>
    <path d="M3 9h18"></path>
    <path d="M3 15h18"></path>
    <path d="M9 3v18"></path>
    <path d="M15 3v18"></path>
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.7l3.71 3.3-3.71 3.3a1 1 0 0 0 .007 1.439l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18.5 16.5l-6.83-5.5L18.5 5.5v11z"/>
  </svg>
);

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M21.362 9.354H12V.312a.312.312 0 0 0-.537-.216L2.43 11.233a.938.938 0 0 0 .697 1.621H12v9.042a.312.312 0 0 0 .537.216l9.033-11.137a.938.938 0 0 0-.208-1.621z"/>
  </svg>
);

const NetlifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
  </svg>
);

export default function Skills() {
  const skillCategories = [
    {
      category: 'Product',
      items: [
        { text: 'Discovery & user research', icon: Users, color: 'bg-primary/10 text-primary' },
        { text: 'PRDs & specs', icon: FileText, color: 'bg-primary/10 text-primary' },
        { text: 'Roadmapping & prioritization', icon: Milestone, color: 'bg-primary/10 text-primary' },
        { text: 'GTM strategy', icon: Rocket, color: 'bg-primary/10 text-primary' },
        { text: 'North Star metrics', icon: Target, color: 'bg-primary/10 text-primary' },
      ],
    },
    {
      category: 'AI product',
      items: [
        { text: 'LLM product design', icon: Sparkles, color: 'bg-[#4285F4]/10 text-[#4285F4]' },
        { text: 'Prompt engineering', icon: Terminal, color: 'bg-primary/10 text-primary' },
        { text: 'AI agent design systems', icon: Bot, color: 'bg-primary/10 text-primary' },
        { text: 'Human-in-the-loop design', icon: UserCheck, color: 'bg-primary/10 text-primary' },
        { text: 'Evals · accept / edit / reject', icon: CheckSquare, color: 'bg-primary/10 text-primary' },
      ],
    },
    {
      category: 'Technical depth',
      items: [
        { text: 'Reads & writes code', icon: Code2, color: 'bg-primary/10 text-primary' },
        { text: 'SQL for self-serve analytics', icon: Database, color: 'bg-primary/10 text-primary' },
        { text: 'Rapid prototyping', icon: Zap, color: 'bg-primary/10 text-primary' },
        { text: 'API design', icon: Server, color: 'bg-primary/10 text-primary' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { text: 'JIRA', customIcon: JiraIcon, color: 'bg-[#0052CC]/10 text-[#0052CC]' },
        { text: 'Notion', customIcon: NotionIcon, color: 'bg-[#000000]/10 text-ink' },
        { text: 'GitHub / GitLab', customIcon: GithubToolIcon, color: 'bg-[#181717]/10 text-ink' },
        { text: 'Postman', customIcon: PostmanIcon, color: 'bg-[#FF6C37]/10 text-[#FF6C37]' },
        { text: 'Excel / Google Sheets', customIcon: SheetsIcon, color: 'bg-[#217346]/10 text-[#217346]' },
      ],
    },
    {
      category: 'AI-native dev stack',
      items: [
        { text: 'VS Code', customIcon: VSCodeIcon, color: 'bg-[#007ACC]/10 text-[#007ACC]' },
        { text: 'Cursor', customIcon: CursorIcon, color: 'bg-[#000000]/10 text-ink' },
        { text: 'GitHub Copilot', customIcon: GithubToolIcon, color: 'bg-[#181717]/10 text-ink' },
        { text: 'Claude Cowork', customIcon: ClaudeIcon, color: 'bg-[#D97757]/10 text-[#D97757]' },
        { text: 'Google Stitch', icon: Sparkles, color: 'bg-[#4285F4]/10 text-[#4285F4]' },
        { text: 'Antigravity', icon: Rocket, color: 'bg-primary/10 text-primary' },
        { text: 'Supabase', customIcon: SupabaseIcon, color: 'bg-[#3ECF8E]/10 text-[#3ECF8E]' },
        { text: 'Render', icon: Cloud, color: 'bg-primary/10 text-primary' },
        { text: 'Netlify', customIcon: NetlifyIcon, color: 'bg-[#05BDBA]/10 text-[#05BDBA]' },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-16 bg-canvas-light text-ink py-[88px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="mb-10 md:mb-12">
            <p className="text-stone text-[14px] font-semibold uppercase tracking-[0.1em] mb-6">
              04 / SKILLS
            </p>
            <h2
              className="text-ink font-medium mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.8px' }}
            >
              The <span className="text-primary italic">toolkit.</span>
            </h2>
            <p className="text-body text-[18px] leading-[1.56] max-w-2xl">
              Product craft, AI-native fluency, and the technical depth to actually ship it.
            </p>
          </div>
        </FadeInUp>

        <div className="space-y-10">
          {skillCategories.map((group, groupIdx) => (
            <FadeInUp key={group.category} delay={groupIdx * 0.1}>
              <div>
                <h3 className="mb-4 text-[13px] font-semibold tracking-tight text-primary uppercase">
                  {group.category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((skill) => {
                    const IconComponent = skill.icon;
                    const CustomIcon = skill.customIcon;

                    return (
                      <Tilt3DCard key={skill.text} maxRotation={5} className="rounded-2xl">
                        <div className="flex items-center gap-3 rounded-2xl border border-hairline-light bg-canvas-light px-4 py-3.5 hover:border-hairline-strong transition-all duration-200 tile-shadow group h-full">
                          <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                            {IconComponent && <IconComponent size={18} />}
                            {CustomIcon && <CustomIcon />}
                          </span>
                          <span className="text-[13.5px] font-medium leading-snug tracking-tight text-ink group-hover:text-primary transition-colors">
                            {skill.text}
                          </span>
                        </div>
                      </Tilt3DCard>
                    );
                  })}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
