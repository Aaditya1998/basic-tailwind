// postcss.config.js

module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: { grid: true },
      stage: 3,
    },
  },
};
