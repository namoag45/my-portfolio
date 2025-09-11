"use client";

import { motion } from "framer-motion";
// import { SparklesCore } from "./ui/sparkles";
import BackgroundEffect from "./ui/BackgroundEffect";

import { responsibilities, Responsibility } from "@/data";

const ResponsibilityCard = ({ role, org, duration, details, index }: Responsibility & { index: number }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-1000"></div>
      <div className="relative border border-purple-500/20 rounded-xl p-6 backdrop-blur-md bg-black/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.01]">
        <div className="relative z-10">
          <h4 className="text-xl font-semibold text-purple-400 mb-1">{role}</h4>
          <p className="text-white mb-2">{org}</p>
          <p className="text-gray-400 mb-4">{duration}</p>
          <ul className="list-disc pl-5 text-white/90 space-y-2">
            {details.map((point: string, idx: number) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Responsibilities = () => {
  return (
    <div id="responsibilities">
      <BackgroundEffect
        variant="gradient"
        intensity="medium"
        showSparkles={true}
        className="py-28 relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
                Campus Leadership
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              Experience and Leadership
            </h3>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
            {responsibilities.map((item, index) => (
              <ResponsibilityCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </BackgroundEffect>
    </div>
  );
};

export default Responsibilities;