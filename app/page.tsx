"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { projects, services } from "@/constant";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants: any = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: (i % 3) * 0.15, // Stagger inside the row (3 columns per row)
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Section Section */}

      <section
        id="services"
        className="py-20 md:py-22 relative overflow-hidden"
      >
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete digital solutions across nine core dimensions to evolve
              your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="ambient-light top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary to-transparent"></div>
        <div className="ambient-light bottom-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary to-transparent"></div>
        <div className="ambient-light top-2/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/50 to-secondary/50"></div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover how we've helped businesses evolve and achieve remarkable
              results.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index: any) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={cardVariants}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-14">
            <Link href="/portfolio">
              <button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
              flex items-center gap-2 mx-auto group"
              >
                View All Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-[140px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-[120px] opacity-20 pointer-events-none" />
      </section>
    </div>
  );
}
