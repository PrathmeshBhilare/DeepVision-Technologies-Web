import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function CareerAccelerator() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="pt-20 pb-20 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-1 bg-blue-600 text-white font-bold text-[10px] tracking-widest uppercase mb-6 rounded-sm"
            >
              Exclusive for NCS Candidates
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.05]"
            >
              DeepVision Career Accelerator Program (DCAP)
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl"
            >
              A 6-month elite professional development lifecycle designed to transition candidates from foundational knowledge to deployable enterprise readiness.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
               <a
                  href="https://rzp.io/rzp/5i9MOzOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-900 text-white font-bold rounded-sm shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors inline-block tracking-wide"
                >
                  APPLY FOR COHORT
               </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
             <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-blue-800"></span> Methodology
             </div>
             <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Program Architecture</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { title: "Industry-Oriented Training", desc: "Structured learning tailored to current market demands and corporate technology stacks." },
               { title: "Hands-On Projects", desc: "Development of production-grade applications mimicking real business scenarios." },
               { title: "Portfolio Development", desc: "Creation of a verifiable repository of work to demonstrate capability to employers." },
               { title: "Technical Mentorship", desc: "Direct guidance from experienced professionals to navigate complex technical challenges." },
               { title: "Career Readiness", desc: "Comprehensive optimization of professional profiles, including LinkedIn and resumes." },
               { title: "Mock Interviews", desc: "Simulated technical and HR interview rounds with comprehensive feedback." },
             ].map((highlight, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm group hover:border-blue-900 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold mt-1">■</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{highlight.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{highlight.desc}</p>
                    </div>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                  <span className="w-8 h-px bg-blue-800"></span> Goals
               </div>
               <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">Expected Outcomes</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-2 border-blue-900 pl-4">
                 Participants graduate with practical experience, completed projects, improved employability, and the confidence to pursue technology careers.
               </p>
               <ul className="space-y-4">
                 {[
                   "Demonstrable proficiency in chosen technology stack.",
                   "A comprehensive, deployed portfolio of minimum 3 major projects.",
                   "An optimized professional brand (Resume, GitHub, LinkedIn).",
                   "Clear understanding of Agile development and enterprise workflows.",
                   "Readiness to clear technical screenings and technical interview rounds."
                 ].map((outcome, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <span className="text-blue-600 font-bold">✓</span>
                     <span className="text-slate-800 font-medium">{outcome}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="relative border border-slate-200 bg-white p-2 rounded-sm shadow-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 flex items-center justify-center">
                  <img src="https://i.postimg.cc/L8YZBHmw/Chat-GPT-Image-Jun-19-2026-03-11-54-PM.png" alt="Career Accelerator Outcomes" className="w-full h-full object-cover" />
                </div>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
}
