import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { domainsData } from "../data/domains";
import { Check } from "lucide-react";

export default function DomainDetails() {
  const { id } = useParams();
  const domain = domainsData.find(d => d.id === id);

  if (!domain) {
    return <Navigate to="/domains" replace />;
  }

  const durationOptions = [
    {
      title: "1 Month Track",
      duration: "4 Weeks",
      focus: "Introduction & Mini-Project",
      link: "https://rzp.io/rzp/cEFBakfO",
      features: [
        "Core concepts training",
        "Hands-on mini project",
        "Industry mentorship",
        "Completion certificate"
      ]
    },
    {
      title: "3 Months Track",
      duration: "12 Weeks",
      focus: "Skill Development & Major Project",
      link: "https://rzp.io/rzp/wikwVYL",
      popular: true,
      features: [
        "Advanced technical training",
        "End-to-end major project",
        "Resume building & review",
        "Letter of Recommendation"
      ]
    },
    {
      title: "6 Months Track",
      duration: "24 Weeks",
      focus: "Enterprise Readiness & Capstone",
      link: "https://rzp.io/rzp/nNNbins",
      features: [
        "Enterprise workflows training",
        "Multiple capstone projects",
        "Mock technical interviews",
        "Placement assistance"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Domain Hero */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-blue-800"></span> Internship Application
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {domain.title} Track
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {domain.overview}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {domain.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase rounded-sm tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Duration Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Select Your Duration</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Choose the internship track that best aligns with your experiential learning goals and professional timeline.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {durationOptions.map((option, idx) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col bg-white border rounded-sm p-8 transition-all hover:shadow-lg ${
                  option.popular ? 'border-blue-900 shadow-md transform lg:-translate-y-4' : 'border-slate-200'
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{option.title}</h3>
                <p className="text-sm font-bold text-blue-800 mb-6 uppercase tracking-widest">{option.duration}</p>
                
                <div className="text-sm text-slate-600 mb-8 border-b border-slate-100 pb-8">
                  Focus: {option.focus}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 text-blue-600 flex-shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 flex justify-center items-center rounded-sm font-bold text-xs uppercase tracking-widest text-center transition-colors ${
                    option.popular 
                      ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20' 
                      : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  Proceed to Payment
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
