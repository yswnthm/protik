import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import HoverVideoCard from '../components/HoverVideoCard';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();

  // Using the real Asset IDs provided
  const ID_1 = "9aEkOhbdsVr4MU026KogdZ45y8HO3xEKVuIMAGWBwcUk";
  const ID_2 = "mEVD4pAmowT01YXUQchxROSNdxAOy9Rk7WjUFjOC700Z8";

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

  return (
    <section className="h-screen w-[300vw] shrink-0 bg-[#0a0a0a] text-white relative flex items-center overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <BackgroundVideo
          playbackId={ID_1}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Floating Title - Stays fixed roughly to the beginning of the section visually */}
      <div className="absolute top-16 left-20 z-10">
        <h2 className="text-8xl md:text-9xl font-black uppercase tracking-tighter text-white/10 select-none">
          Showcase
        </h2>
      </div>

      <motion.div
        className="relative w-full h-full flex items-center px-[15vw] gap-[8vw]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {videoItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="shrink-0 group"
          >
            <div className="flex flex-col gap-6">
              <span className="text-6xl font-['Oswald'] font-bold text-white/20 group-hover:text-[#FF4500] transition-colors duration-300">
                0{index + 1}
              </span>
              <HoverVideoCard
                playbackId={item.id}
                title={""} // Title handled below manually for style
                className="w-[50vw] md:w-[35vw] aspect-video shadow-2xl border border-white/10 group-hover:border-[#FF4500]/50 transition-all duration-500"
              />
              <h3 className="text-2xl font-bold uppercase tracking-wide group-hover:text-[#FF4500] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}

        {/* End Spacer */}
        <div className="w-[10vw] shrink-0" />
      </motion.div>

    </section>
  );
};

export default DukaanSection;