import { estimateCalorieRange } from "./calorieCalculator";

export const calculateFat = ({
  activityLevel,
  currentWeight,
  goal,
  gender,
  activityType,
}) => {
  if (!gender) {
    const { lower: lowerCalories, upper: upperCalories } = estimateCalorieRange(
      {
        activityLevel,
        goal,
        currentWeight,
      }
    );

    if (!lowerCalories || !upperCalories) {
      console.error("Error: estimateCalorieRange returned invalid values");
      return { lower: "N/A", upper: "N/A", method: "calorie-based" };
    }

    const fatPercentages = {
      endurance: 0.2,
      strength: 0.3,
      "absolute-strength": 0.4,
    };
    const fatFromCalories = fatPercentages?.[activityType.toLowerCase()];
    console.log("fat", fatFromCalories);

    const lowerFatCalories = (lowerCalories * fatFromCalories).toFixed(2);
    const upperFatCalories = (upperCalories * fatFromCalories).toFixed(2);

    // convert calories to grams
    const lowerFat = (lowerFatCalories / 9).toFixed(2);
    const upperFat = (upperFatCalories / 9).toFixed(2);

    return { lower: lowerFat, upper: upperFat, method: "calorie-based" };
  }

  const fatMultipliers = {
    "lightly-active": [0.3, 0.5],
    "moderately-active": [0.5, 0.7],
    "highly-active": [0.7, 0.9],
  };

  const fatRange =
    fatMultipliers?.[activityLevel ? activityLevel.toLowerCase() : ""];

  if (!fatRange) {
    console.error("Invalid activityLevel! Can't estimate fat!");
    return { lower: "N/A", upper: "N/A", method: "activity-based" };
  }

  const lowerFat = (currentWeight * fatRange[0]).toFixed(2);
  const upperFat = (currentWeight * fatRange[1]).toFixed(2);

  return { lower: lowerFat, upper: upperFat, method: "activity-based" };
};
