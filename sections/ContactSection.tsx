import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ContactSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="h-screen w-[100vw] shrink-0 bg-[#FF4500] text-white flex flex-col justify-center items-center relative overflow-hidden">

      <motion.a
        href="mailto:hello@panorama.dev"
        className="group relative flex items-center gap-8"
        onMouseEnter={() => setCursorType('link')}
        onMouseLeave={() => setCursorType('default')}
      >
        <h2 className="text-[12vw] font-['Oswald'] font-bold uppercase leading-none group-hover:-skew-x-12 transition-transform duration-500 origin-left will-change-transform">
          Email Me
        </h2>
        <motion.span
          className="text-[10vw] font-bold"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.a>

      <div className="absolute bottom-10 w-full px-12 flex justify-between text-xl font-bold uppercase tracking-widest">
        <a href="#" className="hover:underline">Twitter / X</a>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">Vimeo</a>
      </div>

      <div className="absolute top-10 w-full text-center opacity-50 text-sm uppercase tracking-widest">
        End of Exhibition
      </div>

    </section>
  );
};

export default ContactSection;