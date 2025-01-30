import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import CaloriesResult from "./CaloriesResult";
import ProteinResult from "./ProteinResult";
import CarbResult from "./CarbResult";
import FatResult from "./FatResult";

const Results = ({ calorieRange, proteinRange, carbRange, fatRange }) => {
  const showMacros =
    (proteinRange && (proteinRange.protein || proteinRange.minProtein)) ||
    (carbRange && carbRange.lower !== undefined) ||
    (fatRange && fatRange.lower !== undefined);

  if (!showMacros) return null; // If Macros are not available don't render the component

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mt: 2,
            p: 2,
          }}
        >
          <CaloriesResult calorieRange={calorieRange} />
          <Typography
            variant="h5"
            sx={{
              color: "#fa4454",
              textAlign: "center",
              mt: 6,
              fontSize: { xs: "1.2em", sm: "1.3em", md: "1.8em" },
            }}
          >
            Estimated Macros
          </Typography>
        </Box>
        <ProteinResult proteinRange={proteinRange} />
        <CarbResult carbRange={carbRange} />
        <FatResult fatRange={fatRange} />
      </Box>
    </Grid>
  );
};

export default Results;
