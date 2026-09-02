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
        'scrapbook': '0 12px 28px -4px rgba(100, 75, 45, 0.14), 0 6px 12px -3px rgba(100, 75, 45, 0.08)',
        'polaroid': '0 10px 24px -2px rgba(0, 0, 0, 0.12), 0 3px 8px -2px rgba(0, 0, 0, 0.08)',
        'pin': '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -2px rgba(0, 0, 0, 0.15)',
        'glow-orange': '0 0 25px rgba(255, 119, 0, 0.35)',
        'glow-yellow': '0 0 30px rgba(254, 240, 138, 0.55)',
        'glow-cyan': '0 0 30px rgba(56, 189, 248, 0.45)',
        'glow-rose': '0 0 30px rgba(244, 63, 94, 0.35)',
        'glass-dark': '0 16px 40px -8px rgba(0, 0, 0, 0.75)',
        'glass-warm': '0 16px 40px -8px rgba(180, 130, 70, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bloom-pop': 'bloomPop 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-7px) rotate(1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
        bloomPop: {
          '0%': { transform: 'scale(0.3) rotate(-8deg)', opacity: '0' },
          '70%': { transform: 'scale(1.06) rotate(2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.94)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
