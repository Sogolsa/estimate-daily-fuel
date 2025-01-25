import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffff",
      paper: "f4f4f4",
    },
    text: {
      primary: "#213547",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
      paper: "'#1a1a1a'",
    },
    text: {
      primary: "rgba(255, 255, 255, 255)",
    },
  },
});
