"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services, values } from "@/constant";
import { Target, Eye, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const floatSoft: any = {
    initial: { y: 0 },
    animate: {
      y: [-4, 4, -4],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative py-24">
      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          About <span className="gradient-text">Evo9 Labs</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Transforming businesses through evolution, innovation, and complete
          digital strategy.
        </p>
      </motion.div>

      {/* CARDS GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {/* MISSION */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition"
        >
          <motion.div
            variants={floatSoft}
            initial="initial"
            animate="animate"
            className="w-14 h-14 bg-gradient-to-br from-primary to-secondary p-[1px] rounded-xl mb-6"
          >
            <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
              <Target className="h-7 w-7 text-primary" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition">
            Our Mission
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower businesses with modern, scalable, and meaningful digital
            solutions.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 hover:border-secondary/40 transition"
        >
          <motion.div
            variants={floatSoft}
            initial="initial"
            animate="animate"
            className="w-14 h-14 bg-gradient-to-br from-primary to-secondary p-[1px] rounded-xl mb-6"
          >
            <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition">
            Our Vision
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To be a global innovation leader in digital transformation and
            intelligent systems.
          </p>
        </motion.div>

        {/* PHILOSOPHY */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition"
        >
          <motion.div
            variants={floatSoft}
            initial="initial"
            animate="animate"
            className="w-14 h-14 bg-gradient-to-br from-primary to-secondary p-[1px] rounded-xl mb-6"
          >
            <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition">
            Our Philosophy
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We merge strategy + creativity + technology to build digital
            experiences that truly evolve.
          </p>
        </motion.div>
      </div>

      {/* ============ EVO / 9 / LABS MEANING SECTION ============ */}
      <section className="py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            The Meaning Behind <span className="gradient-text">Evo9 Labs</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Our identity is built on depth, purpose, and complete
            transformation.
          </p>
        </motion.div>

        {/* PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="panel-glass rounded-2xl p-10 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {["Evo", "9", "Labs"].map((label, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <motion.div
                  variants={floatSoft}
                  initial="initial"
                  animate="animate"
                  className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5"
                >
                  <span className="text-3xl font-bold text-primary">
                    {label}
                  </span>
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {label === "Evo" && "Evolution"}
                  {label === "9" && "Completeness"}
                  {label === "Labs" && "Innovation Hub"}
                </h3>

                <p className="text-muted-foreground">
                  {label === "Evo" &&
                    "Continuous growth and transformation at the core of everything we build."}
                  {label === "9" &&
                    "Nine pillars representing a complete full-spectrum digital strategy."}
                  {label === "Labs" &&
                    "Where experimentation, creativity, and technology merge into solutions."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ WHY EVO9 LABS SECTION ============ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why <span className="gradient-text">Evo9 Labs</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              The "9" in Evo9 Labs represents the 9 essential dimensions of
              digital evolution that every modern business must master.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From UX design to cloud infrastructure, mobile apps to analytics —
              we provide end-to-end solutions covering every pillar of
              transformation.
            </p>
            <p className="text-lg text-muted-foreground">
              We focus on evolutionary, strategic growth — not chaos or
              disruption. Sustainable, smart digital progress.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-3 gap-4"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                className="aspect-square bg-primary/10 rounded-lg flex flex-col items-center justify-center text-center p-3 group hover:bg-primary/20 transition-colors"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CORE VALUES SECTION ============ */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card text-center group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Evolve <span className="gradient-text">Together</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business across all 9
            dimensions of the digital evolution framework.
          </p>

          <Link href="/contact">
            <Button className="btn-evolution text-lg px-8 py-4">
              Start the Conversation
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
