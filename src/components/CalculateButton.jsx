import React from "react";
import { Button } from "@mui/material";

// Helper functions
import { estimateCalorieRange } from "../helpers/calorieCalculator";
import { calculateProtein } from "../helpers/proteinCalculator";
import { calculateFat } from "../helpers/fatCalculator.jsx";
import { calculateCarbohydrates } from "../helpers/CarbCalculator";

const CalculateButton = ({
  setCalorieRange,
  setProteinRange,
  setCarbRange,
  setFatRange,
  formData,
}) => {
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
  return (
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
  );
};

export default CalculateButton;
