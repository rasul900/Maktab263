import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1A2B",
        "navy-light": "#1A2D45",
        gold: "#C9A961",
        "gold-light": "#D4BC82",
        champagne: "#E8D5A3",
        soft: "#F5F6F8",
        muted: "#6B7280",
        ivory: "#FAFAF8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 20px 60px rgba(15, 26, 43, 0.14)",
        glass: "0 8px 32px rgba(15, 26, 43, 0.1)",
        card: "0 4px 24px rgba(15, 26, 43, 0.08)",
        gold: "0 8px 30px rgba(201, 169, 97, 0.25)",
        "inner-gold": "inset 0 1px 0 rgba(255,255,255,0.15)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(15,26,43,0.92) 0%, rgba(15,26,43,0.72) 45%, rgba(26,45,69,0.55) 100%)",
        "section-overlay":
          "linear-gradient(160deg, rgba(15,26,43,0.82) 0%, rgba(15,26,43,0.62) 50%, rgba(15,26,43,0.48) 100%)",
        shine:
          "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.35) 50%, transparent 75%)",
        "gold-shimmer":
          "linear-gradient(90deg, #C9A961 0%, #E8D5A3 50%, #C9A961 100%)",
        "mesh-navy":
          "radial-gradient(at 40% 20%, rgba(201,169,97,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(26,45,69,0.4) 0px, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
