import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
}

const RevealImage: React.FC<RevealImageProps> = ({ src, alt, className }) => {
  const { setCursorType } = useCursor();

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setCursorType('view')}
      onMouseLeave={() => setCursorType('default')}
    >
      <motion.div
        initial={{ width: '100%' }}
        whileInView={{ width: '0%' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }} // Quart ease
        className="absolute top-0 left-0 h-full bg-[#09090B] z-10"
      />
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default RevealImage;