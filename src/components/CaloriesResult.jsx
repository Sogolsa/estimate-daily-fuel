import React from "react";
import { Box, Typography } from "@mui/material";

const CaloriesResult = ({ calorieRange }) => {
  if (!calorieRange?.lower || !calorieRange?.upper) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mt: 2,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: "#fa4454", textAlign: "center" }}>
        Estimated Calories:
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        {calorieRange.lower} - {calorieRange.upper}
      </Typography>
    </Box>
  );
};

export default CaloriesResult;
