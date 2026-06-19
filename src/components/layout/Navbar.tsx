import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "Internships", path: "/internships" },
  { name: "DCAP", path: "/dcap" },
  { name: "Domains", path: "/domains" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-100 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-900 rounded-sm flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-800 transition-colors">
              DV
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-900 uppercase">
              DeepVision <span className="text-slate-500 font-light hidden sm:inline">Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-blue-900 ${
                  location.pathname === link.path
                    ? "text-blue-900 font-bold border-b-2 border-blue-900 pb-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition-all rounded-sm flex items-center gap-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-blue-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 border-b border-slate-50 ${
                    location.pathname === link.path ? "text-blue-900 font-bold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-base font-bold py-2 text-blue-900 flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
