import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundVideo from '../components/BackgroundVideo';

const BoltSection: React.FC = () => {

  // Real Asset ID provided by user
  const MUX_PLAYBACK_ID = "5dY00pJUOdkxS8LyzKKYWfvr4QVPBRM00tcB800ew5A2LM";

  return (
    <section className="h-screen w-screen shrink-0 relative bg-[#F4F4F5] flex items-center justify-center overflow-hidden">

      <div className="relative w-[80%] h-[70%]">
        <BackgroundVideo
          playbackId={MUX_PLAYBACK_ID}
          className="w-full h-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        />

        {/* Parallaxing Text Overlay */}
        <motion.h2
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-16 -left-10 text-[10vw] font-['Oswald'] text-black font-bold uppercase leading-none z-20 mix-blend-hard-light pointer-events-none"
        >
          BOLT.NEW
        </motion.h2>
      </div>

      <div className="absolute top-12 right-12 flex flex-col items-end">
        <span className="text-[#FF4500] font-bold text-4xl font-['Oswald']">02</span>
        <span className="text-sm font-bold uppercase tracking-widest">Web Container Technology</span>
      </div>
    </section>
  );
};

export default BoltSection;