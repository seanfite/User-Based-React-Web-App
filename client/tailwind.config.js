/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all JavaScript/TypeScript and JSX/TSX files in the src directory.
    'node_modules/flowbite-react/lib/esm/**/*.js' // Includes Flowbite React component library files for Tailwind to process their classes.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Incorporates the Flowbite plugin to integrate Flowbite components with Tailwind CSS.
  ],
}

