import React from 'react';
import { ArrowRight, FileText, Users, Target, Activity, Quote } from 'lucide-react';

export default function Concept2() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans text-[#ffffff] selection:bg-[#494fdf] selection:text-[#ffffff]">
      
      {/* 
        Revolut Storytelling Canvas: Dark Hero 
        Uses massive Aeonik Pro (simulated with Inter/tight tracking)
      */}
      <nav className="sticky top-0 w-full z-50 bg-[#000000]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)]">
        <div className="h-[64px] px-6 max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ffffff] rounded flex items-center justify-center font-bold text-[#191c1f] text-[18px]">S</div>
            <span className="font-medium tracking-tight text-[16px]">Shikhar / Case Studies</span>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="h-[36px] px-[16px] rounded-full bg-[#16181a] text-[#ffffff] font-semibold text-[14px] hover:bg-[#3a3d40] transition-colors">
              Fair Split
            </button>
            <button className="h-[36px] px-[16px] rounded-full bg-[#494fdf] text-[#ffffff] font-semibold text-[14px] hover:bg-[#3a40c4] transition-colors">
              JobSuite Tracker
            </button>
          </div>
          <button className="h-[48px] px-[27px] rounded-full border border-[rgba(255,255,255,0.12)] text-[#ffffff] font-semibold text-[16px] tracking-[0.24px] hover:bg-[rgba(255,255,255,0.06)] transition-colors">
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Photo / Title Band */}
      <section className="pt-[120px] pb-[88px] px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-[88px]">
          <div className="max-w-[800px]">
            <span className="text-[14px] font-semibold text-[#494fdf] tracking-widest uppercase mb-6 block">01 / Featured Launch</span>
            <h1 className="text-[64px] md:text-[100px] font-medium leading-[1.0] tracking-[-0.8px] mb-8">
              JobSuite Tracker.
            </h1>
            <p className="text-[20px] md:text-[24px] text-[rgba(255,255,255,0.72)] leading-[1.56] tracking-[-0.09px]">
              How we eliminated job search fatigue using a deterministic Node.js engine and full-stack Gmail API parsing.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-[14px] text-[rgba(255,255,255,0.72)] w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.12)] pt-6 md:pt-0 md:pl-12">
            <div>
              <strong className="block text-[#ffffff] mb-1">Role</strong>
              AI Product Manager
            </div>
            <div>
              <strong className="block text-[#ffffff] mb-1">Impact</strong>
              35% faster processing
            </div>
            <div>
              <strong className="block text-[#ffffff] mb-1">Platform</strong>
              Web, Kanban, API
            </div>
          </div>
        </div>

        {/* Product Mockup Band (Full Bleed Illusion) */}
        <div className="w-full aspect-video bg-[#16181a] rounded-[28px] overflow-hidden relative flex items-center justify-center border border-[rgba(255,255,255,0.06)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[120%] bg-[#494fdf] opacity-20 blur-[120px] rounded-full translate-y-[20%]"></div>
            </div>
            <div className="relative z-10 w-[80%] h-[70%] bg-[#000000] border-t border-l border-r border-[rgba(255,255,255,0.12)] rounded-t-[20px] shadow-2xl flex flex-col">
              <div className="h-10 border-b border-[rgba(255,255,255,0.12)] flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
                 <div className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
                 <div className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
              </div>
              <div className="flex-1 flex items-center justify-center text-[rgba(255,255,255,0.5)] font-mono text-sm">
                 [High-Fidelity Dashboard Interface Render]
              </div>
            </div>
        </div>
      </section>

      {/* 
        Revolut Catalogue Canvas: Reading Mode
        Background: #ffffff, strict 720px reading column
      */}
      <section className="bg-[#ffffff] text-[#191c1f] pt-[120px] pb-[120px]">
        <div className="max-w-[720px] mx-auto px-6">
          
          {/* Executive TLDR */}
          <div className="bg-[#f4f4f4] rounded-[20px] p-[32px] mb-[88px]">
            <h3 className="text-[24px] font-medium leading-[1.33] mb-6">Executive Summary</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="flex items-center gap-2 text-[#494fdf] font-semibold text-[32px] mb-2 leading-none">
                  <Activity size={28} /> 40%
                </span>
                <p className="text-[14px] text-[#505a63]">Reduction in manual logging time.</p>
              </div>
              <div>
                <span className="flex items-center gap-2 text-[#00a87e] font-semibold text-[32px] mb-2 leading-none">
                  <Target size={28} /> 99.9%
                </span>
                <p className="text-[14px] text-[#505a63]">Parser accuracy via deterministic math.</p>
              </div>
            </div>
          </div>

          {/* Reading Prose */}
          <h2 className="text-[40px] font-medium leading-[1.2] tracking-[-0.4px] mb-6">
            The Problem: Decision Fatigue
          </h2>
          <p className="text-[18px] text-[#1f2226] leading-[1.56] tracking-[-0.09px] mb-8">
            Job seekers apply to hundreds of roles. Tracking these applications across various portals, parsing automated rejection emails, and scheduling interviews manually introduces a massive cognitive load. 
          </p>
          <p className="text-[18px] text-[#1f2226] leading-[1.56] tracking-[-0.09px] mb-12">
            The existing solutions required manual data entry, turning the job hunt into a tedious administrative task. We needed a system that operated completely in the background.
          </p>

          {/* Quotation Block */}
          <blockquote className="border-l-[3px] border-[#494fdf] pl-6 my-12">
            <Quote className="text-[#494fdf] mb-4 opacity-50" size={32} />
            <p className="text-[24px] font-medium leading-[1.33] text-[#191c1f] mb-4">
              "I spend more time updating my tracking spreadsheet than actually preparing for the interviews."
            </p>
            <footer className="text-[14px] text-[#505a63] font-medium">
              — User Research Participant, Cohort B
            </footer>
          </blockquote>

          <h2 className="text-[40px] font-medium leading-[1.2] tracking-[-0.4px] mb-6">
            Architecting the Solution
          </h2>
          <p className="text-[18px] text-[#1f2226] leading-[1.56] tracking-[-0.09px] mb-8">
            By hooking directly into the Gmail API, we built a deterministic Node.js engine that scans incoming mail for specific heuristic patterns—automatically extracting the company name, role, and application status.
          </p>

          <div className="my-12 bg-[#000000] text-[#ffffff] rounded-[20px] p-8">
            <h3 className="text-[20px] font-medium leading-[1.4] mb-6 flex items-center gap-3">
               <FileText className="text-[#494fdf]" /> Engineering Specs
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4 border-b border-[rgba(255,255,255,0.12)] pb-4">
                <span className="text-[#8d969e] w-24 shrink-0 text-sm">Auth</span>
                <span className="text-[16px]">OAuth 2.0 via Google Cloud Console</span>
              </li>
              <li className="flex gap-4 border-b border-[rgba(255,255,255,0.12)] pb-4">
                <span className="text-[#8d969e] w-24 shrink-0 text-sm">Parser</span>
                <span className="text-[16px]">Regex pipelines combined with LLM edge-case fallback</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8d969e] w-24 shrink-0 text-sm">Storage</span>
                <span className="text-[16px]">PostgreSQL with Prisma ORM</span>
              </li>
            </ul>
          </div>

          <p className="text-[18px] text-[#1f2226] leading-[1.56] tracking-[-0.09px] mb-12">
            The parsed data is then seamlessly piped into a Kanban interface, moving cards automatically from "Applied" to "Interview" or "Rejected" without a single click from the user.
          </p>

        </div>
      </section>

      {/* Next Project Footer Band */}
      <section className="bg-[#16181a] text-[#ffffff] py-[120px] px-6 text-center">
         <span className="text-[14px] font-semibold text-[#8d969e] tracking-widest uppercase mb-6 block">Up Next</span>
         <h2 className="text-[64px] md:text-[80px] font-medium leading-[1.0] tracking-[-0.8px] mb-8">
            Fair Split.
         </h2>
         <button className="h-[48px] px-[28px] rounded-full bg-[#ffffff] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#f4f4f4] transition-colors inline-flex items-center justify-center gap-2">
            Read case study <ArrowRight size={18} />
         </button>
      </section>

    </div>
  );
}
