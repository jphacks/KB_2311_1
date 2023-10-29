import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "error-color": "#ff0000",
        "pink-color": "#C93E71",
      },
      fontFamily: {
        "m-plus": ['"M PLUS Rounded 1c"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        base: "500px",
        sm: "440px",
        md: "560px",
        lg: "770px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
