/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
        cs: "linear-gradient(135deg, #201340 4%, #0D0D78 60%)",
        cg: "linear-gradient(135deg, #000000 44%, #080530 77%, #080b5e 100%)",
      },
      
      width: {
        xs: "290px",
      },
    },
  },
  plugins: [],
};
