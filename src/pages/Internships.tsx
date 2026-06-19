import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Internships() {
  const internships = [
    {
      title: "1 Month Internship",
      duration: "4 Weeks",
      link: "https://rzp.io/rzp/cEFBakfO",
      description: "Fast-track practical learning with guided project development.",
      focus: "Introduction and mini-project",
      features: [
        "1 Industry Project",
        "Weekly Mentorship Sessions",
        "Technical Evaluation",
        "Internship Certificate"
      ]
    },
    {
      title: "3 Month Internship",
      duration: "12 Weeks",
      link: "https://rzp.io/rzp/wikwVYL",
      description: "Develop strong technical skills through project-based learning and mentorship.",
      focus: "Skill development and major project",
      features: [
        "2 Industry Projects",
        "Bi-Weekly Mentorship",
        "Code Reviews",
        "Resume Building",
        "Internship Certificate"
      ]
    },
    {
      title: "6 Month Internship",
      duration: "24 Weeks",
      link: "https://rzp.io/rzp/nNNbins",
      description: "Comprehensive internship experience focused on advanced projects and career readiness.",
      focus: "Career readiness and portfolio",
      features: [
        "3 Advanced Projects",
        "Dedicated Technical Mentor",
        "Interview Preparation",
        "Portfolio Development",
        "Placement Assistance",
        "Experience Letter"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-slate-200 pb-12">
          <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-blue-800"></span> Career Foundations
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Industry-Focused Internships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Gain hands-on experience, build a robust portfolio, and prepare for modern technology roles.
          </motion.p>
        </div>
      </section>

      {/* Pricing/Options Section */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {internships.map((internship, idx) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border ${idx === 1 ? 'border-blue-900 shadow-md relative' : 'border-slate-200 shadow-sm'} rounded-sm overflow-hidden flex flex-col`}
              >
                {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 pb-6 border-b border-slate-100 flex-grow">
                  <div className="mb-4">
                    <div className="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-2">{internship.duration}</div>
                    <h3 className="text-2xl font-bold text-slate-900">{internship.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 text-sm">{internship.description}</p>
                  
                  <div className="bg-slate-50 p-4 rounded-sm mb-6 border border-slate-100 text-sm">
                    <span className="font-bold text-slate-900">FOCUS:</span> <span className="text-slate-600">{internship.focus}</span>
                  </div>

                  <ul className="space-y-3">
                    {internship.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <span className="text-blue-600 font-bold shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-6">
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-full py-3.5 rounded-sm font-bold text-xs tracking-wide transition-colors ${
                      idx === 1 
                        ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20' 
                        : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    APPLY NOW
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
