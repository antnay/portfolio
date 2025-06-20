const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {},
  plugins: [addDynamicIconSelectors()]
};
