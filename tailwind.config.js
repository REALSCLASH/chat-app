/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}",   "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      }, 
      colors: {

        "gm-blackblue": "#09081A",
        "gm-lblue": "#084D73",
        "gm-dblue": "#062345",
        "gm-salmon": "#FE7066",
        "gm-llblue": "#A3CDF2",

       
      },
    },
  },
  plugins: [  require('flowbite/plugin')],
}

