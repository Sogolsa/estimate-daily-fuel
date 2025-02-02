import { estimateCalorieRange } from "./calorieCalculator";

// Macro Calculations
export const calculateProtein = ({
  gender,
  activityLevel,
  goal,
  level,
  currentWeight,
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

    const proteinPercentages = {
      endurance: 0.2,
      strength: 0.3,
      "absolute-strength": 0.35,
    };
    const proteinFromCalories =
      proteinPercentages?.[activityType?.toLowerCase()];
    console.log("protein", proteinFromCalories);

    const lowerProteinCalories = (lowerCalories * proteinFromCalories).toFixed(
      2
    );
    const upperProteinCalories = (upperCalories * proteinFromCalories).toFixed(
      2
    );

    // convert calories to grams
    const lowerProteins = (lowerProteinCalories / 4).toFixed(2);
    const upperProteins = (upperProteinCalories / 4).toFixed(2);

    return {
      minProtein: lowerProteins,
      maxProtein: upperProteins,
      method: "calorie-based",
    };
  }

  const proteinMultipliers = {
    female: {
      "lightly-active": {
        "fat-loss": {
          beginner: [0.6, 1],
          intermediate: 1,
          advanced: 1.1,
        },
        "maintain-weight": {
          beginner: [0.65, 0.9],
          intermediate: 0.9,
          advanced: 1,
        },
        "gain-weight": {
          beginner: [0.8, 1.1],
          intermediate: [0.8, 1.1],
          advanced: [0.8, 1.1],
        },
      },

      "moderately-active": {
        "fat-loss": {
          beginner: [0.7, 1.1],
          intermediate: 1.1,
          advanced: 1.2,
        },
        "maintain-weight": {
          beginner: [0.75, 1],
          intermediate: 1,
          advanced: 1.1,
        },
        "gain-weight": {
          beginner: [0.9, 1.2],
          intermediate: [0.9, 1.2],
          advanced: [0.9, 1.2],
        },
      },
      "highly-active": {
        "fat-loss": {
          beginner: [0.8, 1.2],
          intermediate: 1.2,
          advanced: 1.35,
        },
        "maintain-weight": {
          beginner: [0.85, 1.1],
          intermediate: 1.1,
          advanced: 1.2,
        },
        "gain-weight": {
          beginner: [1.0, 1.3],
          intermediate: [1.0, 1.3],
          advanced: [1.0, 1.3],
        },
      },
    },
    male: {
      "lightly-active": {
        "fat-loss": {
          beginner: [0.65, 1.05],
          intermediate: 1.05,
          advanced: 1.2,
        },
        "maintain-weight": {
          beginner: [0.75, 1],
          intermediate: 1,
          advanced: 1.1,
        },
        "gain-weight": {
          beginner: [0.85, 1.15],
          intermediate: [0.85, 1.15],
          advanced: [0.85, 1.15],
        },
      },

      "moderately-active": {
        "fat-loss": {
          beginner: [0.8, 1.2],
          intermediate: 1.2,
          advanced: 1.35,
        },
        "maintain-weight": {
          beginner: [0.85, 1.1],
          intermediate: 1.1,
          advanced: 1.2,
        },
        "gain-weight": {
          beginner: [0.95, 1.25],
          intermediate: [0.95, 1.25],
          advanced: [0.95, 1.25],
        },
      },
      "highly-active": {
        "fat-loss": {
          beginner: [0.95, 1.35],
          intermediate: 1.35,
          advanced: 1.5,
        },
        "maintain-weight": {
          beginner: [0.95, 1.2],
          intermediate: 1.2,
          advanced: 1.35,
        },
        "gain-weight": {
          beginner: [1.05, 1.35],
          intermediate: [1.05, 1.35],
          advanced: [1.05, 1.35],
        },
      },
    },
  };

  // in case of undefined doesn't throw error
  const proteinRange =
    proteinMultipliers?.[gender]?.[activityLevel]?.[goal]?.[level];

  // if (!proteinRange) {
  //   throw new Error(
  //     "Invalid activity level, goal, gender or experience level. Can't estimate protein."
  //   );
  // }

  // single number or array
  if (Array.isArray(proteinRange)) {
    return {
      minProtein: (currentWeight * proteinRange[0]).toFixed(2),
      maxProtein: (currentWeight * proteinRange[1]).toFixed(2),
      method: "gender-based",
    };
  } else {
    return {
      protein: (currentWeight * proteinRange).toFixed(2),
      method: "gender-based",
    };
  }
};
