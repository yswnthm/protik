import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import VideoModal from '../components/VideoModal';
import HoverVideoCard from '../components/HoverVideoCard';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real Asset ID provided by user
  const MUX_PLAYBACK_ID = "xtd5w66yBZEaftQzkoWAUCa9kETQECgpYmIm2s4UZZA";

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="h-screen w-[120vw] shrink-0 bg-[#121212] text-white relative flex items-center justify-center overflow-hidden">

      {/* Background Video Layer - Keep subtle background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <BackgroundVideo
          playbackId={MUX_PLAYBACK_ID}
          className="w-full h-full grayscale"
        />
      </div>

      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <h2 className="text-6xl font-['Oswald'] uppercase tracking-tight">Narrative Sequence</h2>
        <p className="text-gray-400 mt-2 tracking-widest uppercase text-sm">Visual Storytelling & Composition</p>
      </div>

      {/* Floating Elements - Video Showcases */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center z-10">

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M200,300 Q400,100 600,250 T900,400"
            fill="none"
            stroke="#666"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>

        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute left-[10%] top-[25%]"
        >
          <HoverVideoCard
            playbackId={MUX_PLAYBACK_ID}
            title="Scene 1: The Establishment"
            className="w-80 shadow-2xl border-white/20"
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute left-[40%] top-[45%] z-20"
        >
          <HoverVideoCard
            playbackId={MUX_PLAYBACK_ID}
            title="Scene 2: The Conflict"
            className="w-96 shadow-2xl border-white/20 scale-110"
          />
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute right-[15%] top-[20%]"
        >
          <HoverVideoCard
            playbackId={MUX_PLAYBACK_ID}
            title="Scene 3: Resolution"
            className="w-72 shadow-2xl border-white/20"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default DukaanSection;