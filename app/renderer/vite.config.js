const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, '.'),
  base: './',
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: true
  }
}); 