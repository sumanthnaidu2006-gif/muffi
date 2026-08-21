/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrapbook: {
          bg: '#fdf6e2',
          paper: '#fffdf7',
          parchment: '#f5edd6',
          warmBorder: '#e8dcba',
          kraft: '#e6c894',
          accentPink: '#f9a8d4',
          accentYellow: '#fef08a',
          accentOrange: '#fed7aa',
          narutoOrange: '#ff7700',
          narutoBlue: '#1e3a8a',
          konohaGreen: '#22c55e',
          textDark: '#453a2d',
          textMuted: '#7c6f5d'
        }
      },
      fontFamily: {
        handwriting: ['"Caveat"', '"Patrick Hand"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        cute: ['"Patrick Hand"', 'cursive']
      },
      boxShadow: {
        'scrapbook': '0 10px 25px -5px rgba(100, 75, 45, 0.15), 0 8px 10px -6px rgba(100, 75, 45, 0.1)',
        'polaroid': '0 8px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
        'pin': '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
        'glow-orange': '0 0 20px rgba(255, 119, 0, 0.35)',
        'glow-yellow': '0 0 25px rgba(254, 240, 138, 0.6)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bloom-pop': 'bloomPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bloomPop: {
          '0%': { transform: 'scale(0.3) rotate(-10deg)', opacity: '0' },
          '70%': { transform: 'scale(1.08) rotate(3deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
