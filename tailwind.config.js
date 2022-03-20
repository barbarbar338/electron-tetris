const twLineClamp = require("@tailwindcss/line-clamp");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media",
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [twLineClamp],
};
