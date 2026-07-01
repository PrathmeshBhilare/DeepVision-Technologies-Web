import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, ArrowRight, Briefcase, GraduationCap, Users, Sparkles, Trophy } from "lucide-react";
import SEO from "../components/SEO";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#2563eb", "#3b82f6", "#60a5fa", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <SEO 
        title="Payment Successful | DeepVision Technologies"
        description="Thank you for connecting with DeepVision Technologies. Your payment was successful."
        keywords="payment success, deepvision technologies"
        canonicalUrl="/payment-success"
      />
      
      {/* Header Section */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen transform translate-x-1/3 -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative shadow-[0_0_50px_rgba(34,197,94,0.3)]"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s' }}></div>
            <CheckCircle className="w-16 h-16 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Payment Successful!
            </h1>
            <p className="text-2xl text-blue-300 font-bold mb-4">
              Thank you for connecting with DeepVision Technologies.
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Your enrollment is confirmed. We are thrilled to have you on board and can't wait to help you accelerate your tech career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-sm shadow-xl p-8 md:p-12 border border-slate-200"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">What Happens Next?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our team will be reaching out to you shortly with your onboarding details. Here is what you can look forward to:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Sparkles, title: "Real-World Projects", desc: "Gain hands-on experience by building industry-grade applications." },
                { icon: Users, title: "Expert Mentorship", desc: "Get 1-on-1 guidance from experienced industry professionals." },
                { icon: Briefcase, title: "Career Support", desc: "Resume building, interview prep, and placement assistance." },
                { icon: Trophy, title: "Certification", desc: "Receive a verified certificate of completion for your portfolio." }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (idx * 0.1) }}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-sm text-center hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Contact Support</p>
                  <a href="mailto:com.deepvisiontechnologies@gmail.com" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors">
                    com.deepvisiontechnologies@gmail.com
                  </a>
                </div>
              </div>

              <Link 
                to="/" 
                className="px-8 py-4 bg-blue-900 text-white font-bold rounded-sm hover:bg-blue-800 transition-colors flex items-center gap-2"
              >
                Return to Homepage <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
