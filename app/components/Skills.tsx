"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundEffect from './ui/BackgroundEffect';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SparklesCore } from './ui/sparkles';
import { skills, SkillCategory, Technology, SkillCardProps } from "@/data";

const SkillCard = ({ category, skills, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-1000"></div>
      <div className="relative border border-purple-500/20 rounded-xl p-8 backdrop-blur-md bg-black/30 h-full transition-all duration-300 group-hover:transform group-hover:scale-[1.01]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl opacity-20">
          {isHovered && (
            <SparklesCore
              id={`tsparticles-skill-${index}`}
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#8B5CF6"
            />
          )}
        </div>

        <div className="relative z-10">
          <h4 className="text-2xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 pb-2 border-b border-purple-500/30">
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                className="px-4 py-2 rounded-full text-sm bg-black/40 text-white/90 border border-purple-500/30 hover:border-purple-400/60 hover:text-white transition-all duration-300 shadow-sm shadow-purple-500/20"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <BackgroundEffect
        variant="gradient"
        intensity="medium"
        showSparkles={true}
        className="py-28 relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">Core Expertise</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              Skills
            </h3>
            <div className="max-w-3xl mx-auto text-xl text-gray-300">
              <TextGenerateEffect
                words="Leveraging cutting-edge technologies to build innovative and high-performance applications across the full development stack."
                className="text-xl text-gray-300"
              />
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((category, index) => (
                <SkillCard 
                  key={category.id}
                  category={category.category}
                  skills={category.technologies}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </BackgroundEffect>
    </div>
  );
};

export default Skills;
