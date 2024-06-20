import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          primary: "#f1f5f9", //100
          secondary: "#ffffff", //white
        },
        // Dark theme colors
        dark: {
          primary: "#0f172a", //900
          secondary: "#1e293b", //800
        },
        accent: "#06b6d4",
      },
    },
  },
  plugins: [],
};

export default config;
