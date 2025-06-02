"use client";
import React from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // Chọn trọng lượng phù hợp
});

interface AnimatedBorderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  cornerSize?: number;
  number?: string;
  visbleBorder?: boolean;
}

export default function AnimatedBorder({
  width = "400px",
  height = "auto",
  className = "",
  cornerSize = 200,
  number = "01",
  visbleBorder = false,
}: AnimatedBorderProps) {
  // Animation variants for the corners
  const cornerVariants = {
    initial: {
      width: cornerSize * 0.3,
      height: cornerSize, // Initial height ratio
      borderColor: "#504d55",
      borderStyle: "solid" as const,
    },
    animate: {
      width: [cornerSize * 0.4, cornerSize * 0.6, cornerSize * 0.4],
      height: [cornerSize, cornerSize * 0.6, cornerSize],
      borderStyle: ["solid"], // Animate border style
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className={`fixed top-1/2 left-1/2 transform mt-5 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{ width, height }}
    >
      {/* Colored line with 3 segments */}

      {/* Top Left Corner */}
      <motion.div
        className={`${
          visbleBorder ? "hidden" : ""
        } absolute top-0 left-0 border-t-2 border-l-2 border-r-0 border-b-0`}
        initial="initial"
        animate="animate"
        variants={cornerVariants}
      />

      {/* Top Right Corner */}
      <motion.div
        className={`${
          visbleBorder ? "hidden" : ""
        } absolute top-0 right-0 border-t-2 border-r-2 border-l-0 border-b-0`}
        initial="initial"
        animate="animate"
        variants={cornerVariants}
      />

      {/* Bottom Left Corner */}
      <motion.div
        className={`${
          visbleBorder ? "hidden" : ""
        } absolute bottom-0 left-0 border-b-2 border-l-2 border-r-0 border-t-0`}
        initial="initial"
        animate="animate"
        variants={cornerVariants}
      />

      {/* Bottom Right Corner
      <motion.div
        className="absolute bottom-0 right-0 border-b-2 border-r-2 border-l-0 border-t-0"
        initial="initial"
        animate="animate"
        variants={cornerVariants}
      /> */}
      {/* Number display - bottom right */}
      <div
        className={`${orbitron.className} select-none absolute flex items-center tracking-widest justify-center scale-y-125 leading-none bottom-0 right-[-35px] text-white/15 text-[180px]`}
      >
        {number}
      </div>
    </motion.div>
  );
}
