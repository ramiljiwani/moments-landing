import React from "react";
import { motion } from "framer-motion";
import { theme } from "../lib/theme";

interface StepCardProps {
  n: number;
  icon: React.ComponentType<{ size: number }>;
  title: string;
  desc: string;
}

export const StepCard = ({ n, icon: Icon, title, desc }: StepCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="relative rounded-3xl p-6"
    style={{ border: `1px solid ${theme.colors.text}14`, background: '#FFFFFF07' }}
  >
    <div className="absolute -top-4 left-6 h-8 w-8 grid place-items-center rounded-full text-sm font-semibold" style={{ background: theme.colors.text, color: theme.colors.secondary }}>{n}</div>
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${theme.colors.accent}15`, color: theme.colors.accent }}>
      <Icon size={18} />
    </div>
    <h4 className="font-medium" style={{ color: theme.colors.text }}>{title}</h4>
    <p className="text-sm mt-1" style={{ color: theme.colors.tertiary }}>{desc}</p>
  </motion.div>
);
