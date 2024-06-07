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
      },
      fontSize: {
        "header": "3rem",
        "header/sm" : "2rem",
        "main": "1.5rem",
      },
      fontFamily: {
        gilory: ["Gilory", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
