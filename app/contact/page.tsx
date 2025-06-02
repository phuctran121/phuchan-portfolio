"use client";
import React from "react";
import { motion, MotionConfig } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import AnimatedCornerBorder from "@/components/AnimatedCornerBorder";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-24 md:py-12 ">
      <AnimatedCornerBorder number="04" width="1248px" height="672px" />

      <div className="flex items-center justify-center flex-col gap-10 mt-4">
        <MotionConfig transition={{ duration: 1, delay: 0.2 }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="flex flex-col justify-center items-center gap-4"
          >
            <h1 className="text-white text-5xl md:text-6xl font-bold uppercase">
              Contact
            </h1>
            <p className="text-white text-xs md:text-base font-medium tracking-widest leading-relaxed max-w-none sm:max-w-prose">
              Reach Out And Collaborate With Me
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: -30, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="flex flex-wrap gap-12 text-xl"
          >
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
          </motion.div>
        </MotionConfig>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center flex-col gap-6 w-full md:min-w-md "
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <textarea
            rows={6}
            placeholder="Enter your message"
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white/20 w-fit hover:bg-white hover:text-black transition-all duration-300 px-14 py-4 rounded shadow-md mt-8"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
