/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato, sans-serif"],
      nunito: ['"Nunito Sans"', "sans-serif"],
    },
    fontSize: {
      xs: "14px",
      sm: "15px",
      md: "16px",
      lg: "20px",
      xl: "22px",
      "2xl": "26px",
      "3xl": "30px",
      "4xl": "44px",
      "5xl": "54px",
      "6xl": "60px",
      "7xl": "120px",
    },
    screens: {
      "3xs": "450px",

      "2xs": "500px",

      xs: "576px",

      sm: "600px",

      md: "767px",

      lg: "991px",

      xl: "1024px",

      "2xl": "1200px",

      "3xl": "1400px",
    },
    colors: {
      transparent: "transparent",
      "text-color": "#443737",
      "white-color": "#fff",
      "gray-color": "#dedede",
      "dark-gray-color": "#979797",
      "button-color": "#1e2f40",
      "yellow-color": "#fbb731",
      "orange-color": "#f37335",
      "black-navy-color": "#1b2a49",
      "border-footer": "#3e4e5e",
      black: "#000",
      red: "#ff0000",
      "black-overlay": "rgba(0,0,0,0.69)",
    },
    backgroundImage: {
      "hero-pattern":
        "linear-gradient(2.42deg, #f37335 -19.6%, #fbb731 100.79%, #fdc830 100.79%)",
      instruction: "linear-gradient(90deg, #f37735 0%, #f9a232 100%);",
      "footer-background":
        "radial-gradient(100% 100% at 50% 0%, #365368 0%, #1e2f40 100%)",
      "body-background": "url('assets/images/body-background.png')",
      "chevron-down-bg": "url('assets/images/icons/chevron-down.png')",
    },
    extend: {
      maxWidth: {
        sm: "540px",

        md: "720px",

        lg: "960px",

        xl: "1110px",

        "2xl": "1140px",
      },
      backgroundImage: {
        "radient-radial":
          "radial-gradient(100% 100% at 50% 0%, #0c4c7b 0%, #1e2f40 100%)",
        "linear-gradient":
          "linear-gradient(2.42deg, #f37335 -19.6%, #fbb731 100.79%, #fdc830 100.79%)",
      },
    },
  },
  plugins: [],
};
