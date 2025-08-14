export const theme = {
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    primary: "#FFFFFF",
    secondary: "#000000",
    tertiary: "#B3B3B3",
    accent: "#FF2D55",
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  fontSizes: { sm: 16, md: 20, lg: 32, xl: 48 },
  radii: { sm: 4, md: 8, lg: 16 },
  border: { width: 2, color: "#000000" },
};

// Utility: join class names
export const cx = (...c: (string | undefined | null | false)[]) => c.filter(Boolean).join(" ");
