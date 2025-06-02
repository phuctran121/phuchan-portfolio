import React from "react";
import Image from "next/image";

import { Introduction } from "@/types/information.types";

interface IntroductionSectionProps {
  introductionData: Introduction;
}

export default function IntroductionSection({
  introductionData,
}: IntroductionSectionProps) {
  return (
    <div className="grid grid-cols-12 max-w-4xl gap-6 md:gap-12">
      {/* Image Block */}
      <div className="col-span-12 sm:col-span-5 md:col-span-3 flex justify-center sm:justify-start">
        <Image
          src={introductionData.image}
          alt={"vanlang"}
          className="size-40 object-cover sm:size-52 border-zinc-700 rounded-2xl border-2"
        />
      </div>

      {/* Info Block */}
      <div className="col-span-12 sm:col-span-7 md:col-span-9 mt-4 sm:mt-0">
        <div className="flex flex-col items-start justify-between h-full gap-4">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">
              {introductionData.name}.
            </h2>
            <p className="text-white/60 tracking-wider">
              {introductionData.roles[0]}.{" "}
              <span className="ml-4"> {introductionData.roles[1]}.</span>
            </p>
          </div>
          <p className="text-white/60 tracking-wider leading-relaxed max-w-none sm:max-w-prose">
            {introductionData.bio}
          </p>
        </div>
      </div>
      {/* Personal Details Block */}
      <div className="md:col-span-6 col-span-12">
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Personal Details
          </h3>
          <div className="flex items-start gap-4 md:gap-8">
            <div className="text-white space-y-0.5 text-base font-medium tracking-wider leading-relaxed max-w-none sm:max-w-prose">
              {Object.keys(introductionData.personalDetails).map((key) => (
                <div key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
              ))}
            </div>
            <div className="text-white/60 space-y-0.5 text-base font-medium tracking-wider leading-relaxed max-w-none sm:max-w-prose">
              {Object.values(introductionData.personalDetails).map(
                (value, index) => (
                  <div key={index}>{value}</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Interests Block */}
      <div className="md:col-span-6 col-span-12">
        <div className="flex flex-col items-start gap-5">
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Interests
          </h3>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {introductionData.interests.map((tool, toolIndex) => (
              <div
                key={toolIndex}
                className="flex items-center justify-center flex-col py-3 px-4 border-white/80 border rounded-md"
              >
                {React.createElement(tool.icon, {
                  className: "size-6",
                  style: { color: tool.color },
                })}
                <span className="text-sm pt-1 text-white/60">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
