import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C5162D',
          redHover: '#A60F23',
          dark: '#1E293B',
          heading: '#1E2749',
          muted: '#64748B',
          lightBg: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    }
  }
};

export default config;
