/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte,ts}"],
	theme: {
		extend: {
         container: {
            center: true,
         },
         colors: {
            "element-group": "rgb(var(--element-group))",
         }
      },
	},
	plugins: [],
};
