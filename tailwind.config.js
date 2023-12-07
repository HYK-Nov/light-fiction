/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            logo: ['Cafe24Ohsquare'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '3rem',
                xl: '4rem',
                '2xl': '8rem',
            },
        },
        extend: {},
    },
    plugins: [],
    darkMode: 'class',
}

