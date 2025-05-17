"use client"
// components/AnimatedCard.js
import { motion } from 'framer-motion';

export function AnimatedCard({ children } : {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl border border-gray-200"
    >
      {children}
    </motion.div>
  );
}