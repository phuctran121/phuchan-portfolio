"use client";
import React from "react";
import { motion } from "motion/react";
import AboutNav from "@/components/about/AboutNav";
import SkillsSection from "@/components/about/SkillsSection";
import EducationSection from "@/components/about/EducationSection";
import IntroductionSection from "@/components/about/IntroductionSection";
import AnimatedCornerBorder from "@/components/AnimatedCornerBorder";
import {
  skillsData,
  educationData,
  introductionData,
} from "@/constants/information";

export default function AboutSection() {
  const steps = ["Introduction", "Skills", "Education"];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 py-28">
      <AnimatedCornerBorder
        visbleBorder={true}
        number="02"
        width="1248px"
        height="672px"
      />

      {/* LEFT SIDE (Sticky Navigation) */}
      <AboutNav />
      {/* RIGHT SIDE (Content) */}
      <div className="min-h-screen text-white flex col-span-2 pt-2 z-50">
        <motion.div
          className=" bg-transparent flex flex-col items-start w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {steps.map((step, index) => (
            <div
              id={step.toLowerCase()}
              key={index}
              className={`flex flex-col mb-8 scroll-mt-30 ${
                index !== 0 ? "mt-6" : ""
              }`}
            >
              {/* ----------------------------------------- */}
              {/* Điểm tròn và tên step nằm ngang */}
              <div className="flex items-center gap-3">
                <motion.div
                  className={`w-4 h-4 rounded-full bg-white`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-2xl tracking-wider font-medium text-white">
                  {step}
                </span>
              </div>
              {/* ----------------------------------------- */}
              {/* Đường thẳng nối các bước (trừ bước cuối) */}
              <div className="flex items-start mt-5">
                {/* Đường thẳng nối các bước*/}
                <div className="h-full w-[1px] bg-white/40 ml-2 "></div>
                {/* Phần Content bên phải) */}
                <div className="ml-2 md:ml-5">
                  {step === "Introduction" && (
                    <IntroductionSection introductionData={introductionData} />
                  )}
                  {step === "Skills" && (
                    <SkillsSection skillsData={skillsData} />
                  )}
                  {step === "Education" && (
                    <EducationSection educationData={educationData} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
