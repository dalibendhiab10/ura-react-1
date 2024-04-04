import { tailwindConfig } from '@storefront-ui/react/tailwind-config';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      colors: {
        'main-color' : '#35A080',
        'white': '#FFFFFF',
      },
      extend:{
      },
    extend: {},
  },
  plugins: [],
}