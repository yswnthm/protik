import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TitleSection: React.FC = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#F4F4F5] shrink-0">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[10vw] md:text-[14vw] leading-[0.8] font-bold uppercase text-transparent bg-clip-text bg-black select-none tracking-tighter">
          <span
            className="block bg-clip-text text-transparent bg-cover bg-center"
            style={{
              backgroundImage: "url('https://picsum.photos/1200/600?grayscale')",
              WebkitBackgroundClip: 'text'
            }}
          >
            PROTIK
          </span>
          {/* <span className="block text-black">Kumar</span> - Removed for mononym branding */}
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
            Cinematic Video Editor & Colorist
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] w-24 bg-black"
          />
        </div>
      </div>

      {/* Decorative large faint text */}
      <div className="absolute bottom-10 left-10 opacity-10 font-['Oswald'] text-9xl pointer-events-none">
        PORTFOLIO
      </div>
    </section>
  );
};

export default TitleSection;