import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch, Typography, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

import MyForm from "./components/MyForm";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <Switch
          checked={isDarkMode}
          onChange={handleThemeToggle}
          inputProps={{ "aria-label": "theme toggle" }}
        />

        <MyForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
