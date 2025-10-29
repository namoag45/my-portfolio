"use client";

import React from "react";
import { motion } from "framer-motion";
import BackgroundEffect from "./ui/BackgroundEffect";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { TypewriterEffect } from "./ui/TypewriterEffect";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Hero = () => {
  const words = [
    { text: "Hi, " },
    { text: "I'm " },
    { text: "Naman ", className: "text-purple-500" },
    { text: "Agarwal" },
  ];

  const techStack = [
    // { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    // { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiTailwindcss className="text-cyan-300" />, name: "TailwindCSS" },
    // { icon: <SiPostgresql className="text-blue-300" />, name: "PostgreSQL" },
  ];

  return (
    <BackgroundEffect 
      variant="gradient" 
      intensity="medium" 
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Animated Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["Product Manager"].map((badge, i) => (
            <motion.div
              key={badge}
              className="bg-gray-900/80 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.2 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

        {/* Typewriter Name */}
        <TypewriterEffect
          words={words}
          className="text-5xl sm:text-6xl font-bold mb-4"
        />
       
        <div className="max-w-xl mt-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-lg font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {/* <Highlight className="text-black dark:text-white">
              Full-Stack Developer |{" "}
            </Highlight> */}
            As a Product Management aspirant, I specialize in bridging user needs with innovative solutions. From AI-based itinerary planning to scalable student platforms, I enjoy creating products that simplify decisions and elevate experiences.
          </motion.h1>
        </div>
        {/* Tech Stack */}
        <div className="w-full mt-10">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-800 hover:border-purple-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.icon}
                <span className="text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

       
        {/* Social Links */}
        <motion.div
          className="flex gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          
          {/* <motion.a
            href="https://github.com/namoag45"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-purple-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub className="text-xl" />
          </motion.a> */}
          <motion.a
            href="https://www.linkedin.com/in/naman-agarwal-57a519218/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-blue-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
          {/* <motion.a
            href="https://leetcode.com/u/Suhani321/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-green-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaLaptopCode className="text-xl" />
          </motion.a> */}
          {/* <motion.a
            href="https://codeforces.com/profile/Suhani2205"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-blue-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaCode className="text-xl" />
          </motion.a> */}

        </motion.div>
      </div>
    </BackgroundEffect>
  );
};

export default Hero;