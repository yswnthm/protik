import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StackSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const stack = ["DaVinci Resolve", "Figma", "Frame.io", "Audacity", "Notion"];

  return (
    <section className="h-screen w-[50vw] shrink-0 bg-[#F4F4F5] border-r-2 border-black flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-10 left-10">
        <span className="text-[#FF4500] font-bold text-4xl font-['Oswald']">04</span>
      </div>

      <div
        className="relative h-full w-full flex flex-col items-center justify-center perspective-[1000px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* We simulate a 3D cylinder by just having a vertical marquee that looks cool */}
        <div className="flex flex-col gap-0 items-center justify-center">
          <motion.div
            animate={{ y: isPaused ? 0 : [0, -500] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex flex-col items-center gap-4"
          >
            {[...stack, ...stack, ...stack].map((tech, index) => (
              <div
                key={index}
                className={`text-6xl md:text-8xl font-['Oswald'] font-bold uppercase transition-colors duration-300 ${isPaused ? 'hover:text-[#FF4500] cursor-pointer' : 'text-gray-300'}`}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, #F4F4F5 0%, #F4F4F5 5%, transparent 25%, transparent 75%, #F4F4F5 95%, #F4F4F5 100%)'
          }}
        ></div>
      </div>
    </section>
  );
};

export default StackSection;