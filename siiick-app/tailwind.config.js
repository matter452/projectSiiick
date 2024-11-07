/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-image': "url('/img/jared-tomasek-0NzzGgi4wzo-unsplash.jpg')",
        'drawer-hat': "url('/img/drawer-hat.jpg')",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '3col': 'repeat(3, minmax(0, .175fr))',
      }
    },
  },
  plugins: [],
};
