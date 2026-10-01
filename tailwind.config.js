/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: [
    "translate-y-full",
    "opacity-0",
    "pointer-events-none",
    "border-[#9B2C2C]",
    "bg-ink-900",
    "bg-powder-300",
    "flex",
    "hidden",
    "underline",
    "decoration-blush-300",
    "underline-offset-2",
    "hover:text-blush-400",
  ],
  theme: {
    extend: {
      colors: {
        powder: {
          50: "#FBF7F3",
          100: "#F6EDE6",
          200: "#EEDDD3",
          300: "#E4C9BB",
          400: "#D4A99A",
        },
        blush: {
          50: "#FBF4F5",
          100: "#F7E6E9",
          200: "#EFC9D0",
          300: "#E3A8B4",
          400: "#D4899A",
        },
        ink: {
          700: "#4A4240",
          800: "#3A3331",
          900: "#2C2624",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
