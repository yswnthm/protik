import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const projects = [
  { name: "Music Video", category: "Edit & Color", img: "https://picsum.photos/400/300?random=10" },
  { name: "Commercial", category: "Post-Production", img: "https://picsum.photos/400/300?random=11" },
  { name: "Short Film", category: "Cinematography", img: "https://picsum.photos/400/300?random=12" },
  { name: "Documentary", category: "Storytelling", img: "https://picsum.photos/400/300?random=13" }
];

const OpenSourceSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get relative position within the section
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      className="h-screen w-[80vw] shrink-0 bg-[#F4F4F5] relative flex flex-col justify-center px-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="mb-12 border-b-2 border-black pb-4 flex justify-between items-end">
        <h3 className="text-4xl font-['Oswald'] uppercase">Selects</h3>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-500">05</span>
      </div>

      <div className="flex flex-col space-y-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative group cursor-none"
            onMouseEnter={() => {
              setHoveredProject(project.name);
              setCursorType('view'); // Or custom
            }}
            onMouseLeave={() => {
              setHoveredProject(null);
              setCursorType('default');
            }}
          >
            <h4 className={`text-6xl md:text-8xl font-['Oswald'] font-bold uppercase transition-all duration-300 ${hoveredProject === project.name ? 'text-black' : 'text-transparent stroke-text'}`}
              style={{ WebkitTextStroke: hoveredProject === project.name ? '0px' : '2px black' }}
            >
              {project.name}
            </h4>
            <p className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -right-4 top-1/2 -translate-y-1/2 text-[#FF4500] font-bold">
              {project.category}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Preview Image */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 40,
              y: mousePos.y - 150
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 pointer-events-none z-20 w-64 h-48 bg-gray-200 shadow-2xl rounded-lg overflow-hidden border-2 border-black"
          >
            <img
              src={projects.find(p => p.name === hoveredProject)?.img}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OpenSourceSection;