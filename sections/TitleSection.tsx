import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TitleSection: React.FC = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#F4F4F5] shrink-0">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[10vw] md:text-[14vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-black select-none tracking-tighter text-center">
          <span
            className="block bg-clip-text text-transparent bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-texture.jpg')",
              WebkitBackgroundClip: 'text'
            }}
          >
            Protik
          </span>
          <span className="block text-black">Das</span>
        </h1>
        <div className="mt-8 flex items-center gap-4 overflow-hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] w-24 bg-black"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium tracking-widest uppercase"
          >
            creative video editor | Cinematography
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] w-24 bg-black"
          />
        </div>
      </div>


    </section>
  );
};

export default TitleSection;