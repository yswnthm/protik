import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const IntroSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="h-screen w-full lg:w-[70vw] shrink-0 bg-[#F4F4F5] border-l-2 border-black flex flex-col justify-between p-8 md:p-16 relative overflow-hidden">
      {/* Background Decor - Optional subtle gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-orange-100/50 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Header / Number */}
      <div className="flex justify-between items-start">
        <span className="text-black/10 font-['Oswald'] text-8xl md:text-[10rem] leading-none -ml-4 -mt-8 select-none">
          01
        </span>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xs text-right"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">Statement</p>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            Merging technical precision with cinematic emotion.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter"
          onMouseEnter={() => setCursorType('text')}
          onMouseLeave={() => setCursorType('default')}
        >
          <span className="block text-black">Currently</span>
          <span className="block text-black">Editing</span>
          <span className="block bg-gradient-to-r from-[#FF4500] to-[#EA580C] bg-clip-text text-transparent">
            Commercials
          </span>
        </motion.h2>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-black/10 pt-6 mt-8 gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
          <div className="text-xl font-bold text-black">BASED IN BANGALORE</div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Role</p>
          <div className="text-xl font-bold text-black">FREELANCE</div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;