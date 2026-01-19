import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TitleSection from '../sections/TitleSection';
import IntroSection from '../sections/IntroSection';
import BoltSection from '../sections/BoltSection';
import DukaanSection from '../sections/DukaanSection';
import StackSection from '../sections/StackSection';

import ContactSection from '../sections/ContactSection';

const HorizontalScrollContainer: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // We need to know the total width of the content to set the height of the scroll container
  // A simple way is to estimate or use a large number, but dynamic calculation is better.
  // Here we will use the hook to track the 'ghost' container.

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 90,
    mass: 0.5
  });

  // Calculate total width based on VWs
  // Title (100) + Intro (70) + Bolt (100) + Dukaan (300) + Stack (50) + Contact (100) = 720vw
  // We need to move the content left by (totalWidth - viewportWidth)
  // i.e., 720vw - 100vw = 620vw

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-620vw"]);

  return (
    <>
      {/* The Ghost Container - controls the scrollable height */}
      {/* Height = Total horizontal width estimate (approx 7-8 screens worth of scroll) */}
      <div ref={scrollRef} className="h-[800vh] w-full invisible absolute top-0 left-0 pointer-events-none"></div>

      {/* The Fixed Viewport */}
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-[#F4F4F5]">
        <motion.div
          style={{ x }}
          className="flex h-full w-max will-change-transform"
        >
          <TitleSection />
          <IntroSection />
          <BoltSection />
          <DukaanSection />
          <StackSection />

          <ContactSection />
        </motion.div>
      </div>
    </>
  );
};

export default HorizontalScrollContainer;