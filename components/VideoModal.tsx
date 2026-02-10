import React, { useEffect } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  playbackId?: string;
  src?: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, playbackId, src, title }) => {
  const { setCursorType } = useCursor();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            onMouseEnter={() => setCursorType('click')}
            onMouseLeave={() => setCursorType('default')}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-[110]"
          >
            <X size={48} strokeWidth={1} />
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[90vw] h-[80vh] relative shadow-2xl rounded-lg overflow-hidden border border-white/10"
          >
            {src ? (
              <video
                src={src}
                autoPlay
                controls
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <MuxPlayer
                streamType="on-demand"
                playbackId={playbackId}
                metadata={{
                  video_title: title || 'Project Video',
                }}
                autoPlay
                accentColor="#EA580C"
                className="w-full h-full object-contain bg-black"
                style={{ aspectRatio: '16/9' }}
              />
            )}
          </motion.div>

          {/* Title Overlay (Optional) */}
          {title && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 text-white pointer-events-none"
            >
              <h3 className="text-2xl font-bold font-['Oswald'] uppercase tracking-wide">{title}</h3>
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
