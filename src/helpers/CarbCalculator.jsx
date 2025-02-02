import { estimateCalorieRange } from "./calorieCalculator";

export const calculateCarbohydrates = ({
  activityType,
  currentWeight,
  activityLevel,
  goal,
}) => {
  const { lower: lowerCalories, upper: upperCalories } = estimateCalorieRange({
    activityLevel,
    goal,
    currentWeight,
  });

  const carbPercentages = {
    endurance: 0.55,
    strength: 0.4,
    "absolute-strength": 0.25,
  };

  const carbPercentage = carbPercentages?.[activityType.toLowerCase()];
  console.log("carbs", carbPercentage);

  // if (!carbPercentage) {
  //   throw new Error("Invalid Activity Type! Can't calculate carbs!");
  // }

  // Calculate carb calories (in strings)
  const lowerCarbCalories = (lowerCalories * carbPercentage).toFixed(2);
  const upperCarbCalories = (upperCalories * carbPercentage).toFixed(2);

  // convert calories to grams
  const lowerCarbs = lowerCarbCalories / 4;
  const upperCarbs = upperCarbCalories / 4;

  return { lower: lowerCarbs, upper: upperCarbs };
};
