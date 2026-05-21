import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sequence: "#08080a",
      },
      boxShadow: {
        ember: "0 24px 90px rgba(211, 107, 43, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
