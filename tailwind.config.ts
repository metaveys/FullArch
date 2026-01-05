import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070b",
        surface: "#0b0f18",
        "surface-alt": "#151b29",
        primary: "#4f8cff",
        "primary-soft": "#223866",
        accent: "#7fd4ff",
        muted: "#9ca3af",
        border: "#1f2933"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(79,140,255,0.16), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;


