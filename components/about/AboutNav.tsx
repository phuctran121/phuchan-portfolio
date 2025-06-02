import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function AboutNav() {
  const navLinks = [
    { title: "Introduction", path: "#introduction" },
    { title: "Skills", path: "#skills" },
    { title: "Education", path: "#education" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, filter: "blur(5px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="md:sticky md:mb-0 mb-8 top-28 self-start col-span-2 md:col-span-1 "
    >
      <div className="flex flex-col justify-between gap-6 md:min-h-[72vh]">
        <div>
          {/* Title */}
          <h1 className="text-white text-5xl md:text-6xl font-bold uppercase">
            About Me
          </h1>
          <p className="text-white text-xs md:text-base font-medium tracking-widest leading-relaxed max-w-none sm:max-w-prose pt-3">
            My Profile At A Frame.{" "}
          </p>
          {/* Nav section */}
          <ul className="mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-white/30"></div>
                  <Link
                    href={link.path}
                    className="transform text-xs md:text-base text-white/50 hover:text-white transition-all duration-300 ease-in-out p-1 tracking-widest"
                  >
                    {link.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Social icons */}
        <div className="flex flex-wrap gap-12 text-xl text-white/70">
          <a href="#" className="hover:text-gray-300">
            <FaGoogle />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
