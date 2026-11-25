/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#070914',
        indigo: '#11152D',
        aurora: {
          violet: '#7C3AED',
          purple: '#A855F7',
          cyan: '#22D3EE',
          blue: '#3B82F6',
          mint: '#5EEAD4',
          lavender: '#C4B5FD',
        },
        ink: {
          DEFAULT: '#F8FAFF',
          muted: '#AAB4CC',
          subtle: '#7D88A6',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
