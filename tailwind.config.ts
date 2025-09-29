// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marsala: {
          "50":  "#f9f2f3",
          "100": "#f2e4e6",
          "200": "#e0bfc5",
          "300": "#cc98a3",
          "400": "#b86f80",
          "500": "#9f3b51",
          "600": "#8f3247",
          "700": "#782a3b",
          "800": "#61222f",
          "900": "#491a23",
        },
      },
    },
  },
  plugins: [],
};

export default config;
