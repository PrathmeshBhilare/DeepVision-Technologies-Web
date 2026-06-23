import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Globe, Linkedin, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Us | DeepVision Technologies"
        description="Get in touch with DeepVision Technologies for inquiries regarding internship programs, software development, AI solutions, and strategic partnerships."
        keywords="contact DeepVision, tech consulting contact, internship inquiry, partner with DeepVision"
        canonicalUrl="/contact"
      />
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen transform translate-x-1/3 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Let's Build The Future Together
            </h1>
            <p className="text-xl text-blue-300 font-bold tracking-widest uppercase mb-4">
              DeepVision Technologies
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Innovate. Automate. Elevate. Reach out to our team for program inquiries, strategic partnerships, or general questions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/internships" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-sm shadow-xl hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
              >
                Apply for Internship <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 p-10 rounded-sm shadow-xl hover:shadow-2xl hover:border-blue-900 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email Us</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                Our support team typically responds within 24 hours. Feel free to reach out regarding our programs.
              </p>
              <a href="mailto:com.deepvisiontechnologies@gmail.com" className="text-blue-900 font-bold hover:text-blue-700 transition-colors break-all text-sm">
                com.deepvisiontechnologies@gmail.com
              </a>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-200 p-10 rounded-sm shadow-xl hover:shadow-2xl hover:border-blue-900 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Linkedin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">LinkedIn</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                Connect with our professional network, discover opportunities, and view our latest updates.
              </p>
              <a 
                href="https://www.linkedin.com/company/deepvision-technologies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border border-blue-900 text-blue-900 font-bold rounded-sm hover:bg-blue-900 hover:text-white transition-colors"
              >
                Visit Profile
              </a>
            </motion.div>

            {/* Website Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-slate-200 p-10 rounded-sm shadow-xl hover:shadow-2xl hover:border-blue-900 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Platform</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                Explore our full range of technology solutions, talent development programs, and business services.
              </p>
              <a 
                href="https://deep-vision-technologies-web.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 font-bold hover:text-blue-700 transition-colors break-all text-sm"
              >
                deep-vision-technologies-web.vercel.app
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
