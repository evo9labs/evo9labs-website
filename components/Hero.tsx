"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Digital Evolution Background"
          className="w-full h-full object-cover opacity-2"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            The <span className="gradient-text">9 Dimensions</span>
            <br />
            of Digital Evolution
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground"
          >
            Transform your business with innovative technology solutions. From
            startups to enterprises, we help you achieve sustainable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8"
                >
                  Let's Evolve
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>

            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary/30 hover:bg-primary/10 bg-color-none"
                >
                  Explore Services
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
