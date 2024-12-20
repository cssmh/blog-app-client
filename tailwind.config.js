/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redBlog: "#f01543",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['dark', 'light'],
  },
};

