// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");
// const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         neutral: colors.neutral,
//       },
//     },
//   },
//   plugins: [addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        emerald: colors.emerald,
      },
    },

  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}