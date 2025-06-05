// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'patrick': ['Patrick Hand', 'cursive'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
                float: 'float 3s ease-in-out infinite'
            }
        },
    },
    plugins: [],
}
