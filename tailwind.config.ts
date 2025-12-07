import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},

				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'drift': {
					'0%': { transform: 'translateX(0) translateY(0)', opacity: '0.3' },
					'50%': { opacity: '0.6' },
					'100%': { transform: 'translateX(100px) translateY(-100px)', opacity: '0' }
				},
				'cloud-move': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'snowfall': {
					'0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0.3' }
				},
				'ice-shimmer': {
					'0%, 100%': { 
						textShadow: '0 0 10px rgba(100, 220, 255, 0.8), 0 0 20px rgba(100, 220, 255, 0.6), 0 0 30px rgba(100, 220, 255, 0.4)',
						filter: 'brightness(1)'
					},
					'50%': { 
						textShadow: '0 0 20px rgba(150, 240, 255, 1), 0 0 40px rgba(150, 240, 255, 0.8), 0 0 60px rgba(150, 240, 255, 0.6)',
						filter: 'brightness(1.2)'
					}
				},
				'blink': {
					'0%, 49%, 100%': { opacity: '1' },
					'50%, 99%': { opacity: '0.3' }
				},
				'color-shift': {
					'0%, 100%': { backgroundColor: 'hsl(199, 89%, 48%)' },
					'25%': { backgroundColor: 'hsl(271, 91%, 65%)' },
					'50%': { backgroundColor: 'hsl(328, 86%, 70%)' },
					'75%': { backgroundColor: 'hsl(60, 100%, 60%)' }
				},
				'confetti': {
					'0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(-20px) rotate(360deg)', opacity: '0' }
				},
				'vapor-rise': {
					'0%': { transform: 'translateY(100%) scale(0.8)', opacity: '0' },
					'50%': { opacity: '0.6' },
					'100%': { transform: 'translateY(-100%) scale(1.2)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'drift': 'drift 8s ease-out infinite',
				'cloud-move': 'cloud-move 30s linear infinite',
				'snowfall': 'snowfall 10s linear infinite',
				'ice-shimmer': 'ice-shimmer 2s ease-in-out infinite',
				'blink': 'blink 1s ease-in-out infinite',
				'color-shift': 'color-shift 3s ease-in-out infinite',
				'confetti': 'confetti 1s ease-out',
				'vapor-rise': 'vapor-rise 8s ease-out infinite'
			},
			backgroundSize: {
				'200': '200% 200%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;