/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
        colors: {
            primary: "#3498db",
            secondary: "#2ecc71",
            background: "#f5f5f5",
            text: "#333",
        },
        fontSize: {
            sm: "14px",
            base: "16px",
            lg: "24px",
            xl: "32px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            body: ["Roboto", "sans-serif"],
        },
        },
    },
    plugins: [],
};
