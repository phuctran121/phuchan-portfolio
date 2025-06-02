"use client";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { motion } from "motion/react";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        width: "110%",
        height: "110%",
        left: "-5%",
        top: "-5%",
        zIndex: -1,
        overflow: "hidden",
        transform: "scale(1.1)", // Zoom lớn hơn 1.0 là zoom gần hơn
        transformOrigin: "center center",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000" },
          fullScreen: { enable: true, zIndex: -1 },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                parallax: {
                  enable: true,
                  force: 10,
                  smooth: 10,
                },
              },
            },
          },
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
            size: { value: { min: 1, max: 2 } },
            opacity: { value: 0.2 },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};

export default Particle;
