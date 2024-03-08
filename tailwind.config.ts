import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "anta": ["Anta", "sans-serif"],
      "slab": ["Roboto Slab", "serif"]
    },
    extend: {
      colors: {
        "orange-cust": "#FF5001",
        "white-cust": "#EDF5E1",
        "cyan-cust": "#5CDB95",
        "choco-cust": "#907163",
        "blue-cust": "#379683",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
