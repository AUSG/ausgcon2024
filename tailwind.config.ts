import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
      },
      colors: {
        primary: "#E94937",
      },
      backgroundColor: {
        scene: "#CDF6FF",
      },
    },
  },
};
export default config;
