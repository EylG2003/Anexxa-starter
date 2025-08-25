import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1220",    // deep navy
          fg: "#F8FAFC",    // slate-50
          primary: "#22C55E", // green-500
          accent: "#0EA5E9",  // sky-500
          gold: "#EAB308"     // amber-500
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
