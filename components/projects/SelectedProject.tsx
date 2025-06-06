"use client";
import React, { useEffect, useRef } from "react";
// import Image from "next/image";
import { useAppSelector } from "@/store/hooks/hooks";
import { motion, useAnimation } from "framer-motion";

export default function SelectedProject() {
  const selectedProject = useAppSelector(
    (state) => state.project.selectedProject
  );

  const isFirstRender = useRef(true);
  const controls = useAnimation();

  useEffect(() => {
    if (selectedProject) {
      isFirstRender.current = false;
      controls.start({
        opacity: [0.2, 1], // từ 0 đến 1
        x: [80, 0],
      });
    }
  }, [selectedProject, controls]);

  if (!selectedProject) {
    return (
      <div className="text-white text-lg font-semibold text-center mt-10">
        Nothing There!!!
      </div>
    );
  }

  return (
    <motion.div
      initial={
        isFirstRender.current ? { opacity: 0, y: 40 } : { opacity: 0.2, x: 80 }
      }
      animate={isFirstRender.current ? { opacity: 1, y: 0 } : controls}
      transition={
        isFirstRender.current
          ? { duration: 0.8, delay: 0.4 }
          : { duration: 0.7 }
      }
      className="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 lg:gap-8 xl:gap-12 z-40"
    >
      {/* Image Block */}
      <div className="lg:col-span-5 xl:col-span-4">
        <video
          src={selectedProject.video}
          // poster={selectedProject.image}
          className="w-full h-auto max-h-[280px] sm:min-h-[320px] object-cover border-zinc-700 rounded-2xl border-2"
          preload="metadata"
          muted
          autoPlay
          playsInline
          loop
        />
      </div>

      {/* Info Block */}
      <div className="lg:col-span-7 xl:col-span-8 z-50">
        <div className="flex flex-col items-start justify-evenly h-full gap-3 sm:gap-4">
          <div>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold line-clamp-1">
              {selectedProject.title}
            </h2>
            <p className="text-white/60 text-sm sm:text-base tracking-wider leading-relaxed">
              {selectedProject.category}
            </p>
          </div>
          <p className="text-white/60 text-sm sm:text-base tracking-wider leading-relaxed">
            {selectedProject.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full sm:w-max mt-4">
            <a
              href={selectedProject.demoLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                className="px-4 sm:px-6 py-2 sm:py-3 border border-white/80 font-medium text-sm sm:text-base text-white tracking-wider rounded-xl w-full hover:bg-white/10 hover:border-white"
                whileHover={{ scale: 1.05 }}
              >
                Visit Page
              </motion.button>
            </a>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                className="px-4 sm:px-6 py-2 sm:py-3 border border-white/80 font-medium text-sm sm:text-base text-black bg-white tracking-wider rounded-xl w-full hover:bg-white/90"
                whileHover={{ scale: 1.05 }}
              >
                Github
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
