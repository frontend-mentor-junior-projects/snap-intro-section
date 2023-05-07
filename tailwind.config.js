/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral-100': 'hsl(0, 0%, 98%)',
				'neutral-200': 'hsl(0, 0%, 41%)',
				'neutral-300': 'hsl(0, 0%, 8%)',
			},
			fontSize: {
				body: '18px',
				'title-desktop': '64px',
			},
			fontFamily: {
				sans: ['Epilogue', 'sans-serif'],
			},
			backgroundImage: {
				'hero-mobile': '../public/assets/images/image-hero-mobile.png',
				'hero-desktop': '../public/assets/images/image-hero-desktop.png',
			},
		},
	},
	plugins: [],
}
