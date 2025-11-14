"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constant";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants: any = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: (i % 3) * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Portfolio() {
  const categories = [
    "All",
    "Blockchain",
    "E-commerce",
    "Custom Software",
    "Web Development",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <section
          id="portfolio"
          className="py-20 md:py-22 relative overflow-hidden"
        >
          <div className="container px-4">
            {/* Section Title */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Discover how we've helped businesses evolve and achieve
                remarkable results.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="pb-12 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        activeCategory === category ? "default" : "outline"
                      }
                      className={`${
                        activeCategory === category
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={cardVariants}
                      custom={index}
                    >
                      <ProjectCard project={project} isProjectPage={true} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">
                  No projects found in this category.
                </p>
              )}
            </div>
          </div>

          {/* Call-to-Action Section with Ambient Lights */}
          <motion.section
            className="relative py-20 px-6 mt-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your
                <span className="text-gradient">Next Project</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Contact us to discuss
                your project and see how we can help you evolve digitally.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.section>
        </section>
      </div>
    </div>
  );
}
