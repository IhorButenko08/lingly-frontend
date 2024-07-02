import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Border/Primary": "#E1E1E0",
        "Placeholder/Primary": "#E1E1E0",
        "Text/Black": "#282828",
        "Placeholder/Subcolor": "#CDECF2",
        "Text/Subcolor": "#3CB4CA",
        "Main/Background": "#1e1e1e",
        // Background colors ---------------------------
        "Background/Primary": "#121212",
        "Background/Element": "#1B1B1B",
        // Text colors ---------------------------------
        "Text/Primary/Black": "#121212",
        "Text/Primary/Grey": "#7A7A7A",
        "Text/Primary/White": "#FFFFFF",
      },
      fontSize: {
        "header": "3rem",
        "button": "1rem",
        "header/sm" : "2rem",
        "main": "1.5rem",
        // Overview page --------------------------------
        "Overview/header": "5rem",
        "Overview/sub-header": "1.5rem",
      },
      fontFamily: {
        gilory: ["Gilory", "sans-serif"],
      },
      borderRadius: {
        "Primary" : "24px"
      }
    },
  },
  plugins: [],
};
export default config;
