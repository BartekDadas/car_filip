import tailwindcssAnimate from "tailwindcss-animate";

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
        border: "var(--color-border)", 
        input: "var(--color-input)", 
        ring: "var(--color-ring)", 
        background: "var(--color-background)", 
        foreground: "var(--color-foreground)", 
        primary: {
          DEFAULT: "var(--color-primary)", 
          foreground: "var(--color-primary-foreground)", 
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", 
          foreground: "var(--color-secondary-foreground)", 
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", 
          foreground: "var(--color-destructive-foreground)", 
        },
        muted: {
          DEFAULT: "var(--color-muted)", 
          foreground: "var(--color-muted-foreground)", 
        },
        accent: {
          DEFAULT: "var(--color-accent)", 
          foreground: "var(--color-accent-foreground)", 
        },
        popover: {
          DEFAULT: "var(--color-popover)", 
          foreground: "var(--color-popover-foreground)", 
        },
        card: {
          DEFAULT: "var(--color-card)", 
          foreground: "var(--color-card-foreground)", 
        },
        success: {
          DEFAULT: "var(--color-success)", 
          foreground: "var(--color-success-foreground)", 
        },
        warning: {
          DEFAULT: "var(--color-warning)", 
          foreground: "var(--color-warning-foreground)", 
        },
        error: {
          DEFAULT: "var(--color-error)", 
          foreground: "var(--color-error-foreground)", 
        },
        surface: "var(--color-surface)", 
        'text-primary': "var(--color-text-primary)", 
        'text-secondary': "var(--color-text-secondary)", 
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
        "silver-glow": "silverGlow 2s ease-in-out infinite alternate",
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
        silverGlow: {
          "0%": { boxShadow: "0 0 5px rgba(226, 232, 240, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(226, 232, 240, 0.2)" },
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
    tailwindcssAnimate,
  ],
}