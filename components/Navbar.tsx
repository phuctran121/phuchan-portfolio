"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ scale: 0.9, filter: "blur(2px)" }}
      animate={{ scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className={`fixed w-full top-0 z-999 shadow-md ${
        darkMode ? "bg-black/50 backdrop-blur-xs" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Phuchan
            </span>
            <span
              className={`font-light text-xl  ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Portfolio
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex space-x-8 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative group"
                >
                  <span
                    className={`text-base transition-colors duration-300 ${
                      isActive
                        ? darkMode
                          ? "text-white font-semibold"
                          : "text-blue-600 font-semibold"
                        : darkMode
                        ? "text-white/70 group-hover:text-white"
                        : "text-gray-600 group-hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: "115%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center">
            {/* Dark mode toggle */}
            <button
              // onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              } mr-2`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path
                  ? `${
                      darkMode
                        ? "bg-gray-900 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`
                  : `${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    } hover:${darkMode ? "text-white" : "text-gray-900"}`
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
