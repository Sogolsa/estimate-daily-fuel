import React, { useState } from "react";
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
      if (formData.activityLevel && formData.goal && formData.currentWeight) {
        const result = estimateCalorieRange({
          activityLevel: formData.activityLevel,
          goal: formData.goal,
          currentWeight: parseFloat(formData.currentWeight) || 0,
        });
        setCalorieRange(result);
      } else {
        console.log("Skipping calorie calculation due to missing inputs.");
      }
    } catch (err) {
      console.error("Calorie Calculation Error:", err.message);
    }

    // Calculate Protein
    try {
      if (
        formData.currentWeight &&
        // formData.gender &&
        formData.level &&
        formData.goal &&
        formData.activityLevel
      ) {
        const proteinResult = calculateProtein({
          activityLevel: formData.activityLevel,
          goal: formData.goal,
          currentWeight: parseFloat(formData.currentWeight),
          gender: formData.gender,
          level: formData.level,
          activityType: formData.activityType,
        });

        setProteinRange(proteinResult);
        if (!formData.gender) {
          const proteinFromCaloriesResult = calculateProtein({
            activityType: formData.activityType,
            currentWeight: parseFloat(formData.currentWeight),
            activityLevel: formData.activityLevel,
            goal: formData.goal,
          });
          setProteinRange(proteinFromCaloriesResult);
        }
      } else {
        console.log("Skipping protein calculation due to missing inputs.");
      }
    } catch (err) {
      console.log(err.message);
    }

    // calculate Fat
    try {
      if (formData.currentWeight) {
        const fatResult = calculateFat({
          activityLevel: formData.activityLevel,
          currentWeight: parseFloat(formData.currentWeight),
        });
        setFatRange(fatResult);
      } else {
        console.log("Skipping fat calculation due to missing inputs.");
      }
    } catch (err) {
      console.log(err.message);
    }

    // Calculate Carbs
    try {
      if (formData.currentWeight && formData.activityType) {
        const carbResult = calculateCarbohydrates({
          activityType: formData.activityType,
          currentWeight: parseFloat(formData.currentWeight),
          activityLevel: formData.activityLevel,
          goal: formData.goal,
        });
        setCarbRange(carbResult);
      } else {
        console.log("Skipping carbohydrate calculation due to missing inputs.");
      }
    } catch (err) {
      console.log("Carb calculate error:", err.message);
    }
  };
  return (
    <Button
      type="submit"
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
