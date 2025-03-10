import React from "react";
import { Box, Typography } from "@mui/material";

const ProteinResult = ({ proteinRange }) => {
  if (!proteinRange) return null;

  const { minProtein, maxProtein, protein, method } = proteinRange;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // mt: 2,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fa4454",
          textAlign: "center",
          fontSize: { xs: "1.2em", sm: "1.3em", md: "1.8em" },
        }}
      >
        Protein
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.2em", sm: "1.5em", md: "2em" },
          textAlign: "center",
        }}
      >
        {minProtein && maxProtein
          ? `${minProtein} - ${maxProtein} g`
          : `${protein} g`}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.9em", sm: "1em" },
          color: "gray",
          textAlign: "center",
          mt: 1,
        }}
      >
        {method === "calorie-based"
          ? "(Based on calories, gender not selected.)"
          : "(Based on gender, activity level, goal and level.)"}
      </Typography>
    </Box>
  );
};

export default ProteinResult;
