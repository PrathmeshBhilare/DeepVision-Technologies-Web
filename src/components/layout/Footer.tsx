import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-16 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-8 max-w-7xl mx-auto w-full">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:inline-block">Active Domains</span>
        <div className="hidden md:flex gap-6 overflow-hidden">
          <span className="text-xs font-semibold text-slate-600">Data Analytics</span>
          <span className="text-xs font-semibold text-slate-600">Machine Learning</span>
          <span className="text-xs font-semibold text-slate-600">Generative AI</span>
          <span className="text-xs font-semibold text-slate-600">Full Stack</span>
          <span className="text-xs font-semibold text-slate-600">Power BI</span>
        </div>
        <div className="text-[10px] text-slate-500 font-medium tracking-tight ml-auto text-center w-full md:w-auto">
          &copy; {new Date().getFullYear()} DEEPVISION TECHNOLOGIES. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
