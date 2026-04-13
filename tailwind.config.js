/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gold-opacity-20 */
        input: "var(--color-input)", /* elevated-surface */
        ring: "var(--color-ring)", /* metallic-gold */
        background: "var(--color-background)", /* deep-charcoal */
        foreground: "var(--color-foreground)", /* warm-white */
        primary: {
          DEFAULT: "var(--color-primary)", /* metallic-gold */
          foreground: "var(--color-primary-foreground)", /* deep-charcoal */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* lighter-gold */
          foreground: "var(--color-secondary-foreground)", /* deep-charcoal */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clean-red */
          foreground: "var(--color-destructive-foreground)", /* warm-white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* muted-surface */
          foreground: "var(--color-muted-foreground)", /* mid-tone-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* warm-cream */
          foreground: "var(--color-accent-foreground)", /* deep-charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated-surface */
          foreground: "var(--color-popover-foreground)", /* warm-white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated-surface */
          foreground: "var(--color-card-foreground)", /* warm-white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* contemporary-green */
          foreground: "var(--color-success-foreground)", /* deep-charcoal */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber */
          foreground: "var(--color-warning-foreground)", /* deep-charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clean-red */
          foreground: "var(--color-error-foreground)", /* warm-white */
        },
        surface: "var(--color-surface)", /* elevated-surface */
        'text-primary': "var(--color-text-primary)", /* warm-white */
        'text-secondary': "var(--color-text-secondary)", /* mid-tone-gray */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      animation: {
        "fade-in": "fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "shimmer": "shimmer 2s infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "gold-glow": "goldGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldGlow: {
          "0%": { boxShadow: "0 0 5px rgba(198, 151, 49, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(198, 151, 49, 0.4)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}