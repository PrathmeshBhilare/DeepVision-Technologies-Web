import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { domainsData } from "../data/domains";

export default function Domains() {

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen relative">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-blue-800"></span> Specializations
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Technology Domains
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            Specialized training disciplines designed around high-demand industry skills. Click on a domain to learn more and apply.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border-t border-slate-200 pt-10">
            {domainsData.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.05 }}
              >
                <Link
                  to={`/domains/${domain.id}`}
                  className="bg-white border border-slate-200 rounded-sm p-8 hover:border-blue-900 shadow-sm transition-all flex flex-col h-full cursor-pointer group"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{domain.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                    {domain.overview}
                  </p>
                  
                  <div className="mb-5 border-t border-slate-100 pt-5">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase rounded-sm tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Sample Projects</h4>
                     <ul className="text-sm text-slate-700 space-y-2 font-medium">
                       {domain.projects.map((project, pIdx) => (
                         <li key={pIdx} className="flex items-center gap-2">
                           <span className="text-blue-600">■</span>
                           {project}
                         </li>
                       ))}
                     </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
