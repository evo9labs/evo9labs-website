"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  category: string;
  image: string;
}

const ProjectCard = ({
  project,
  isProjectPage = false,
}: {
  project: Project;
  isProjectPage?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800
                backdrop-blur-sm p-5 transition-all duration-300
                hover:bg-slate-900/80 hover:border-blue-500/40
                hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]
                flex flex-col h-full"
      >
        {/* Glow Overlay */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-2xl
                  pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* Image */}
        <div className="relative h-48 mb-5 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            draggable={false}
            fill
            className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent
                   transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="text-sm text-purple-400 mb-2">{project.category}</div>
          <h3 className="text-xl font-semibold mb-3 transition-all duration-300">
            {project.title}
          </h3>
          <p className="leading-relaxed text-slate-400 flex-1">
            {isProjectPage ? project.description : project.shortDescription}
          </p>

          {isProjectPage && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/80 text-black hover:bg-white transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>

            <motion.div
              className="relative max-w-5xl w-full h-[80vh] z-40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                draggable={false}
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
