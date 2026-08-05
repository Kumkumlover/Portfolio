import React from 'react';
import { ArrowRight, BookOpen, ExternalLink, FileText, LayoutGrid, BarChart2, Briefcase, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Solving Scheduled Deliveries in Zepto",
    category: "Market Analysis & PRD",
    desc: "A comprehensive teardown addressing supply chain latency and delivery scheduling optimizations.",
    link: "https://medium.com/@shikharguptah2/how-i-increased-the-adoption-of-scheduled-deliveries-for-zepto-b98af15ae8ed",
  },
  {
    title: "Solving Procrastination for Creative Freelancers",
    category: "0-1 User Research",
    desc: "Primary user research and clickable prototype to address workflow paralysis among creatives.",
    link: "https://medium.com/@shikharguptah2/how-i-solved-procrastination-for-creative-freelancers-5da889ec419b",
  },
  {
    title: "Solving 'What to learn next' for Young Professionals",
    category: "AI Upskilling MVP",
    desc: "An MVP design focused on AI-driven career pathing and personalized upskilling.",
    link: "https://medium.com/@shikharguptah2/how-i-solved-career-upskill-for-young-professionals-3f484529a27a",
  }
];

export default function Concept3() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E2E8F0] font-sans">
      
      {/* Top Proof of Work Strip */}
      <div className="bg-[#1E293B] text-xs font-semibold py-2 px-6 flex justify-between items-center border-b border-[#334155]">
        <div className="flex gap-4 items-center">
          <span className="text-[#94A3B8] uppercase tracking-wider">Proof of Work</span>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><BookOpen size={14} /> Medium Articles</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><FileText size={14} /> PDFs & Teardowns</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><BarChart2 size={14} /> Gemini Reports</a>
        </div>
        <div className="text-cyan-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Actively building @ SuperAGI
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header / Hero */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Shikhar Gupta
          </h1>
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mb-8 leading-relaxed font-light">
            AI Product Manager & Systems Builder. bridging the gap between <strong className="text-white font-medium">user needs</strong> and <strong className="text-white font-medium">LLM architecture</strong>.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              View AI Products <ChevronRight size={18} />
            </button>
            <button className="bg-[#1E293B] text-white px-6 py-3 rounded-lg font-bold border border-[#334155] hover:bg-[#334155] transition-colors flex items-center gap-2">
              <Briefcase size={18} /> Experience
            </button>
          </div>
        </header>

        {/* Structured Case Studies Section (Akshita Maheshwari inspired) */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <LayoutGrid size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Deep Dive Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <a key={i} href={cs.link} target="_blank" rel="noreferrer" className="group block h-full">
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 h-full transition-all group-hover:-translate-y-1 group-hover:border-blue-500/50 group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] flex flex-col">
                  <span className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-wider">{cs.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{cs.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1">{cs.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-auto">
                    Read on Medium <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Data Analysis Vault */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Database size={18} />
            </div>
            <h2 className="text-2xl font-bold text-white">Data Analysis Vault</h2>
          </div>

          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden">
            {[
              { title: "Super Money UPI Growth Teardown", type: "PDF Strategy" },
              { title: "NoBroker Next Big Bet Teardown", type: "PDF Strategy" },
              { title: "World Population Density Analysis", type: "Gemini Analysis" },
              { title: "World Bank Debt Analysis", type: "Gemini Analysis" }
            ].map((item, i) => (
              <div key={i} className={`p-5 flex items-center justify-between hover:bg-[#334155]/50 transition-colors cursor-pointer ${i !== 0 ? 'border-t border-[#334155]' : ''}`}>
                <div className="flex items-center gap-4">
                  <FileText className="text-[#94A3B8]" size={20} />
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-xs text-[#94A3B8] mt-1">{item.type}</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-[#0F1115] text-[#94A3B8] hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
