/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'patrick': ['Patrick Hand', 'cursive'],
            },
            keyframes: {
                twinkle: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
                    '50%': { opacity: '1', transform: 'scale(1.1)' },
                }
            },
            animation: {
                twinkle: 'twinkle 2s infinite ease-in-out'
            }
        },
    },
    plugins: [],
}
