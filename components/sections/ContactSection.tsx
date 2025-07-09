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
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Bắt đầu loading

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "f25cd664-5a00-4ae6-be62-455fbaabc415");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false); // Tắt loading sau khi xong
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
            required
            disabled={loading}
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            disabled={loading}
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
            disabled={loading}
            className="bg-transparent border w-full border-white/40 rounded px-4 py-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`bg-white/20 w-fit hover:bg-white hover:text-black transition-all duration-300 px-14 py-4 rounded shadow-md mt-8 flex items-center justify-center gap-2 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
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
