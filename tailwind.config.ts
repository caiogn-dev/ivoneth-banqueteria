// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			marsala: {
  				'50': '#f9f2f3',
  				'100': '#f2e4e6',
  				'200': '#e0bfc5',
  				'300': '#cc98a3',
  				'400': '#b86f80',
  				'500': '#9f3b51',
  				'600': '#8f3247',
  				'700': '#782a3b',
  				'800': '#61222f',
  				'900': '#491a23'
  			}
  		},
  		borderRadius: {
  			xl: '0.75rem'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"), // opcional, p/ shadcn
  ],
};
export default config;
