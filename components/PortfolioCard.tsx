"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags?: string[];
  category: string;
  webLink?: string;
};

interface ProjectCardProps {
  project: Project;
  isHomePage?: boolean;
}

export default function ProjectCard({ project, isHomePage }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="service-card group cursor-pointer">
        {/* Image */}
        <div
          className={`relative ${
            isHomePage ? "h-48 mb-4" : "h-64 mb-6"
          } rounded-lg overflow-hidden`}
          onClick={() => setIsOpen(true)} // open fullscreen
        >
          <Image
            fill
            draggable={false}
            src={project.image}
            alt={project.title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Only for non-featured (portfolio) */}
          {!isHomePage && project.webLink && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <div
                  className="flex justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-white/20 text-white border border-white/50 backdrop-blur-sm hover:bg-white hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Category */}
        <div className={`text-sm text-secondary mb-2`}>{project.category}</div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4">
          {isHomePage ? project.shortDescription : project.description}
        </p>

        {/* Tags only if not featured */}
        {!isHomePage && (
          <div className="flex flex-wrap gap-2">
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

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // close when clicking background
          >
            {/* Close Button (always above) */}
            <button
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/80 text-black hover:bg-white transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-5xl w-full h-[80vh] z-40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                fill
                draggable={false}
                src={project.image}
                alt={project.title}
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
