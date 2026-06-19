import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState<any>(null);
  const [selectedDuration, setSelectedDuration] = useState<"1 Month" | "3 Months" | "6 Months">("3 Months");

  const durationLinks = {
    "1 Month": "https://rzp.io/rzp/cEFBakfO",
    "3 Months": "https://rzp.io/rzp/wikwVYL",
    "6 Months": "https://rzp.io/rzp/nNNbins"
  };

  const domains = [
    {
      title: "Data Analytics",
      overview: "Extract actionable insights from raw data to drive business decision-making.",
      skills: ["Excel", "Python", "Tableau", "Statistical Analysis"],
      projects: ["Sales Dashboard", "Marketing Campaign Analysis"]
    },
    {
      title: "Data Science",
      overview: "Apply advanced analytical techniques and scientific principles to extract valuable information.",
      skills: ["Python", "Pandas", "Scikit-Learn", "A/B Testing"],
      projects: ["Customer Segmentation", "Predictive Modeling"]
    },
    {
      title: "Machine Learning",
      overview: "Develop algorithms and statistical models that enable systems to learn and adapt without explicit instructions.",
      skills: ["TensorFlow", "PyTorch", "NLP", "Deep Learning"],
      projects: ["Image Classification", "Sentiment Analysis Model"]
    },
    {
      title: "Generative AI",
      overview: "Build modern applications leveraging Large Language Models and Generative AI technologies.",
      skills: ["Prompt Engineering", "LangChain", "OpenAI API", "HuggingFace"],
      projects: ["AI Content Generator", "Smart Document Q&A"]
    },
    {
      title: "Data Engineering",
      overview: "Design and build systems for collecting, storing, and analyzing data at scale.",
      skills: ["SQL", "ETL", "Apache Spark", "Cloud Data Warehouses"],
      projects: ["Data Pipeline Automation", "Data Lake Architecture"]
    },
    {
      title: "SQL Development",
      overview: "Master relational database management, complex querying, and database optimization.",
      skills: ["PostgreSQL", "MySQL", "T-SQL", "Stored Procedures"],
      projects: ["Inventory DB Design", "Query Optimization Suite"]
    },
    {
      title: "Power BI Development",
      overview: "Create interactive visualizations and business intelligence reports.",
      skills: ["DAX", "Power Query", "Data Modeling", "Dashboarding"],
      projects: ["Financial KPI Dashboard", "HR Analytics Report"]
    },
    {
      title: "Full Stack Development",
      overview: "Engineer robust end-to-end web applications with modern frontend and backend frameworks.",
      skills: ["React", "Node.js", "TypeScript", "REST APIs"],
      projects: ["E-Commerce Platform", "Real-time Collaboration Tool"]
    }
  ];

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
            Specialized training disciplines designed around high-demand industry skills. Click on a domain to apply for an internship track.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border-t border-slate-200 pt-10">
            {domains.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.05 }}
                onClick={() => setSelectedDomain(domain)}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDomain(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-800 mb-1">Internship Application</div>
                  <h2 className="text-xl font-extrabold text-slate-900">{selectedDomain.title} Track</h2>
                </div>
                <button 
                  onClick={() => setSelectedDomain(null)}
                  className="p-2 text-slate-400 hover:text-slate-900 bg-white rounded-sm border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-wide">Select Internship Duration</h3>
                
                <div className="space-y-3">
                  {(["1 Month", "3 Months", "6 Months"] as const).map((duration) => (
                    <label 
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-all ${
                        selectedDuration === duration 
                          ? "border-blue-900 bg-blue-50/50" 
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedDuration === duration ? "border-blue-900" : "border-slate-300"
                        }`}>
                          {selectedDuration === duration && (
                            <div className="w-2 h-2 rounded-full bg-blue-900" />
                          )}
                        </div>
                        <span className={`font-bold text-sm ${
                          selectedDuration === duration ? "text-blue-900" : "text-slate-700"
                        }`}>
                          {duration} Track
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <a
                  href={durationLinks[selectedDuration]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-4 bg-blue-900 text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
                >
                  Proceed to Application
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
