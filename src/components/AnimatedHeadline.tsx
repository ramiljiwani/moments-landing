import React from "react";
import { motion } from "framer-motion";
import { theme } from "../lib/theme";

interface AnimatedHeadlineProps {
  text: string;
  className: string;
}

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const sanitize = (w: string) => w.toLowerCase().replace(/[^a-z]/g, '');

export const AnimatedHeadline = ({ text, className }: AnimatedHeadlineProps) => {
  const words = text.split(' ');
  
  return (
    <motion.h1
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
          {sanitize(w) === 'moments' ? (
            <span style={{ color: theme.colors.accent }}>{w}</span>
          ) : (
            w
          )}
        </motion.span>
      ))}
    </motion.h1>
  );
};
