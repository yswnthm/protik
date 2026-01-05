import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const Cursor: React.FC = () => {
  const { cursorType } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 16); // Center the cursor (32px / 2)
      y.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [x, y, isVisible]);

  const variants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: '#000',
      mixBlendMode: 'normal' as const,
    },
    view: {
      height: 80,
      width: 80,
      backgroundColor: '#FF4500',
      mixBlendMode: 'multiply' as const,
    },
    text: {
      height: 32,
      width: 4,
      backgroundColor: '#FF4500',
      mixBlendMode: 'difference' as const,
    },
    link: {
      height: 64,
      width: 64,
      backgroundColor: 'transparent',
      border: '1px solid #2563EB',
      scale: 1.2,
    },
  };

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x,
        y,
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      {cursorType === 'view' && (
        <span className="text-white text-xs font-bold tracking-widest font-sans">VIEW</span>
      )}
    </motion.div>
  );
};

export default Cursor;