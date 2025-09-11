"use client";

import { CaseStudies, CaseStudy } from "@/data";

import React, { useState } from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverBorderGradient } from "./ui/InfiniteMovingCards";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { SparklesCore } from "./ui/sparkles";
// import { cn } from "@/app/utils/cn";
import BackgroundEffect from "./ui/BackgroundEffect";
// Define the shape of a project

const RecentProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div id="caseStudy">
      <BackgroundEffect
        variant="gradient"
        intensity="medium"
        showSparkles={true}
        className="py-24 relative overflow-hidden"
      >
        {/* Section Header */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
              My Cases
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Product Case Studies
            </h3>
            <div className="max-w-3xl mx-auto text-xl text-gray-300">
              <TextGenerateEffect
                words="Here are some case studies where I analyzed real-world challenges, 
                identified gaps, and proposed product solutions backed by data and user insights"
                className="text-xl text-gray-300"
              />
            </div>
            
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CaseStudies.map((project: CaseStudy, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <BackgroundGradient
                  className="rounded-[22px] p-0.5 bg-black"
                  containerClassName="rounded-[22px]"
                >
                  <div className="bg-black border border-white/[0.08] rounded-[20px] overflow-hidden h-full flex flex-col">
                    {/* Project Image with Hover Effect */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
          

                      {/* Project Title */}
                      <h3 className="font-bold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-300 mb-6 flex-1">{project.des}</p>

                      {/* Links */}
                      <div className="flex justify-between items-center mt-auto">
                        {/* <HoverBorderGradient
                          as="a"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full text-white bg-black border-transparent flex items-center gap-2 group/link text-sm"
                          containerClassName="rounded-full"
                          duration={500}
                        >
                          <FaGithub className="text-lg" />
                          View Source
                          <FaLocationArrow className="text-xs transition-transform group-hover/link:translate-x-1" />
                        </HoverBorderGradient> */}

                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm"
                          >
                            Link
                            <FaLocationArrow className="text-xs transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundEffect>
    </div>
  );
};

export default RecentProjects;