import React from "react";
import { Box, Typography } from "@mui/material";

const FatResult = ({ fatRange }) => {
  if (!fatRange || fatRange.lower === undefined || fatRange.upper === undefined)
    return null;

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
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.2em", sm: "1.5em", md: "2em" },
          textAlign: "center",
        }}
      >
        Fat:<span> </span>
        {fatRange.lower} - {fatRange.upper} g
      </Typography>
    </Box>
  );
};

export default FatResult;
