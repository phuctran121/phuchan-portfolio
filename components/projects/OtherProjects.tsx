"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
// import Image from "next/image";
import { setSelectedProject } from "@/store/slices/projectSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { Project } from "@/types/project.types";

export default function OtherProjects({ projects }: { projects: Project[] }) {
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState("All");
  const selectedProject = useAppSelector(
    (state) => state.project.selectedProject
  );

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  useEffect(() => {
    // Nếu project được chọn thay đổi, chạy lại video
    if (selectedProject?.id) {
      const video = videoRefs.current[selectedProject.id];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {}); // tránh lỗi nếu chưa được phép tự động phát
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    if (
      !filteredProjects.some((project) => project.id === selectedProject?.id)
    ) {
      dispatch(setSelectedProject(filteredProjects[0]));
    }
  }, [filteredProjects, dispatch, selectedProject]);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 mt-10 sm:mt-16 w-full z-50">
        <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider ">
          Other Projects
        </h3>
        <span className="hidden sm:block h-6 w-0.5 bg-white/40 mx-2"></span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 z-50">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base rounded-md transition-colors tracking-wider
                ${
                  activeCategory === category
                    ? "border-white/60 border text-white"
                    : "text-white/40 border border-transparent hover:text-white/90"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.6 }}
            onClick={() => dispatch(setSelectedProject(project))}
            className="w-full"
          >
            <div
              className={`group bg-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:transform shadow-xs hover:shadow-xl
                ${
                  selectedProject?.id === project.id
                    ? "border border-white/60 shadow-white/30"
                    : "shadow-white/15"
                }`}
            >
              <div className="relative overflow-hidden">
                <video
                  ref={(el) => {
                    videoRefs.current[project.id] = el;
                  }}
                  src={project.video}
                  // alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500"
                  preload="metadata"
                  muted
                  autoPlay
                  playsInline
                  loop
                  width={400}
                  height={256}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center">
                  <div className="p-3 sm:p-4 w-full">
                    <div className="flex items-center space-x-2 justify-start">
                      <div>
                        <h2 className="text-white text-base sm:text-lg md:text-xl font-bold line-clamp-1">
                          {project.title}
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm tracking-wider leading-relaxed line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
