import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function Projects() {
  const projects = [
    {
      title: "Customer Analytics Dashboard",
      stack: "Power BI, SQL, Python",
      description: "A comprehensive visualization suite analyzing customer behavior, acquisition channels, and lifetime value.",
      impact: "Designed to identify high-value customer segments and optimize marketing spend."
    },
    {
      title: "Sales Intelligence Dashboard",
      stack: "Tableau, SQL Server",
      description: "Interactive reporting tool tracking regional sales performance, product category trends, and quota attainment.",
      impact: "Enables data-driven sales forecasting and identifies underperforming territories."
    },
    {
      title: "AI Resume Analyzer",
      stack: "Python, NLP, React",
      description: "An automated tool that parses resumes against job descriptions, calculating suitability scores using natural language processing.",
      impact: "Streamlines the initial screening process for HR teams."
    },
    {
      title: "Business Intelligence Dashboard",
      stack: "Power BI, Data Factory",
      description: "Centralized KPI monitor tracking cross-departmental metrics including operational efficiency and financial health.",
      impact: "Provides executive leadership with a unified view of organizational performance."
    },
    {
      title: "Customer Churn Prediction",
      stack: "Machine Learning, Scikit-Learn",
      description: "Predictive model anticipating subscriber cancellation probability based on usage patterns and interaction history.",
      impact: "Allows proactive retention strategies and targeted interventions."
    },
    {
      title: "Full Stack Job Portal",
      stack: "React, Node.js, Express, MongoDB",
      description: "End-to-end recruitment platform with candidate profiles, employer dashboards, and application tracking.",
      impact: "Demonstrates complete system architecture and state management capabilities."
    },
    {
      title: "AI Customer Support Assistant",
      stack: "OpenAI API, LangChain, Next.js",
      description: "Intelligent chatbot integrated with corporate knowledge bases to resolve L1 support queries autonomously.",
      impact: "Reduces ticket load and improves weekend/after-hours response times."
    },
    {
      title: "E-Commerce Analytics Platform",
      stack: "Python, Pandas, React",
      description: "Analytical engine processing transaction data to recommend product bundles and optimize pricing strategy.",
      impact: "Increases average order value through data-backed recommendations."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Student & Company Projects | DeepVision Technologies"
        description="Explore the projects built by our interns and developers, ranging from data engineering pipelines to full-stack applications and AI models."
        keywords="student projects, software development projects, technical portfolio, AI model projects"
        canonicalUrl="/projects" // <-- Adding this line too!
      />
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-blue-800"></span> Showcases
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Project Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            A sample of the enterprise-grade deliverables developed by our program participants.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 border-t border-slate-200 pt-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm hover:border-blue-900 transition-all flex flex-col"
              >
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                    {project.stack}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto bg-slate-50 p-6 border-l-4 border-blue-900">
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-900 mb-2">Business Impact</h4>
                   <p className="text-sm font-medium text-slate-700">"{project.impact}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
