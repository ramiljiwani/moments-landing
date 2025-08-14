import React from "react";
import { motion } from "framer-motion";
import { theme } from "../lib/theme";

interface FeatureCardProps {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  desc: string;
}

export const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02, boxShadow: `0 14px 40px ${theme.colors.accent}22` }}
    className="rounded-3xl p-6 shadow-sm"
    style={{ border: `1px solid ${theme.colors.text}14`, background: '#FFFFFF07' }}
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${theme.colors.accent}15`, color: theme.colors.accent }}>
      <Icon size={22} />
    </div>
    <h3 className="mb-2 text-lg" style={{ color: theme.colors.text }}>{title}</h3>
    <p className="text-sm leading-relaxed" style={{ color: theme.colors.tertiary }}>{desc}</p>
  </motion.div>
);
