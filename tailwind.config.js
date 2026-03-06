module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
		"app/**/*.{ts,tsx}",
		"components/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'xs': '375px',
				'xxs': '320px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji"',
					'Segoe UI Emoji"',
					'Segoe UI Symbol"',
					'Noto Color Emoji"'
				]
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-up': {
					from: { transform: 'translateY(8px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'expand-width': {
					from: { transform: 'scaleX(0)' },
					to: { transform: 'scaleX(1)' }
				},
				'pulse-dot': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.5)', opacity: '0.4' }
				},
				'fade-slide-up': {
					from: { transform: 'translateY(6px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'shimmer': {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.4s ease-out forwards',
				'expand-width': 'expand-width 0.5s ease-out forwards',
				'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
				'fade-slide-up': 'fade-slide-up 0.35s ease-out forwards',
				'shimmer': 'shimmer 3s linear infinite'
			}
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	darkMode: ["class"],
};