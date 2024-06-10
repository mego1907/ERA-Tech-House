/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "header-bg": "url('/assets/header-bg.png')",
        "our-customers-bg": "url('/assets/our-customers-bg.png')",
        "contact-img": "url('/assets/contact.png')"
      },
      colors: {
        "navbar-bg" : "rgba(0, 0, 0, 77%)",
        "overlay-bg" : "rgba(0, 0, 0, 57%)",
        "mainColor": "#55AFAA",
        "desc": "#D1D1D1",
        "serv-box": "rgba(59, 59, 59, 0.8)",
        "serv1": "#3B3B3B"
      }
    },
  },
  plugins: [],
}
