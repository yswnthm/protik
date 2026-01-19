import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface BackgroundVideoProps {
    playbackId: string;
    className?: string;
    onClick?: () => void;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ playbackId, className, onClick }) => {
    const { setCursorType } = useCursor();

    return (
        <div
            className={`relative overflow-hidden group cursor-none ${className}`}
            onMouseEnter={() => setCursorType('play')}
            onMouseLeave={() => setCursorType('default')}
            onClick={onClick}
        >
            {/* Reveal Mask Animation */}
            <motion.div
                initial={{ width: '100%' }}
                whileInView={{ width: '0%' }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }} // Quart ease
                className="absolute top-0 left-0 h-full bg-[#09090B] z-20 pointer-events-none"
            />

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" />

            {/* Ambient Looping Video */}
            <div className="w-full h-full relative">
                <MuxPlayer
                    streamType="on-demand"
                    playbackId={playbackId}
                    autoPlay="muted"
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover pointer-events-none"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover' // Force cover behavior 
                    }}
                />
            </div>
        </div>
    );
};

export default BackgroundVideo;
