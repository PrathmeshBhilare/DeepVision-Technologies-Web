import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Briefcase, GraduationCap, Code2, Cpu, BarChart3, Presentation, 
  Lightbulb, Rocket, Users, Target, ShieldCheck, CheckCircle2, ChevronRight,
  Database, LineChart, Server, Sparkles, Building2, Globe
} from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-900 bg-white">
      <SEO 
        title="DeepVision Technologies | Internship Programs, AI Solutions & Career Development"
        description="DeepVision Technologies provides internship programs, AI solutions, software development, data analytics, career advancement programs, and placement support for students and businesses."
        keywords="internship programs, AI internships, data science internships, machine learning internships, career advancement program, placement support, software development company, DeepVision Technologies"
        canonicalUrl="/"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[120px] mix-blend-screen transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[100px] mix-blend-screen transform -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-blue-400"></span> Innovate. Automate. Elevate.
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[72px] leading-[1.1] font-extrabold tracking-tight mb-8">
                Empowering Innovation Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Technology</span> & Talent Development
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                DeepVision Technologies helps students, professionals, startups, and businesses grow through industry-focused internship programs, technology solutions, AI services, software development, and career advancement initiatives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/internships"
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-sm shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                >
                  Explore Programs <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Hero Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-300"
            >
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Real Industry Projects</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Flexible Internship Programs</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> AI & Technology Solutions</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Placement Support</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Career Development</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-blue-800"></span> Who We Are
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Driving Digital <br/>Transformation.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                <p>
                  DeepVision Technologies is a technology-driven organization dedicated to empowering students, professionals, startups, and businesses through innovative technology solutions, internship programs, career advancement initiatives, and digital transformation services.
                </p>
                <p>
                  We bridge the gap between academic learning and industry requirements through practical exposure, hands-on projects, mentorship, and real-world experience.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm hover:shadow-lg hover:border-blue-100 transition-all group">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mission</h3>
                <p className="text-slate-600">Deliver industry-oriented learning experiences and innovative technology solutions.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm hover:shadow-lg hover:border-blue-100 transition-all group">
                  <Globe className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vision</h3>
                  <p className="text-sm text-slate-600">Become a trusted technology & talent development company empowering future professionals and businesses.</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm hover:shadow-lg hover:border-blue-100 transition-all group">
                  <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
                  <p className="text-sm text-slate-600">Continuously leveraging technology to create meaningful, lasting impact.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Services</h2>
            <p className="text-lg text-slate-600">
              Comprehensive technology solutions and professional development programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 title: "Internship Programs",
                 desc: "Industry-oriented internship opportunities designed to provide practical experience and real-world exposure.",
                 icon: GraduationCap
               },
               {
                 title: "DeepVision DCAP",
                 desc: "Structured 6-month career-focused program with mentorship, projects, professional development, and placement support.",
                 icon: Briefcase
               },
               {
                 title: "Software Development",
                 desc: "Custom web applications, sophisticated business solutions, and scalable digital platforms.",
                 icon: Code2
               },
               {
                 title: "Artificial Intelligence",
                 desc: "AI-powered systems, machine learning models, and intelligent business automation solutions.",
                 icon: Sparkles
               },
               {
                 title: "Data Analytics & BI",
                 desc: "Rich dashboards, reporting systems, and data-driven decision-making solutions.",
                 icon: BarChart3
               },
               {
                 title: "Technology Consulting",
                 desc: "Technology architecture strategy, process improvement, and digital transformation guidance.",
                 icon: Presentation
               }
             ].map((service, idx) => (
               <motion.div 
                  key={service.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-blue-900 transition-all flex flex-col group"
                >
                 <div className="w-12 h-12 bg-blue-50 text-blue-700 font-bold rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                   <service.icon size={24} />
                 </div>
                 <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Internship Programs Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Industry-Focused Internship Programs</h2>
            <p className="text-lg text-slate-600">
              Gain practical experience through structured internship programs designed to build industry-relevant skills and improve employability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "1 Month Internship",
                subtitle: "Beginner Track",
                features: ["Introduction to Industry Projects", "Skill Development", "Internship Certificate"],
                delay: 0
              },
              {
                title: "3 Month Internship",
                subtitle: "Intermediate Track",
                features: ["Practical Learning", "Project Experience", "Professional Mentorship", "Internship Certificate"],
                delay: 0.1,
                highlight: true
              },
              {
                title: "6 Month Internship",
                subtitle: "Advanced Track",
                features: ["Advanced Project Work", "Portfolio Development", "Career Guidance", "Placement Support", "Internship Certificate"],
                delay: 0.2
              }
            ].map(program => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: program.delay }}
                className={`relative flex flex-col bg-white border ${program.highlight ? 'border-blue-900 shadow-xl lg:-translate-y-4' : 'border-slate-200 shadow-sm'} rounded-sm p-8 transition-all hover:shadow-xl`}
              >
                {program.highlight && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-sm font-bold text-blue-800 mb-8 uppercase tracking-widest border-b border-slate-100 pb-8">{program.subtitle}</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 text-blue-600 flex-shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-100 rounded-sm text-blue-900 text-sm font-semibold max-w-2xl text-center">
              <Sparkles size={18} /> All internship programs include hands-on experience working on real-world projects.
            </div>
          </div>
        </div>
      </section>

      {/* DCAP Feature Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center font-bold px-3 py-1 bg-blue-600/20 text-blue-300 text-xs uppercase tracking-widest mb-6 rounded-sm border border-blue-500/30">
                Exclusive Program
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                DeepVision Career <br/>Advancement Program (DCAP)
              </h2>
              <p className="text-xl text-blue-300 font-medium mb-8">Learn. Build. Grow. Get Career Ready.</p>
              
              <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                The DeepVision Career Advancement Program is a structured professional development program designed to help students gain practical experience, build industry-ready skills, develop portfolios, and improve employability.
              </p>

              <Link
                to="/dcap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-500 transition-colors"
              >
                Explore DCAP <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-8"
            >
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                {[
                  "Real Industry Projects",
                  "Professional Mentorship",
                  "Resume Building",
                  "LinkedIn Optimization",
                  "Interview Preparation",
                  "Portfolio Development",
                  "Career Guidance",
                  "Placement Support"
                ].map(benefit => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-blue-400" />
                    </div>
                    <span className="font-semibold text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Students Choose DeepVision</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {[
              { title: "Real-World Projects", icon: Building2 },
              { title: "Industry Exposure", icon: Globe },
              { title: "Professional Mentorship", icon: Users },
              { title: "Placement Support", icon: Target },
              { title: "Flexible Programs", icon: Rocket },
              { title: "Career Development", icon: Presentation }
            ].map((stat, i) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-blue-200 hover:bg-blue-50/50 transition-all"
              >
                <stat.icon size={32} className="text-blue-700 mb-4" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{stat.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise & Stack */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Expertise */}
            <div>
              <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                 <span className="w-8 h-px bg-blue-800"></span> Capabilities
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Technology Expertise</h2>
              
              <div className="space-y-4">
                {[
                  "AI & Machine Learning", "Data Science", "Data Analytics", 
                  "Python Development", "Web Development", "Software Development", 
                  "Business Intelligence", "Automation Solutions"
                ].map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-sm hover:border-blue-900 transition-colors"
                  >
                    <span className="font-semibold text-slate-800">{exp}</span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div>
               <div className="inline-flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-widest mb-6">
                 <span className="w-8 h-px bg-blue-800"></span> Toolkit
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Technology Stack</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                   { category: "Programming", tools: "Python, JavaScript, SQL", icon: Code2 },
                   { category: "Web", tools: "React, Next.js, Node.js", icon: Globe },
                   { category: "Analytics", tools: "Power BI, Tableau, Excel", icon: LineChart },
                   { category: "Databases", tools: "PostgreSQL, MySQL, MongoDB", icon: Database },
                   { category: "Platforms", tools: "Firebase, Supabase, Streamlit", icon: Server },
                ].map((stack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 border border-slate-200 rounded-sm hover:-translate-y-1 transition-transform shadow-sm"
                  >
                    <stack.icon size={20} className="text-blue-700 mb-3" />
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{stack.category}</h4>
                    <p className="font-bold text-slate-900">{stack.tools}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How We Help You Grow</h2>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-0">
            {/* Vertical Line for Mobile */}
            <div className="absolute left-[29px] top-4 border-l-2 border-slate-200 h-[90%] sm:hidden"></div>

            <div className="space-y-12 relative">
              {[
                { title: "Enroll / Connect", step: "01" },
                { title: "Learn & Build Skills", step: "02" },
                { title: "Work on Real Projects", step: "03" },
                { title: "Develop Professional Portfolio", step: "04" },
                { title: "Career Guidance & Mentorship", step: "05" },
                { title: "Placement Support", step: "06" },
              ].map((process, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative"
                >
                  <div className="hidden sm:flex flex-1 justify-end">
                    {i % 2 !== 0 && (
                      <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-sm shadow-sm w-full max-w-sm text-right">
                        <h4 className="font-bold text-slate-900">{process.title}</h4>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-white shadow-sm ring-1 ring-slate-100">
                    {process.step}
                  </div>
                  
                  <div className="flex-1 w-full max-w-sm">
                    {/* For Even items, show on all screens. For Odd items, show on mobile only. */}
                    <div className={`bg-slate-50 border border-slate-200 px-6 py-4 rounded-sm shadow-sm ${i % 2 !== 0 ? 'sm:hidden' : ''}`}>
                      <h4 className="font-bold text-slate-900">{process.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting line for Desktop */}
            <div className="hidden sm:block absolute left-1/2 top-4 -ml-px w-0.5 h-[90%] bg-slate-200 z-0"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us List Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 tracking-tight">Why DeepVision Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Practical Learning Approach", "Industry-Relevant Projects", "Technology Expertise",
              "Flexible Internship Programs", "Professional Mentorship", "Career-Oriented Training",
              "Placement Support", "Affordable Programs", "Innovation-Driven Culture"
            ].map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-semibold text-sm">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Let's Build The Future Together
          </h2>
          <p className="text-blue-200 text-lg mb-4 font-medium uppercase tracking-widest">
            DeepVision Technologies
          </p>
          <p className="text-white font-bold text-xl mb-12">
            Innovate. Automate. Elevate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link 
              to="/internships" 
              className="w-full sm:w-auto px-10 py-4 bg-white text-blue-900 font-bold rounded-sm shadow-xl hover:bg-slate-100 transition-colors tracking-wide"
            >
              Apply for Internship
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-4 bg-blue-800 border border-blue-700 text-white font-bold rounded-sm hover:bg-blue-700 transition-colors tracking-wide"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-center gap-6 text-sm font-semibold text-blue-200">
             <a href="https://deep-vision-technologies-web.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
               deep-vision-technologies-web.vercel.app
             </a>
             <span className="hidden md:inline">•</span>
             <a href="mailto:com.deepvisiontechnologies@gmail.com" className="hover:text-white transition-colors">
               com.deepvisiontechnologies@gmail.com
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
