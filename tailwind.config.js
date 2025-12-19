/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.12), transparent 25%), radial-gradient(circle at 70% 10%, rgba(255,255,255,0.18), transparent 25%), linear-gradient(120deg, #177f52 0%, #20b15b 35%, #47d96c 100%)',
        'footer-gradient':
          'radial-gradient(circle at 10% 80%, rgba(255,255,255,0.16), transparent 26%), radial-gradient(circle at 70% 90%, rgba(255,255,255,0.16), transparent 26%), linear-gradient(120deg, #177f52 0%, #20b15b 35%, #47d96c 100%)',
      },
    },
  },
  plugins: [],
}
