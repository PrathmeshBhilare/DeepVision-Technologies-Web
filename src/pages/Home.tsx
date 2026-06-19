import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-900 bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                  <span className="w-8 h-px bg-blue-800"></span> Workforce Development 2.0
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-extrabold text-slate-900 tracking-tight mb-6">
                  Build <span className="text-blue-900">Industry-Ready</span> Skills Through Real-World Experience.
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Develop practical expertise, work on high-impact projects, receive expert mentorship, and accelerate your technical career trajectory with DeepVision.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/internships"
                    className="px-8 py-4 bg-blue-900 text-white font-bold rounded-sm shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    Explore Programs
                  </Link>
                  <Link
                    to="/domains"
                    className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-colors rounded-sm flex items-center justify-center"
                  >
                    View Domains
                  </Link>
                </div>
              </motion.div>

              {/* Statistics Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-100">
                {[
                  { label: "Students Trained", value: "5,000+" },
                  { label: "Live Projects", value: "120+" },
                  { label: "Specialized Domains", value: "15+" },
                  { label: "Career Support", value: "94%" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program Preview Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
              {/* DCAP Card (Primary) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 border border-slate-200 p-8 rounded-lg shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg">
                  EXCLUSIVE FOR NCS
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Career Accelerator (DCAP)</h3>
                <p className="text-sm text-slate-600 mb-6">A structured 6-month intensive professional development path designed for high-potential candidates.</p>
                <ul className="space-y-2 mb-6">
                  {["Technical Mentorship", "Mock Interviews & Placement", "Resume & LinkedIn Optimization"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="text-blue-600 font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/dcap" className="block text-center w-full py-3 bg-blue-900 text-white text-xs font-bold rounded-sm tracking-wide hover:bg-blue-800 transition-colors">
                  APPLY FOR DCAP
                </Link>
              </motion.div>

              {/* Internship Card (Secondary) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:border-blue-900 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">Internship Programs</h3>
                </div>
                <p className="text-sm text-slate-600 mb-6">Gain hands-on experience through project-based learning with industry experts.</p>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-auto">
                  <span>Certificates</span>
                  <span>•</span>
                  <span>Live Mentoring</span>
                  <span>•</span>
                  <span>Portfolio</span>
                </div>
                <div className="mt-6">
                   <Link to="/internships" className="block text-center w-full py-3 bg-transparent border border-slate-200 text-slate-800 text-xs font-bold rounded-sm tracking-wide group-hover:bg-slate-50 transition-colors">
                    EXPLORE INTERNSHIPS
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-blue-800"></span> About DeepVision
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Bridging the Gap Between Academia and Industry.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  DeepVision Technologies is a premier technology workforce development company committed to empowering tech talent. We specialize in transforming students, graduates, and early-career professionals into highly sought-after industry experts.
                </p>
                <p>
                  Through an ecosystem of immersive learning, state-of-the-art live projects, and dedicated mentorship, we ensure our candidates are equipped with the practical skills required by today's leading technology organizations.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="text-blue-900 font-bold text-sm tracking-wide uppercase flex items-center gap-2 group hover:text-blue-800 transition-colors">
                  Learn more about our mission <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-sm translate-y-8">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" alt="Mentorship" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Choose DeepVision</h2>
            <p className="text-lg text-slate-600">
              We focus on building actual capability, not just handing out certificates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
             {[
               "Real Industry Projects",
               "Project-Based Learning",
               "Expert Mentorship",
               "Portfolio Development",
               "Career Support",
               "Interview Preparation",
               "Professional Certifications",
               "Placement Assistance"
             ].map((feature, idx) => (
               <div key={feature} className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm flex items-start gap-4">
                 <span className="text-blue-600 font-bold mt-0.5">✓</span>
                 <span className="font-bold text-sm tracking-wide text-slate-800">{feature}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
