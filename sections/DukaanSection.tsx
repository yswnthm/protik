import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import VideoModal from '../components/VideoModal';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // PLACEHOLDER ID provided by user request logic
  const MUX_PLAYBACK_ID = "DS00Spx1CV902PhO7dCN00sB9fvtSAE02p"; // Demo ID

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

      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <BackgroundVideo
          playbackId={MUX_PLAYBACK_ID}
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <h2 className="text-6xl font-['Oswald'] uppercase tracking-tight">Dukaan</h2>
        <p className="text-gray-400 mt-2 tracking-widest uppercase text-sm">Architecting the Rollout AI Platform</p>
      </div>

      {/* Floating Elements - keeping them as "details" over the video */}
      <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center z-10 pointer-events-none">

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M200,300 Q400,100 600,250 T900,400"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute left-[10%] top-[30%] bg-[#1E1E1E]/90 backdrop-blur-sm border border-gray-700 p-6 rounded-lg shadow-2xl w-80 pointer-events-auto"
          onMouseEnter={() => setCursorType('view')}
          onMouseLeave={() => setCursorType('default')}
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-700 rounded w-3/4"></div>
            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
            <div className="h-2 bg-gray-700 rounded w-full"></div>
          </div>
          <p className="mt-4 font-mono text-xs text-[#2563EB]">Monaco Editor Component</p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute left-[40%] top-[50%] bg-[#1E1E1E]/90 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-2xl w-64 z-10 pointer-events-auto"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-[#2563EB] rounded-full mx-auto mb-3 flex items-center justify-center font-bold">G</div>
            <h3 className="font-bold">OAuth Login</h3>
            <p className="text-xs text-gray-400 mt-1">Secure authentication flow</p>
          </div>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="absolute right-[15%] top-[25%] bg-[#1E1E1E]/90 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-2xl w-64 pointer-events-auto"
        >
          <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
            <span className="text-xs font-mono">File Explorer</span>
          </div>
          <div className="space-y-1 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2"><span className="text-blue-400">folder</span> src</div>
            <div className="flex items-center gap-2 pl-4"><span className="text-yellow-400">file</span> index.ts</div>
            <div className="flex items-center gap-2 pl-4"><span className="text-yellow-400">file</span> styles.css</div>
          </div>
        </motion.div>

      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        playbackId={MUX_PLAYBACK_ID}
        title="Dukaan AI Architecture"
      />
    </section>
  );
};

export default DukaanSection;