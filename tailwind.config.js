/* eslint-disable no-unused-vars */
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';
import FontsPlugin from 'unplugin-fonts/vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'main-color': '#35A080',
      'white': '#FFFFFF',
    },
    extend: {
    },
  },
  plugins: [
    FontsPlugin({
      google: {
        families: [
          {
            name: 'Urbanist',
            styles: 'ital,wght@0,100..900;1,100..900',
          },
        ],
      },
    }),
  ],
}