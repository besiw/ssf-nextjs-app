import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        px: "1px",
        19: "4.6875rem",
        100: "25rem",
        272: "17rem",
        354: "22.125rem",
        440: "27.5rem",
        548: "34.25rem",
        621: "38.8rem",
        642: "40.125rem",
        734: "45.875rem",
        950: "59.375rem",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      width: {
        180: "45rem",
        300: "75rem",
      },
      screens: {
        "1.5xl": "1360px",
      },
      fontSize: {
        "16px": "16px",
        sm: "0.8rem",
      },
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        75: "#F9F9F9",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        DEFAULT: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#D5D5D5",
        A200: "#AAAAAA",
        A400: "#303030",
        A700: "#616161",
        bgdark: "rgba(38, 37, 37, 1)",
      },
      white: {
        warm: "#F3E7DE",
        DEFAULT: "#FFF",
        darkText01: "rgba(243, 231, 222, 1)",
        darkText050: " rgba(243, 231, 222, 0.5)",
        darkText02: " rgba(243, 231, 222, 0.7)",
      },
      PrimaryColor: {
        3: "rgba(242, 138, 93,0.03)",
        5: "rgba(242, 138, 93,0.05)",
        12: "rgba(242, 138, 93,0.12)",
        20: "rgba(242, 138, 93,0.2)",
        DEFAULT: "#F28A5D",
        bgDark05: "rgba(244, 155, 117, 0.00)",
        bgDark10: "rgba(244, 155, 117, 0.1)",
        bgDark12: "rgba(242, 138, 93, 0.12)",
        bgDark15: "rgba(244, 155, 117, 0.15)",
        bgDark86: "rgba(244, 155, 117, 0.86)",
      },
      black: {
        100: "rgba(0,0,0,0.5)",
        200: "#111111",
        300: "#1D1D1D",
        400: "#1A1A1A",
        500: "#252525",
        600: "#242424",
        DEFAULT: "rgba(0,0,0)",
        background: "rgba(17, 17, 17, 1)",
        blackground02: "rgba(29, 29, 29, 1)",
        blackdiv: "rgba(38, 37, 37, 1)",
        diaphaneity60: "rgba(0,0,0,0.6)",
      },
      pink: {
        200: "#FF86C0",
      },
      green: {
        200: "#A3F19C",
      },
      cyan: {
        200: "#89E8DC",
      },
      yellow: {
        100: "#F5E179",
      },
      red: {
        100: "rgba(242, 93, 93, 1)",
      },
    },
  },
  plugins: [],
  lineClamp: ["responsive", "hover"],
};
export default config;
