module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        typing: "typing 3s steps(30) 1s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(-5px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "76%" },
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
