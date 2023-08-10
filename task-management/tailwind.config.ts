import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // theme: {
    //   screens: {
    //     lg: { max: "991px" },
    //     // => @media (max-width: 991px) { ... }
    //     md: { max: "767px" },
    //     // => @media (max-width: 767px) { ... }
    //     sm: { max: "479px" },
    //     // => @media (max-width: 479px) { ... }
    //   },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config