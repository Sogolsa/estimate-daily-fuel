import { estimateCalorieRange } from "./calorieCalculator";
import { calculateFat } from "./fatCalculator";
import { calculateProtein } from "./proteinCalculator";

export const calculateCarbohydrates = ({
  activityType,
  currentWeight,
  activityLevel,
  goal,
  gender,
  level,
}) => {
  if (!gender) {
    const { lower: lowerCalories, upper: upperCalories } = estimateCalorieRange(
      {
        activityLevel,
        goal,
        currentWeight,
      }
    );

    console.log("Lower Calories:", lowerCalories);
    console.log("Upper Calories:", upperCalories);

    if (!lowerCalories || !upperCalories) {
      console.error("Error: estimateCalorieRange returned invalid values");
      return { lower: "N/A", upper: "N/A", method: "calorie-based" };
    }

    const carbPercentages = {
      endurance: 0.55,
      strength: 0.4,
      "absolute-strength": 0.25,
    };

    const carbFromCalories = carbPercentages?.[activityType.toLowerCase()];

    // Calculate carb calories
    const lowerCarbCalories = (lowerCalories * carbFromCalories).toFixed(2);
    const upperCarbCalories = (upperCalories * carbFromCalories).toFixed(2);

    // convert calories to grams
    const lowerCarbs = lowerCarbCalories / 4;
    const upperCarbs = upperCarbCalories / 4;

    return { lower: lowerCarbs, upper: upperCarbs, method: "calorie-based" };
  }

  // If gender is selected the carbs calculation based on overall calories and calories from fat and protein.
  // Calories
  const { lower: lowerCalories, upper: upperCalories } = estimateCalorieRange({
    activityLevel,
    goal,
    currentWeight,
  });

  // Calories fromFat
  const { lower: lowerFat, upper: upperFat } = calculateFat({
    activityLevel,
    currentWeight,
    goal,
    gender,
    activityType,
  });
  const lowerFatCalories = lowerFat * 9;
  const upperFatCalories = upperFat * 9;

  // Calories from Protein
  const { minProtein, maxProtein, protein } = calculateProtein({
    gender,
    activityLevel,
    goal,
    currentWeight,
    activityType,
    level,
  });

  let lowerProteinCalories, upperProteinCalories, proteinCalories;

  if (typeof minProtein !== "undefined" && typeof maxProtein !== "undefined") {
    lowerProteinCalories = minProtein * 4;
    upperProteinCalories = maxProtein * 4;
  } else if (typeof protein !== "undefined") {
    proteinCalories = protein * 4;
  } else {
    throw new Error("Protein values are undefined!");
  }

  // Calculate Carb Calories depending on if protein values are arrays or single values
  let lowerCarbCalories, upperCarbCalories;
  if (minProtein && maxProtein) {
    lowerCarbCalories =
      lowerCalories - (lowerFatCalories + lowerProteinCalories);
    upperCarbCalories =
      upperCalories - (upperFatCalories + upperProteinCalories);
  } else if (protein) {
    lowerCarbCalories = lowerCalories - (lowerFatCalories + proteinCalories);
    upperCarbCalories = upperCalories - (upperFatCalories + proteinCalories);
  }

  // Convert calories to grams
  const lowerCarbs = (lowerCarbCalories / 4).toFixed(2);
  const upperCarbs = (upperCarbCalories / 4).toFixed(2);

  return { lower: lowerCarbs, upper: upperCarbs, method: "activity-based" };
};
