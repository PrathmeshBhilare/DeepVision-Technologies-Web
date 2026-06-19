import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-blue-800"></span> Reach Out
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Contact DeepVision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            Reach out to our team for program inquiries, partnership opportunities, or general questions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Email Card */}
            <div className="bg-white border border-slate-200 p-10 lg:p-14 rounded-sm shadow-sm hover:border-blue-900 transition-colors flex flex-col justify-center">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Email Us</h3>
              <a href="mailto:com.deepvisiontechnologies@gmail.com" className="text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-900 transition-colors break-all">
                com.deepvisiontechnologies@gmail.com
              </a>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Our admissions and support team typically responds within 24 hours. Feel free to reach out regarding our internship programs, DCAP cohort schedules, or general inquiries.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="bg-white border border-slate-200 p-10 lg:p-14 rounded-sm shadow-sm hover:border-blue-900 transition-colors flex flex-col justify-center items-start">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Social Media</h3>
              <p className="text-xl lg:text-2xl font-bold text-slate-900 leading-relaxed max-w-sm mb-6">
                Connect with our professional network
              </p>
              <a 
                href="https://www.linkedin.com/company/deepvision-technologies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-8 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-blue-800 transition-colors"
              >
                Visit LinkedIn
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
