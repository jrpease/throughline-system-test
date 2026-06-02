/** Tailwind config — consumes the generated @ds/tokens preset (theme → CSS vars). */
const tokensPreset = require("@ds/tokens/tailwind");

module.exports = {
  presets: [tokensPreset],
  darkMode: ["class", ".dark"],
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
