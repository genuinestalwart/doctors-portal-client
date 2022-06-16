module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: "#19D3AE",
					secondary: "#0FCFEC",
					accent: "#3A4256",
					neutral: "#000000",
					"base-100": "#ffffff",
				},
			},
		],
	},
};
