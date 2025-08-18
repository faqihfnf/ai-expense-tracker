import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 border-t border-gray-100/50 dark:border-gray-700/50">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center flex flex-col items-center md:items-start md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">💰</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">AI Expense Tracker</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 items-center md:items-start flex leading-relaxed max-w-sm">
              Intelligent financial management powered by AI. Track your expenses, manage your budget, and gain insights into your spending patterns.
            </p>
          </div>

          {/* Navigation Links */}
          {/* <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="group items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="group  items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About
              </Link>
              <Link
                href="/contact"
                className="group items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                <span className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link>
            </div>
          </div> */}

          {/* Features */}
          <div className="text-center md:text-left md:ml-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Features</h3>
            <div className="space-y-3 items-center md:items-start flex flex-col">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">🤖</span>
                </div>
                AI-Powered Insights
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">✨</span>
                </div>
                Intelligent Summary
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">📊</span>
                </div>
                Analytic Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-4"></div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="text-md  text-center sm:text-left">
              Created with ❤️ <span className="bg-gradient-to-br from-cyan-500 to-indigo-500 bg-clip-text text-md font-extrabold text-transparent">Faqih Nur Fahmi</span>
            </p>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date().getFullYear()} © All Rights Reserved.</p>
          </div>

          <div className="flex justify-center sm:justify-end gap-4">
            <Link
              href="https://github.com/faqihfnf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-indigo-400 dark:border-slate-700 hover:bg-indigo-600 hover:text-white text-indigo-600 hover:border-indigo-600"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/faqih-nur-fahmi-b51bb1ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-indigo-400 dark:border-slate-700 hover:bg-indigo-600 hover:text-white text-indigo-600 hover:border-indigo-600"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/faqihnurfahmi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-indigo-400 dark:border-slate-700 hover:bg-indigo-600 hover:text-white text-indigo-600 hover:border-indigo-600"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com/@marifahid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-indigo-400 dark:border-slate-700 hover:bg-indigo-600 hover:text-white text-indigo-600 hover:border-indigo-600"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/faqih.fnf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-indigo-400 dark:border-slate-700 hover:bg-indigo-600 hover:text-white text-indigo-600 hover:border-indigo-600"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
