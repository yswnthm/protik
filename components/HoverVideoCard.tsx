import React, { useRef, useState } from 'react';
import MuxPlayer, { MuxPlayerRefAttributes } from '@mux/mux-player-react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface HoverVideoCardProps {
    playbackId: string;
    title: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const HoverVideoCard: React.FC<HoverVideoCardProps> = ({ playbackId, title, className, style, onClick }) => {
    const { setCursorType } = useCursor();
    const playerRef = useRef<MuxPlayerRefAttributes>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setCursorType('click'); // Changed from 'view' to 'click' to indicate interaction
        playerRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCursorType('default');
        playerRef.current?.pause();
    };

    return (
        <motion.div
            className={`relative rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-800 cursor-pointer ${className}`}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-full relative">
                <MuxPlayer
                    ref={playerRef}
                    streamType="on-demand"
                    playbackId={playbackId}
                    muted
                    loop
                    controls={false}
                    className="w-full h-full object-cover"
                    style={{
                        aspectRatio: '16/9',
                        // @ts-ignore - Mux custom properties
                        '--controls': 'none',
                        '--media-controls': 'none',
                    }}
                />

                {/* Overlay Title */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                >
                    <h4 className="text-white font-['Oswald'] uppercase tracking-wider text-sm">{title}</h4>
                </motion.div>

                {/* Unhovered State Badge or Dimmer */}
                <motion.div
                    className="absolute inset-0 bg-black/40 pointer-events-none z-0"
                    animate={{ opacity: isHovered ? 0 : 1 }}
                />
            </div>
        </motion.div>
    );
};

export default HoverVideoCard;
