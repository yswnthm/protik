import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import BackgroundVideo from '../components/BackgroundVideo';
import HoverVideoCard from '../components/HoverVideoCard';
import VideoModal from '../components/VideoModal';

const DukaanSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [selectedVideo, setSelectedVideo] = useState<{ src: string, title: string } | null>(null);

  // Placeholder source - change this to update all placeholders
  const PLACEHOLDER_SRC = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

  // Local assets from public/Reels and public/Videos
  const videoItems = [
    // Reels (Vertical)
    { src: PLACEHOLDER_SRC, title: "Placeholder Reel 01", type: "reel" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Reel 02", type: "reel" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Reel 03", type: "reel" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Reel 04", type: "reel" },
    // Normal (Horizontal)
    { src: PLACEHOLDER_SRC, title: "Placeholder Work 04", type: "normal" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Work 05", type: "normal" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Work 06", type: "normal" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Work 07", type: "normal" },
    { src: PLACEHOLDER_SRC, title: "Placeholder Work 08", type: "normal" },
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
          src={PLACEHOLDER_SRC} // Use the online placeholder
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
              playbackId="" // Not used for local items
              src={item.src}
              title={""}
              onClick={() => setSelectedVideo({ src: item.src, title: item.title })}
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
        playbackId="" // Not used for local
        src={selectedVideo?.src}
        title={selectedVideo?.title}
      />

    </section>
  );
};

export default DukaanSection;