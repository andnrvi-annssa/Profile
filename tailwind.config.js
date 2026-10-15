/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semua warna tema membaca CSS variable di src/index.css (light & dark).
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        tint: 'rgb(var(--c-tint) / <alpha-value>)',
        soft: 'rgb(var(--c-soft) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--c-accent-ink) / <alpha-value>)',
        btn: 'rgb(var(--c-btn) / <alpha-value>)',
        'btn-fg': 'rgb(var(--c-btn-fg) / <alpha-value>)',
        'btn-hover': 'rgb(var(--c-btn-hover) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgb(157 23 77 / 0.25)',
        lift: '0 18px 40px -18px rgb(63 41 55 / 0.35)',
      },
    },
  },
  plugins: [],
}
