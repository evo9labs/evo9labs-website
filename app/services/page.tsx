"use client";

import { evolution_steps, services } from "@/constant";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // adjust if you have a custom Button

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

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <section
          id="services"
          className="py-20 md:py-22 relative overflow-hidden"
        >
          <div className="container px-4">
            {/* Section Title */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete digital solutions across nine core dimensions to evolve
                your business
              </p>
            </div>

            {/* Services Grid */}
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
                  <ServiceCard service={service} isServicePage={true} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Evolution Process Section */}
          <div className="container px-4 mt-32 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-center mb-4"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Evolution
              </span>{" "}
              Process
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto text-center mb-16"
            >
              A proven methodology that ensures successful digital
              transformation from concept to deployment.
            </motion.p>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
              {evolution_steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 
                   backdrop-blur-sm transition-all duration-500 hover:scale-[1.03]
                   hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-white mb-2 text-sm">
                      Deliverables:
                    </h4>
                    <ul className="space-y-1 text-slate-400 text-sm text-left inline-block">
                      {step.deliverables.map((d, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-400"
                        >
                          <span className="text-blue-400">↠</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <motion.section
            className="pt-40 pb-20 px-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // <- important
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your
                <span className="text-gradient">Digital Evolution</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a customized solution that
                drives your business forward.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
                  Let's Evolve Together
                </Button>
              </Link>
            </div>
          </motion.section>

          {/* Ambient Lights */}
          <div className="ambient-light top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary to-transparent"></div>
          <div className="ambient-light bottom-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary to-transparent"></div>
          <div className="ambient-light top-2/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/50 to-secondary/50"></div>
        </section>
      </div>
    </div>
  );
}
