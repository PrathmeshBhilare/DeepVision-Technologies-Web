import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Users2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Bridging the Gap
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Between academic education and industry expectations.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
               <h2 className="text-3xl font-bold text-navy mb-6">About DeepVision Technologies</h2>
               <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                 <p>
                   DeepVision Technologies is committed to bridging the gap between academic education and industry expectations by providing practical learning experiences, real-world projects, and career-focused development programs.
                 </p>
                 <p>
                   We observed a critical misalignment: talented graduates possessing strong theoretical knowledge, yet lacking the practical, project-based experience required by modern enterprises.
                 </p>
                 <p>
                   Our solution is an ecosystem of immersive learning, where candidates don't just study concepts—they build, deploy, and refine them under professional mentorship.
                 </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg translate-y-8">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Mentorship" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Banner */}
        <div className="bg-gray-50 border-y border-gray-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">Our Mission</h2>
            <p className="text-2xl text-gray-700 italic font-medium leading-relaxed">
              "To empower the next generation of technology professionals with the skills, experience, and confidence needed to succeed in the modern workforce."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-navy">Our Core Principles</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 text-navy mx-auto rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Outcome-Oriented</h3>
                <p className="text-gray-600">We prioritize tangible results, deployed projects, and measurable skill acquisition over passive learning.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 text-navy mx-auto rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Application</h3>
                <p className="text-gray-600">Theory is vital, but implementation is essential. Everything we teach is directly applied to a real scenario.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 text-navy mx-auto rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship-Driven</h3>
                <p className="text-gray-600">Growth accelerates when guided by those who have already navigated the path you're embarking on.</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your career?</h2>
          <p className="text-lg text-gray-300 mb-10">Join our cohort of aspiring technical professionals.</p>
          <Link to="/contact" className="px-8 py-4 bg-white text-navy font-bold rounded hover:bg-gray-100 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
