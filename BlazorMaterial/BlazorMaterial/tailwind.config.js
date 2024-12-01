import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
