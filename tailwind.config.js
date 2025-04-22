/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        darkerGrotesque: ['Darker Grotesque', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },               
      backgroundImage: {
        'hero-image': "url('./images/hero2.svg')",
      },
      colors: {
        propsagreen: '#86EBA8',
        beige: '#FBF9F4',
        highlight: '#CBFBDA',
        nice: '#009473',
        emerald: '#00342B',
        hover: '#66cc66',
        burnham: {
          '50': 'oklch(96.01% 0.09 154.71)',
          '100': 'oklch(91.54% 0.16 151.83)',
          '200': 'oklch(83.95% 0.26 147.58)',
          '300': 'oklch(73.18% 0.37 140.91)',
          '400': 'oklch(62.31% 0.52 140.05)',
          '500': 'oklch(54.06% 0.51 144.67)',
          '600': 'oklch(45.04% 0.49 146.57)',
          '700': 'oklch(37.68% 0.43 147.39)',
          '800': 'oklch(30.95% 0.39 148.81)',
          '900': 'oklch(26.20% 0.33 150.10)',
          '950': 'oklch(17.25% 0.27 149.69)',
          'primary': '#F3D394',
        },
        'new-orleans': {
          '50': 'oklch(95.30% 0.035 83.02)',
          '100': 'oklch(92.20% 0.063 85.34)',
          '200': 'oklch(85.00% 0.106 89.56)',
          '300': 'oklch(79.90% 0.136 91.45)',
          '400': 'oklch(71.50% 0.221 82.34)',
          '500': 'oklch(66.40% 0.252 79.56)',
          '600': 'oklch(61.40% 0.272 77.45)',
          '700': 'oklch(51.30% 0.252 75.34)',
          '800': 'oklch(43.50% 0.238 73.45)',
          '900': 'oklch(36.80% 0.221 70.34)',
          '950': 'oklch(19.40% 0.153 75.34)',
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('tailwind-scroll-behavior'),
  ],

  
};
