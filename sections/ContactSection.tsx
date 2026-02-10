import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleHelp } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

const ContactSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  return (
    <section className="h-screen w-full lg:w-screen shrink-0 bg-[#FF4500] text-white flex flex-col justify-center items-center relative overflow-hidden">

      <motion.a
        href="mailto:hello@solicate.in"
        className="group relative flex items-center gap-4 md:gap-8"
        onMouseEnter={() => setCursorType('link')}
        onMouseLeave={() => setCursorType('default')}
      >
        <h2 className="text-6xl md:text-[12vw] font-['Oswald'] font-bold uppercase leading-none group-hover:-skew-x-12 transition-transform duration-500 origin-left will-change-transform">
          Contact Us
        </h2>
        <motion.span
          className="text-4xl md:text-[10vw] font-bold"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.a>

      <div className="absolute bottom-10 w-full px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-lg md:text-xl font-bold uppercase tracking-widest">
        <a href="mailto:hello@solicate.in" className="hover:underline">Mail</a>
        <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="hover:underline">Website</a>
        <a href="/" className="hover:underline">Home</a>
      </div>

      <div className="absolute top-10 w-full flex justify-center items-center gap-2 opacity-50 text-sm uppercase tracking-widest z-50">
        <span>Made with Solicate</span>

        <div
          className="relative flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
        >
          <CircleHelp size={16} />

          <AnimatePresence>
            {isTooltipOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[300px] bg-white text-black p-6 rounded-xl shadow-2xl normal-case tracking-normal z-50 pointer-events-auto"
              >
                <div className="relative">
                  {/* Little arrow pointing up */}
                  <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>

                  <p className="text-sm font-medium leading-relaxed">
                    This portfolio is designed, developed and maintained by <span className="font-bold text-[#FF4500]">solicate</span>, a creative brand agency.
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    For more details contact, <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF4500]">solicate.in</a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;