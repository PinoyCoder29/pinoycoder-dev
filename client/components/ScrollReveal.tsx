"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  x?: number;
  y?: number;
};

export default function ScrollReveal({ children, x = 0, y = 60 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
