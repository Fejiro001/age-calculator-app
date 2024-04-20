/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/script.js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "label-font": "clamp(.9rem,1.1vw,2rem)",
        "input-font": "clamp(1.25rem,2.2vw,2.5rem)",
        large: "clamp(3.3rem,8vw,6.5rem)",
        small: "clamp(.7rem,1vw,1.5rem)",
      },
      colors: {
        primary: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      screens: {
        lg: "820px",
      },
    },
  },
  plugins: [],
};

