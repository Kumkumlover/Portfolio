import React from 'react';
import { ArrowRight, Code2, Globe, FileText, CheckCircle2 } from 'lucide-react';

const products = [
  {
    name: "JobSuite Tracker",
    desc: "Full-stack Gmail auto-scan job tracker & AI outreach generator. Parses emails into Kanban touchpoints.",
    tags: ["Full-Stack AI", "Gmail API", "Kanban"],
    repo: "https://github.com/Kumkumlover/Job-Tracker",
    spotlight: true,
  },
  {
    name: "Fair Split",
    desc: "AI receipt splitter using Gemini 2.5 Flash Vision & deterministic Node.js math engine.",
    tags: ["Gemini 2.5", "Vision LLM", "Node.js"],
    repo: "https://github.com/Kumkumlover/fair-split",
    live: "https://fair-split-eight.vercel.app/"
  }
];

export default function Concept1() {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#191c1f]">
      
      {/* 
        Revolut Two-Mode System: Storytelling Dark Canvas 
        Background: #000000 (True Black)
      */}
      <div className="bg-[#000000] text-[#ffffff]">
        
        {/* Navigation - 64px height */}
        <nav className="h-[64px] px-6 max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Cobalt Violet Brand Stamp */}
            <div className="w-8 h-8 bg-[#494fdf] rounded flex items-center justify-center font-bold text-[18px]">S</div>
            <span className="font-medium tracking-tight text-[16px]">Shikhar Gupta</span>
          </div>
          <div className="hidden md:flex gap-8 text-[14px] font-medium text-[rgba(255,255,255,0.72)]">
            <a href="#about" className="hover:text-[#ffffff] transition-colors">Personal</a>
            <a href="#products" className="hover:text-[#ffffff] transition-colors">Products</a>
            <a href="#company" className="hover:text-[#ffffff] transition-colors">Experience</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-medium text-[rgba(255,255,255,0.72)] hidden md:block">EN</span>
            <button className="h-[48px] px-[28px] rounded-full bg-[#ffffff] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#f4f4f4] transition-colors">
              Get in touch
            </button>
          </div>
        </nav>

        {/* Hero Band - 120px vertical padding */}
        <section className="py-[120px] px-6 max-w-[1200px] mx-auto flex flex-col items-center text-center">
          {/* Display-xl / Display-xxl equivalent: Tight tracking, line-height 1.0 */}
          <h1 className="text-[64px] md:text-[100px] lg:text-[136px] font-medium leading-[1.0] tracking-[-2.72px] mb-8 max-w-[1000px]">
            Building AI & Beyond
          </h1>
          
          <p className="text-[18px] md:text-[24px] text-[rgba(255,255,255,0.72)] max-w-[600px] leading-[1.56] tracking-[-0.09px] mb-12">
            Most PMs write docs and wait. I research, prototype, analyze data with AI, and ship high-density utility tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA on dark: White pill */}
            <button className="h-[48px] px-[28px] rounded-full bg-[#ffffff] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#f4f4f4] transition-colors flex items-center justify-center gap-2">
              Explore products <ArrowRight size={18} />
            </button>
            {/* Outline CTA on dark */}
            <button className="h-[48px] px-[27px] rounded-full border border-[#ffffff] text-[#ffffff] font-semibold text-[16px] tracking-[0.24px] hover:bg-[rgba(255,255,255,0.06)] transition-colors flex items-center justify-center">
              View resume
            </button>
          </div>
        </section>

        {/* Product Mockup Band (Full Bleed Illusion) */}
        <section className="px-6 pb-[120px] max-w-[1200px] mx-auto">
           {/* Surface Elevated Dark (#16181a) */}
           <div className="bg-[#16181a] rounded-[28px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="h-[36px] px-[16px] rounded-full bg-[rgba(255,255,255,0.1)] text-[#ffffff] text-[14px] font-semibold inline-flex items-center mb-6">
                  Featured Artifact
                </span>
                <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-[-0.48px] mb-4 text-[#ffffff]">
                  {products[0].name}
                </h2>
                <p className="text-[18px] text-[rgba(255,255,255,0.72)] leading-[1.56] tracking-[-0.09px] mb-8">
                  {products[0].desc}
                </p>
                <button className="h-[48px] px-[28px] rounded-full bg-[#494fdf] text-[#ffffff] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#3a40c4] transition-colors">
                  View Case Study
                </button>
              </div>

              {/* Fake UI Mockup replacing photography */}
              <div className="flex-1 w-full bg-[#000000] rounded-[20px] p-6 border border-[rgba(255,255,255,0.12)]">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#e23b4a]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#b09000]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00a87e]"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-[#16181a] rounded"></div>
                  <div className="h-4 w-1/2 bg-[#16181a] rounded"></div>
                  <div className="h-24 w-full bg-[#16181a] rounded-lg mt-6 flex items-center justify-center text-[rgba(255,255,255,0.72)] text-[14px]">
                    Kanban UI Rendering...
                  </div>
                </div>
              </div>
           </div>
        </section>
      </div>

      {/* 
        Revolut Two-Mode System: Catalogue White Canvas 
        Background: #ffffff (Pure White)
      */}
      <section className="py-[88px] px-6 max-w-[1200px] mx-auto bg-[#ffffff]">
        <div className="text-center mb-16">
          <h2 className="text-[48px] md:text-[80px] font-medium leading-[1.0] tracking-[-0.8px] text-[#191c1f] mb-6">
            Compare all products
          </h2>
          <p className="text-[18px] text-[#1f2226] leading-[1.56]">
            Every tool built from 0 to 1, engineered for speed and utility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Cobalt Featured Plan Card */}
          <div className="bg-[#494fdf] rounded-[20px] p-[32px] text-[#ffffff] flex flex-col h-full">
            <h3 className="text-[32px] font-medium leading-[1.19] tracking-[-0.32px] mb-4">
              {products[0].name}
            </h3>
            <p className="text-[16px] text-[rgba(255,255,255,0.72)] leading-[1.5] mb-8 flex-grow">
              {products[0].desc}
            </p>
            
            <div className="space-y-3 mb-8">
              {products[0].tags.map(tag => (
                <div key={tag} className="flex items-center gap-3 text-[14px]">
                  <CheckCircle2 size={18} className="text-[#00a87e]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <button className="w-full h-[48px] rounded-full bg-[#ffffff] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#f4f4f4] transition-colors mt-auto">
              Get Source Code
            </button>
          </div>

          {/* Standard Feature Card Light */}
          <div className="bg-[#ffffff] border border-[#e2e2e7] rounded-[20px] p-[32px] text-[#191c1f] flex flex-col h-full">
            <h3 className="text-[32px] font-medium leading-[1.19] tracking-[-0.32px] mb-4">
              {products[1].name}
            </h3>
            <p className="text-[16px] text-[#1f2226] leading-[1.5] mb-8 flex-grow">
              {products[1].desc}
            </p>

            <div className="space-y-3 mb-8">
              {products[1].tags.map(tag => (
                <div key={tag} className="flex items-center gap-3 text-[14px]">
                  <CheckCircle2 size={18} className="text-[#00a87e]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <button className="w-full h-[48px] rounded-full bg-[#f4f4f4] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[#e2e2e7] transition-colors mt-auto">
              Open Web App
            </button>
          </div>

          {/* Secondary / Upcoming Card */}
          <div className="bg-[#f4f4f4] border border-[#e2e2e7] rounded-[20px] p-[32px] text-[#191c1f] flex flex-col h-full items-center justify-center text-center">
            <h3 className="text-[24px] font-medium leading-[1.33] mb-4 text-[#191c1f]">
              More artifacts
            </h3>
            <p className="text-[16px] text-[#505a63] mb-8">
              Explore the full archive of tools, dashboards, and APIs.
            </p>
            <button className="h-[48px] px-[27px] rounded-full border border-[#191c1f] text-[#191c1f] font-semibold text-[16px] tracking-[0.24px] hover:bg-[rgba(25,28,31,0.05)] transition-colors">
              View all 12 projects
            </button>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-[#000000] text-[rgba(255,255,255,0.72)] pt-[80px] pb-[40px] px-6 border-t border-[rgba(255,255,255,0.12)]">
        <div className="max-w-[1200px] mx-auto text-[13px] leading-[1.4]">
          <p>© 2026 Shikhar Gupta. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
