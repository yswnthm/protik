import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import HoverVideoCard from '../components/HoverVideoCard';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();

  // Using the real Asset IDs provided
  const ID_1 = "xtd5w66yBZEaftQzkoWAUCa9kETQECgpYmIm2s4UZZA";
  const ID_2 = "5dY00pJUOdkxS8LyzKKYWfvr4QVPBRM00tcB800ew5A2LM";

  const videoItems = [
    { id: ID_1, title: "Work 01: The Beginning" },
    { id: ID_2, title: "Work 02: Rising Action" },
    { id: ID_1, title: "Work 03: Climax" },
    { id: ID_2, title: "Work 04: Falling Action" },
    { id: ID_1, title: "Work 05: Resolution" },
    { id: ID_2, title: "Work 06: Epilogue" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="h-screen w-[250vw] shrink-0 bg-[#121212] text-white relative flex items-center overflow-hidden">

      {/* Background Video Layer - Keep subtle background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none fixed-bg-simulate">
        <BackgroundVideo
          playbackId={ID_1} // Use one as the ambient background
          className="w-full h-full grayscale"
        />
      </div>

      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <h2 className="text-6xl font-['Oswald'] uppercase tracking-tight">Video Showcase</h2>
        <p className="text-gray-400 mt-2 tracking-widest uppercase text-sm">Selected Works & Edits</p>
      </div>

      {/* Horizontal Scroll Content */}
      <motion.div
        className="relative w-full h-full flex items-center px-[10vw] gap-[5vw]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
      >
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />

        {videoItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="shrink-0"
          >
            <div className="flex flex-col gap-4">
              <span className="text-sm font-mono text-gray-500">0{index + 1}</span>
              <HoverVideoCard
                playbackId={item.id}
                title={item.title}
                className="w-[40vw] md:w-[35vw] shadow-2xl border-white/10 hover:border-white/50 transition-colors duration-300"
              />
            </div>
          </motion.div>
        ))}

        {/* End Spacer */}
        <div className="w-[10vw] shrink-0"></div>

      </motion.div>

    </section>
  );
};

export default DukaanSection;