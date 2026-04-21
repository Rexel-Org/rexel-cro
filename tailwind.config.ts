import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        rexel: {
          blue: "hsl(var(--rexel-blue))",
          volta: "hsl(var(--rexel-volta))",
          link: "hsl(var(--rexel-blue-link))",
          yellow: "hsl(var(--rexel-yellow))",
          green: "hsl(var(--rexel-green))",
          "green-soft": "hsl(var(--rexel-green-soft))",
          /* Utilities */
          eclipse: "hsl(var(--rexel-eclipse))",
          kelvin: "hsl(var(--rexel-kelvin))",
          seebeck: "hsl(var(--rexel-seebeck))",
          "newton-blue": "hsl(var(--rexel-newton-blue))",
          "newton-yellow": "hsl(var(--rexel-newton-yellow))",
          joule: "hsl(var(--rexel-joule))",
          ohm: "hsl(var(--rexel-ohm))",
          watt: "hsl(var(--rexel-watt))",
          /* Contextual */
          new: "hsl(var(--rexel-new))",
          promo: "hsl(var(--rexel-promo))",
          bought: "hsl(var(--rexel-bought))",
          "bought-soft": "hsl(var(--rexel-bought-soft))",
          "bought-foreground": "hsl(var(--rexel-bought-foreground))",
          "promo-soft": "hsl(var(--rexel-promo-soft))",
          "promo-foreground": "hsl(var(--rexel-promo-foreground))",
          "loyalty-soft": "hsl(var(--rexel-loyalty-soft))",
          "loyalty-foreground": "hsl(var(--rexel-loyalty-foreground))",
          rplus: "hsl(var(--rexel-rplus))",
          loyalty: "hsl(var(--rexel-loyalty))",
          text: "hsl(var(--rexel-text))",
          "text-muted": "hsl(var(--rexel-text-muted))",
          surface: "hsl(var(--rexel-surface))",
          "surface-alt": "hsl(var(--rexel-surface-alt))",
          "info-bg": "hsl(var(--rexel-info-bg))",
          "info-border": "hsl(var(--rexel-info-border))",
          divider: "hsl(var(--rexel-divider))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        display: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
