import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className: string;
}

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export const AnimatedHeading = ({ text, className }: AnimatedHeadingProps) => {
  const words = text.split(' ');
  
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={{ show: { transition: { staggerChildren: 0.04 } } }}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
          {w}
        </motion.span>
      ))}
    </motion.h2>
  );
};
