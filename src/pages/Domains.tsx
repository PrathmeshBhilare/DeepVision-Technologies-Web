import { motion } from "motion/react";

export default function Domains() {
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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
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
            Specialized training disciplines designed around high-demand industry skills.
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
                className="bg-white border border-slate-200 rounded-sm p-8 hover:border-blue-900 shadow-sm transition-all flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{domain.title}</h3>
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
    </div>
  );
}
