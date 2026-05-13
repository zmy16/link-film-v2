import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        background: "#0A0A0B",
        surface: "#141416",
        stroke: "#26262A",
        ink: "#EDEDED",
        muted: "#8A8A90",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      borderRadius: {
        none: "0px",
        pill: "9999px",
      },
      transitionTimingFunction: {
        snappy: "linear",
      },
      transitionDuration: {
        snappy: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;