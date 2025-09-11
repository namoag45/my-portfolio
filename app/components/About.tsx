"use client";

import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import BackgroundEffect from './ui/BackgroundEffect';
// import { TextGenerateEffect } from './ui/TextGenerateEffect';

const About = () => {
  return (
    <BackgroundEffect 
      variant="gradient" 
      intensity="medium" 
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
    <div id="about" className=" min-h-screen py-20 px-4 items-center justify-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
         <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 bg-black/70 backdrop-blur-sm "
                  >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
                Myself
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            
            
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                      About Me
                    </h3>
                  </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gray-800 rounded-2xl p-8 bg-black/70 backdrop-blur-sm text-center"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-white ">
              I&apos;m <span className="font-semibold">Naman Agarwal</span>, a Computer and Communication Engineering student with a strong inclination towards Product Management and user-centric innovation. My journey has been shaped by working on products that merge technical depth with strategic problem-solving — from designing AI-powered travel solutions to building student discovery platforms that simplify everyday decisions. These experiences have sharpened my ability to identify pain points, define clear product goals, and translate them into impactful features.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <p className="text-lg text-white">
              What excites me most about product management is the blend of strategy, execution, and collaboration. Leading initiatives like the Counselling and Guidance Cell’s mentorship program and coordinating with diverse stakeholders for TEDxLNMIIT taught me how to manage large teams, align multiple perspectives, and deliver outcomes that enhance user satisfaction. I enjoy working at the crossroads of data, design, and business priorities, ensuring that every decision ties back to delivering measurable value for the user.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <p className="text-lg text-white">
              Equipped with skills in analytics, design tools, and cross-functional collaboration, I aim to craft products that are not just functional but also delightful and scalable. My approach combines structured analysis with creative problem-solving, allowing me to balance short-term wins with long-term vision. As I continue exploring product management, I am eager to take on opportunities where I can drive growth, improve retention, and shape meaningful experiences through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </BackgroundEffect>
  );
};

export default About;