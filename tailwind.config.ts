import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          500: "#2554c7",
          600: "#1e44a3",
          700: "#173580",
        },
      },
    },
  },
  plugins: [],
};
export default config;
