"use client";
import React, { useState, useRef } from "react";
import { motion, MotionConfig } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import AnimatedCornerBorder from "@/components/AnimatedCornerBorder";

const socialIcons = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/phuctran121",
  },
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/phuctran121",
  },
  {
    icon: <FaGoogle />,
    name: "Google",
    link: "/",
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/phuctran12104/",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/hpta_1214/",
  },
];

export default function ContactSection() {
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("access_key", "f25cd664-5a00-4ae6-be62-455fbaabc415");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Your message has been sent successfully!");
      form.reset();
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

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
            {socialIcons.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </MotionConfig>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center flex-col gap-6 w-full md:min-w-md "
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <textarea
            name="message"
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

          {successMessage && (
            <p className="text-green-400 w-full text-center text-sm mt-4 absolute bottom-16 left-1/2 transform -translate-x-1/2">
              {successMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
