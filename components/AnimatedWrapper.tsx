"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AnimatedWrapper({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="flex"
    >
      {children}
    </motion.div>
  );
}
