"use client";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import AnimatedCornerBorder from "@/components/AnimatedCornerBorder";
import { introductionData } from "@/constants/information";

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

export default function HomeSection() {
  return (
    <section className="flex justify-center items-center min-h-screen pt-10">
      <AnimatedCornerBorder number="01" width="1248px" height="672px" />

      {/* Background */}
      <div className="flex justify-center items-centerborder-2 w-full">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-12 max-w-4xl py-24">
          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(1px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-3 flex flex-col items-center justify-center md:items-start md:justify-start"
          >
            <h1
              data-cursor-hover
              className="text-white text-5xl md:text-7xl font-bold uppercase"
            >
              Phuc Tran.
            </h1>
            <h2 className="text-white text-center text-2xl md:text-5xl font-semibold tracking-wide">
              {introductionData.roles[0]}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(2px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center md:items-start md:justify-start flex-col gap-12 max-w-4xl "
          >
            <p className="text-white/70 md:text-base text-sm leading-relaxed max-w-none sm:max-w-[700px] md:text-left text-center">
              {introductionData.bio}
            </p>

            {/* Button download CV */}
            <button className="border border-white px-8 py-3 text-white w-fit hover:bg-white hover:text-black transition duration-400 cursor-pointer">
              View full Resume
            </button>

            {/* Icon List */}
            <div className="flex flex-wrap gap-8 md:gap-12 text-white text-xl">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
