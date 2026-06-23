import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-500 transition-colors">
                DV
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                DeepVision
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Innovate. Automate. Elevate. We empower students, professionals, and businesses through technology and talent development.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/deepvision-technologies/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/domains" className="text-slate-400 hover:text-blue-400 transition-colors">Technology Domains</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact Information</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/internships" className="text-slate-400 hover:text-blue-400 transition-colors">Internship Programs</Link></li>
              <li><Link to="/dcap" className="text-slate-400 hover:text-blue-400 transition-colors">DCAP Program</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Technology Solutions</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Custom Software Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <a href="mailto:com.deepvisiontechnologies@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors leading-relaxed break-all">
                  com.deepvisiontechnologies@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <p>&copy; {new Date().getFullYear()} DeepVision Technologies. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
