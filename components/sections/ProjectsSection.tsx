"use client";
import React from "react";
import { motion } from "motion/react";
import SelectedProject from "@/components/projects/SelectedProject";
import OtherProjects from "@/components/projects/OtherProjects";
import AnimatedCornerBorder from "@/components/AnimatedCornerBorder";
import { projectsData } from "@/constants/project";

export default function ProjectsSection() {
  return (
    <motion.section className="min-h-screen py-28">
      <AnimatedCornerBorder
        visbleBorder={true}
        number="03"
        width="1248px"
        height="672px"
      />

      <motion.div className="flex flex-col justify-center items-start gap-5">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -60, filter: "blur(5px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start gap-3"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Projects
          </h1>
          <p
            className={`text-white/80 text-sm sm:text-base font-medium tracking-wider leading-relaxed`}
          >
            A Collection of My Recent Works.
          </p>
        </motion.div>
        {/* Selected Project */}
        <div className="overflow-hidden lg:overflow-visible">
          <SelectedProject />
        </div>
        {/* Other Projects */}
        <OtherProjects projects={projectsData} />
      </motion.div>
    </motion.section>
  );
}
