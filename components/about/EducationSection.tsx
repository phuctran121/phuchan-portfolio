import React from "react";
import Image from "next/image";
import { Education } from "@/types/information.types";

interface EducationSectionProps {
  educationData: Education[];
}
const EducationSection = ({ educationData }: EducationSectionProps) => {
  return (
    <section className="text-white flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-5 bg-white/5 p-5 rounded-lg border border-white/20"
            >
              <Image src={edu.image} alt={"vanlang"} className="size-30" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{edu.school}</h3>
                <p className="text-sm text-white/60 italic mb-2">{edu.level}</p>
                <p className="text-sm text-white/80">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
