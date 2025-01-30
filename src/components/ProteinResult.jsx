import React from "react";
import { Box, Typography } from "@mui/material";

const ProteinResult = ({ proteinRange }) => {
  if (!proteinRange) return null;

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
        {proteinRange.minProtein && proteinRange.maxProtein
          ? `${proteinRange.minProtein} - ${proteinRange.maxProtein} g`
          : `${proteinRange.protein} g`}
      </Typography>
    </Box>
  );
};

export default ProteinResult;
