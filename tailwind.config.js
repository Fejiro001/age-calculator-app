/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js}", "index.html"],
  theme: {
    screens: {
      lg: "820px",
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      fontSize: {
        large: "clamp(3.75rem,6rem,5.5rem)"
      },
      colors: {
        primary: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};

