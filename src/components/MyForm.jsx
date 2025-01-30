import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

// helper functions
import { estimateCalorieRange } from "../helpers/calorieCalculator";
import { calculateProtein } from "../helpers/proteinCalculator";
import { calculateFat } from "../helpers/fatCalculator.jsx";
import { calculateCarbohydrates } from "../helpers/CarbCalculator";

// components
import ActivityLevelSelect from "./ActivityLevelSelect";
import GoalSelect from "./GoalSelect";
import ActivityTypeSelect from "./ActivityTypeSelect";
import LevelSelect from "./LevelSelect";
import GenderSelect from "./GenderSelect";
import CaloriesResult from "./CaloriesResult";
import ProteinResult from "./ProteinResult";
import CarbResult from "./CarbResult";
import FatResult from "./FatResult";

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

  const handleCalculate = () => {
    // Calculate Calories
    try {
      const result = estimateCalorieRange({
        activityLevel: formData.activityLevel,
        goal: formData.goal,
        currentWeight: parseFloat(formData.currentWeight),
      });
      setCalorieRange(result);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }

    // Calculate Protein
    try {
      const proteinResult = calculateProtein({
        activityLevel: formData.activityLevel,
        goal: formData.goal,
        currentWeight: parseFloat(formData.currentWeight),
        gender: formData.gender,
        level: formData.level,
      });
      setProteinRange(proteinResult);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }

    // calculate Fat
    try {
      const fatResult = calculateFat({
        activityLevel: formData.activityLevel,
        currentWeight: parseFloat(formData.currentWeight),
      });
      setFatRange(fatResult);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }

    // Calculate Carbs
    try {
      const carbResult = calculateCarbohydrates({
        activityType: formData.activityType,
        currentWeight: parseFloat(formData.currentWeight),
        activityLevel: formData.activityLevel,
        goal: formData.goal,
      });
      setCarbRange(carbResult);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };

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
              <Button
                variant="contained"
                onClick={handleCalculate}
                sx={{
                  mt: 2,
                  padding: 1.5,
                  backgroundColor: "#fa4454",
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                Calculate
              </Button>
            </Box>
          </Grid>
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
            <CaloriesResult calorieRange={calorieRange} />
            <Typography
              variant="h4"
              sx={{ color: "#fa4454", textAlign: "center", mt: 4 }}
            >
              Estimated Macros:
            </Typography>
            <ProteinResult proteinRange={proteinRange} />
            <CarbResult carbRange={carbRange} />
            <FatResult fatRange={fatRange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MyForm;
