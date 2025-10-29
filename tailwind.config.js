/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens
        paper: '#F7F2EA',
        ink: '#2B2A29',
        inkMuted: '#4A4743',
        stone: '#595651',
        copper: {
          DEFAULT: '#B8744A',
          warm: '#C97B47',
          pale: '#E9C29E',
        },
        teal: {
          deep: '#0D5C59',
          mid: '#1C7A77',
          pale: '#9BC8C6',
        },
        borderSoft: '#E8E0D5',
        glass: 'rgba(255,255,255,0.7)',
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('kb', '&:focus-visible')
    },
  ],
}
