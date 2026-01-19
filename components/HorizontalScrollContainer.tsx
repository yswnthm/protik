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
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };
    // Initial check
    checkDesktop();
    
    // Listener
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    // Modern browsers support addEventListener on MediaQueryList, but Safari < 14 uses addListener
    // We'll use the 'change' event which is standard
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    
    // Safer to just use resize for broader support if needed, but matchMedia listener is better
    try {
        mediaQuery.addEventListener('change', handler);
    } catch (e) {
        // Fallback for older environments
        mediaQuery.addListener(handler);
    }

    return () => {
        try {
            mediaQuery.removeEventListener('change', handler);
        } catch (e) {
            mediaQuery.removeListener(handler);
        }
    };
  }, []);

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
  // Title (100) + Intro (70) + Bolt (100) + Dukaan (~450) + Stack (50) + Contact (100) = 870vw
  // We need to move the content left by (totalWidth - viewportWidth)
  // i.e., 870vw - 100vw = 770vw

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-770vw"]);

  if (!isDesktop) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#F4F4F5] overflow-x-hidden">
          <TitleSection />
          <IntroSection />
          <BoltSection />
          <DukaanSection />
          <StackSection />
          <ContactSection />
      </div>
    );
  }

  return (
    <>
      {/* The Ghost Container - controls the scrollable height */}
      {/* Height = Total horizontal width estimate (approx 9-10 screens worth of scroll) */}
      <div ref={scrollRef} className="h-[950vh] w-full invisible absolute top-0 left-0 pointer-events-none"></div>

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