export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f8efe5',
        amber: '#d78d4a',
        clay: '#b9623d',
        olive: '#3e5f56',
        walnut: '#3a2a24',
        gold: '#f0c57d',
      },
      boxShadow: {
        warm: '0 18px 40px rgba(58,42,36,0.12)',
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
