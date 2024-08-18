import type { Config } from "tailwindcss";

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
      colors: {
        primary: "#F4862C",
      },
      backgroundColor: {
        scene: "#CDF6FF",
      },
    },
  },
  plugins: [],
};
export default config;
