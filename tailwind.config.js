/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        'spin-gradient': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 10px rgba(255, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 0, 255, 0.5)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.8), 0 0 60px rgba(0, 0, 255, 0.8)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(255, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 0, 255, 0.5)' 
          },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(5)' },
          '50%': { transform: 'translateY(-1px)' },
        },
        customBounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        popUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '0', transform: 'scale(0.8)' },
        },
        videoBar: {
          '0%, 20%': { 
            transform: 'scaleX(0)', 
            'transform-origin': 'left'
          },
          '40%': { 
            transform: 'scaleX(1)', 
            'transform-origin': 'left'
          },
          '60%': { 
            transform: 'scaleX(1)', 
            'transform-origin': 'right'
          },
        },
      },

      animation: {
        'bounce-slow': 'bounceSlow 12.4s ease-in-out infinite',
        'spin-slow': 'spin 1.7s linear infinite',
        'spin-slower': 'spin 4s linear infinite',
        'spin-slowest': 'spin 10s linear infinite',
        'glow-spin': 'spin 4s linear infinite, glow 4s ease-in-out infinite',
        'spin-gradient': 'spin-gradient 5s linear infinite',
        'pop-up': 'popUp 3.5s ease-in-out infinite',
        'custom-bounce': 'customBounce 2.5s infinite',
        'videoBar': 'videoBar 4s ease-in-out forwards'
      },
      backgroundImage: {
        'gradient-left': 'linear-gradient(to bottom, #89F9E8, #FACB7B)',
        'gradient-top': 'linear-gradient(to left, #D87CEE, #FACB7B)',
        'gradient-bottom': 'linear-gradient(to left, #9099FC, #89F9E8)',
        'gradient-right': 'linear-gradient(to top, #9099FC, #D87CEE)',
      },
      boxShadow: {
        rainbow: '0 0 5px rgba(255, 0, 0, 0.4), 0 0 10px rgba(255, 127, 0, 0.4), 0 0 15px rgba(255, 255, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.4), 0 0 25px rgba(0, 0, 255, 0.4), 0 0 30px rgba(75, 0, 130, 0.4), 0 0 35px rgba(148, 0, 211, 0.4)',
        'custom-white': '0px 0px 5px #fff',
      },

      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

