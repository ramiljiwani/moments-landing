import React from "react";
import { motion } from "framer-motion";
import { theme } from "../lib/theme";

interface AccentBadgeProps {
  children: React.ReactNode;
}

export const AccentBadge = ({ children }: AccentBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-wide"
    style={{ background: `${theme.colors.accent}15`, color: theme.colors.accent, border: `1px solid ${theme.colors.accent}` }}
  >
    {children}
  </motion.div>
);
