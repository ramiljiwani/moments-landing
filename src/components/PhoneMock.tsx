import React from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { theme } from "../lib/theme";

interface PhoneMockProps {
  src?: string;
  caption?: string;
}

export const PhoneMock = ({ caption }: PhoneMockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative w-[280px] h-[560px] rounded-[36px] border-8"
      style={{
        borderColor: theme.colors.text,
        background: theme.colors.secondary,
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.2), inset 0 0 0 2px rgba(0,0,0,0.05)",
      }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full opacity-70" style={{ background: theme.colors.tertiary }} />
      <div className="absolute inset-0 rounded-[28px] overflow-hidden">
        {/* Screen placeholder */}
        <div
          className="h-full w-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#0f0f0f,#151515)" }}
        >
          <div className="flex flex-col items-center gap-3">
            <ImageIcon size={32} />
            <p className="text-sm" style={{ color: theme.colors.tertiary }}>
              App preview goes here
            </p>
          </div>
        </div>
      </div>
      {caption && (
        <div className="absolute -bottom-10 w-full text-center text-xs" style={{ color: theme.colors.tertiary }}>
          {caption}
        </div>
      )}
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[42px] blur-2xl opacity-30"
        style={{ background: theme.colors.accent }}
      />
    </motion.div>
  );
};
