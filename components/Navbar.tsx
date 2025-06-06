"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const darkMode = true;

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
        darkMode
          ? "bg-black/50 backdrop-blur-xs"
          : "bg-black/50 backdrop-blur-xs"
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

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } h-6 w-6 text-white`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } h-6 w-6 text-white`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/70 backdrop-blur px-4 py-4"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium transition-all ${
                    pathname === link.path
                      ? "bg-white/30 text-white"
                      : "text-white hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
