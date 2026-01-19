import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import HoverVideoCard from '../components/HoverVideoCard';
import VideoModal from '../components/VideoModal';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [selectedVideo, setSelectedVideo] = useState<{ id: string, title: string } | null>(null);

  // Using the real Asset IDs provided
  const ID_1 = "9aEkOhbdsVr4MU026KogdZ45y8HO3xEKVuIMAGWBwcUk";
  const ID_2 = "mEVD4pAmowT01YXUQchxROSNdxAOy9Rk7WjUFjOC700Z8";

  // ... videoItems ...
  const videoItems = [
    // Reels (Vertical)
    { id: ID_1, title: "Reel 01", type: "reel" },
    { id: ID_2, title: "Reel 02", type: "reel" },
    { id: ID_1, title: "Reel 03", type: "reel" },
    // Normal (Horizontal)
    { id: ID_2, title: "Work 04: Falling Action", type: "normal" },
    { id: ID_1, title: "Work 05: Resolution", type: "normal" },
    { id: ID_2, title: "Work 06: Epilogue", type: "normal" },
    { id: ID_1, title: "Work 07: Finale", type: "normal" },
    { id: ID_2, title: "Work 08: Credits", type: "normal" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="min-h-screen w-full lg:w-max lg:h-screen shrink-0 bg-[#0a0a0a] text-white relative flex flex-col lg:flex-row items-center lg:overflow-hidden pr-0 lg:pr-[10vw]">

      {/* Subtle Background ... */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none fixed">
        <BackgroundVideo
          playbackId={ID_1}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Floating Title ... */}
      <div className="relative mt-20 lg:mt-0 lg:absolute lg:top-16 lg:left-20 z-10 lg:sticky lg:left-20 text-center lg:text-left">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white/10 select-none">
          Showcase
        </h2>
      </div>

      <motion.div
        className="relative w-full h-full flex flex-col lg:flex-row items-center px-4 lg:px-[15vw] py-12 lg:py-0 gap-12 lg:gap-[6vw]"
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
            transition={{ duration: 0.6 }}
            className="shrink-0 group flex flex-col gap-6 w-full lg:w-auto items-center lg:items-start"
          >
            <span className="text-4xl md:text-6xl font-['Oswald'] font-bold text-white/20 group-hover:text-[#FF4500] transition-colors duration-300">
              0{index + 1}
            </span>

            <HoverVideoCard
              playbackId={item.id}
              title={""}
              onClick={() => setSelectedVideo({ id: item.id, title: item.title })}
              className={`
                  shadow-2xl border border-white/10 group-hover:border-[#FF4500]/50 transition-all duration-500
                  ${item.type === 'reel'
                  ? 'w-full aspect-[9/16] md:w-[60vw] lg:w-[18vw]'
                  : 'w-full aspect-video md:w-[80vw] lg:w-[35vw]'}
                `}
            />

            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-[#FF4500] transition-colors duration-300">
              {item.title}
            </h3>
          </motion.div>
        ))}

        {/* End Spacer */}
        <div className="hidden lg:block w-[5vw] shrink-0" />
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        playbackId={selectedVideo?.id || ''}
        title={selectedVideo?.title}
      />

    </section>
  );
};

export default DukaanSection;