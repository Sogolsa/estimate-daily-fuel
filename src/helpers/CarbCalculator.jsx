import { estimateCalorieRange } from "./calorieCalculator";

export const calculateCarbohydrates = ({ activityLevel, currentWeight }) => {
  const { lower: lowerCalories, upper: upperCalories } = estimateCalorieRange({
    activityLevel,
    goal,
    currentWeight,
  });

  const carbPercentages = {
    activityType: {
      endurance: 0.55,
      strength: 0.4,
      "absolute-strength": 0.25,
    },
  };

  const carbPercentage = carbPercentages?.[activityType.toLowerCase()];

  if (!carbPercentage) {
    throw new Error("Invalid Activity Type! Can't calculate carbs!");
  }

  // Calculate carb calories
  const lowerCarbCalories = lowerCalories * carbPercentage;
  const upperCarbCalories = upperCalories * carbPercentage;

  // convert calories to grams
  const lowerCarbs = lowerCarbCalories / 4;
  const upperCarbs = upperCarbCalories / 4;

  return { lower: lowerCarbs, upper: upperCarbs };
};
