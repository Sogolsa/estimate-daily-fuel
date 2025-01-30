import React, { useState } from "react";
import { Container, Grid, Typography, Box, TextField } from "@mui/material";

// components
import ActivityLevelSelect from "./ActivityLevelSelect";
import GoalSelect from "./GoalSelect";
import ActivityTypeSelect from "./ActivityTypeSelect";
import LevelSelect from "./LevelSelect";
import GenderSelect from "./GenderSelect";
import CalculateButton from "./CalculateButton.jsx";
import Results from "./Results.jsx";

const MyForm = () => {
  const [formData, setFormData] = useState({
    activityLevel: "",
    goal: "",
    activityType: "",
    currentWeight: "",
    gender: "",
    level: "",
  });
  const [calorieRange, setCalorieRange] = useState(null);
  const [proteinRange, setProteinRange] = useState(null);
  const [fatRange, setFatRange] = useState(null);
  const [carbRange, setCarbRange] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: { xs: "1.2em", sm: "1.5", md: "2em" },
              }}
            >
              Estimate your daily calories and macros here!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                padding: 2,
                mt: 2,
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
              }}
            >
              <ActivityLevelSelect
                value={formData.activityLevel}
                onChange={handleChange}
              />
              <GoalSelect value={formData.goal} onChange={handleChange} />
              <ActivityTypeSelect
                value={formData.activityType}
                onChange={handleChange}
              />
              <LevelSelect value={formData.level} onChange={handleChange} />
              <TextField
                label="Current Weight in pounds"
                id="currentWeight"
                name="currentWeight"
                type="number"
                variant="standard"
                margin="dense"
                value={formData.currentWeight}
                onChange={handleChange}
                fullWidth
              />
              <GenderSelect value={formData.gender} onChange={handleChange} />
              <CalculateButton
                setCalorieRange={setCalorieRange}
                setProteinRange={setProteinRange}
                setCarbRange={setCarbRange}
                setFatRange={setFatRange}
                formData={formData}
              />
            </Box>
          </Grid>
          <Results
            calorieRange={calorieRange}
            proteinRange={proteinRange}
            carbRange={carbRange}
            fatRange={fatRange}
          />
        </Grid>
      </form>
    </Container>
  );
};

export default MyForm;
