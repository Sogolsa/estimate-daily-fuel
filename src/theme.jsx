import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#fff",
      secondary: "#aaa",
    },
  },
});
