import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const IntroSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="h-screen w-[70vw] shrink-0 bg-[#F4F4F5] border-l-2 border-black flex flex-col justify-between p-12 relative">
      <div className="flex justify-between items-start">
        <span className="text-[#FF4500] font-['Oswald'] text-8xl font-bold">01</span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/3"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Statement</p>
          <p className="text-lg leading-relaxed">
            Crafting narratives through cuts, color, and sound. Merging technical precision with cinematic emotion.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        <h2
          className="text-5xl md:text-7xl font-bold leading-tight uppercase max-w-4xl"
          onMouseEnter={() => setCursorType('text')}
          onMouseLeave={() => setCursorType('default')}
        >
          Currently Editing <br />
          <span className="text-[#EA580C]">Commercials</span> <br />
          @ Freelance
        </h2>
      </div>

      <div className="flex justify-between items-end border-t border-gray-300 pt-8">
        <div className="text-xl font-bold">BASED IN BANGALORE</div>
        <div className="text-sm text-gray-500 uppercase tracking-widest">
          (SCROLL DOWN TO EXPLORE)
        </div>
      </div>
    </section>
  );
};

export default IntroSection;