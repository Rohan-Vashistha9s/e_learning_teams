/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'test-bg': '#CDD8FF',
        'test-text': '#717FB0',
        'heading-text': '#55578D',
        'icon-bg-01': '#687EF3',
        'icon-bg-02': '#D8F9ED',
        'icon-text-01': '#41BE90',
        'icon-text-02': '#ee3175',
        'icon-text-03': '#2dd38e',
        'dot-01': '#F3A268',
        'dot-02': '#34E7A5',
        'header-text': '#49BBBD',
        'paragraph-text': '#696984',
      },
    },
  },
  plugins: [],
}