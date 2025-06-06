import React from "react";
import { Skill } from "@/types/information.types";
import { motion } from "motion/react";

interface SkillsSectionProps {
  skillsData: Skill[];
}

const SkillsSection = ({ skillsData }: SkillsSectionProps) => {
  return (
    <section className=" text-white flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl auto-rows-fr">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/5 p-6 rounded-lg border border-white/20 h-full flex flex-col text-center transition-colors"
            initial={{ y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{
              y: -12,
              backgroundColor: "rgba(255, 255, 255, 0.12)", // new background on hover
              borderColor: "rgba(255, 255, 255, 0.6)", // new border color on hover
            }}
          >
            {/* Category */}
            <h2 className="md:text-3xl text-xl font-bold mb-4 min-h-[5rem]">
              {skill.category}
            </h2>
            {/* Description */}
            <p className="text-sm md:text-base text-white/60 mb-6 min-h-[6rem]">
              {skill.description}
            </p>
            {/* Tools */}
            <div className="px-4">
              <h3 className="text-sm md:text-xl font-bold mb-4">Tools I use</h3>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
                {skill.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center justify-center flex-col px-4"
                  >
                    {React.createElement(tool.icon, {
                      className: "size-10",
                      style: { color: tool.color },
                    })}
                    <span className="text-xs pt-1">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
