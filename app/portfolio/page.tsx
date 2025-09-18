"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/PortfolioCard";
import { projects } from "@/constant";

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
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Our Portfolio</span>
            <br />
            <span className="text-foreground">Digital Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Explore our collection of successful digital transformation projects
            and see how we've helped businesses evolve.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
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
      </section>

      {/* Projects */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your{" "}
            <span className="text-gradient">Next Project</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your
            project and see how we can help you evolve digitally.
          </p>
          <Link href="/contact">
            <Button className="btn-evolution text-lg px-8 py-4">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
