"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { LogIn } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto h-14 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 pt-2 backdrop-blur-sm">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300" onClick={closeMobileMenu}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <span className="text-white text-xs sm:text-sm md:text-lg font-bold">💰</span>
              </div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                <span className="hidden sm:inline">AI Expense Tracker</span>
                <span className="sm:hidden">ExpenseTracker</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/about"
              className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/contact"
              className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
          </div> */}

          {/* Right Section */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Theme Toggle */}
            <div className="pt-1.5">
              <ThemeToggle />
            </div>

            {/* Authentication - Desktop */}
            <div className="hidden sm:block">
              <SignedOut>
                <SignInButton>
                  <button className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-600 hover:via-blue-600 hover:to-cyan-600 text-white px-2 py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                    <div className="relative z-10 flex items-center gap-1">
                      <span>Sign In</span>
                      <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="mt-2 rounded-lg sm:rounded-xl">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-6 h-6 sm:w-12 sm:h-12 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-3 sm:pb-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50 mt-2 shadow-lg">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
              onClick={closeMobileMenu}
            >
              <span className="text-base">🏠</span>
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
              onClick={closeMobileMenu}
            >
              <span className="text-base">ℹ️</span>
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
              onClick={closeMobileMenu}
            >
              <span className="text-base">📞</span>
              <span>Contact</span>
            </Link>

            {/* Mobile Authentication */}
            <div className="pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
              <SignedOut>
                <SignInButton>
                  <button
                    className="w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-600 hover:via-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    onClick={closeMobileMenu}
                  >
                    <span>Sign In</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex p-3 rounded-xl bg-gradient-to-r from-indigo-100/50 to-blue-100/50 dark:from-indigo-900/20 dark:to-blue-900/20 backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 hover:scale-110 transition-transform duration-200",
                        userButtonBox: "flex items-center justify-center",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
