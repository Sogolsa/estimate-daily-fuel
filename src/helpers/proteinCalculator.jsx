// Macro Calculations
export const calculateProtein = ({
  gender,
  activityLevel,
  goal,
  level,
  currentWeight,
}) => {
  const proteinMultipliers = {
    female: {
      "lightly-active": {
        "fat-loss": {
          beginner: [0.6, 1],
          intermediate: [1],
          advanced: [1.1],
        },
        "maintain-weight": {
          beginner: [0.65, 0.9],
          intermediate: [0.9],
          advanced: [1],
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
          intermediate: [1.1],
          advanced: [1.2],
        },
        "maintain-weight": {
          beginner: [0.75, 1],
          intermediate: [1],
          advanced: [1.1],
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
          intermediate: [1.2],
          advanced: [1.35],
        },
        "maintain-weight": {
          beginner: [0.85, 1.1],
          intermediate: [1.1],
          advanced: [1.2],
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
          intermediate: [1.05],
          advanced: [1.2],
        },
        "maintain-weight": {
          beginner: [0.75, 1],
          intermediate: [1],
          advanced: [1.1],
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
          intermediate: [1.2],
          advanced: [1.35],
        },
        "maintain-weight": {
          beginner: [0.85, 1.1],
          intermediate: [1.1],
          advanced: [1.2],
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
          intermediate: [1.35],
          advanced: [1.5],
        },
        "maintain-weight": {
          beginner: [0.95, 1.2],
          intermediate: [1.2],
          advanced: [1.35],
        },
        "gain-weight": {
          beginner: [1.05, 1.35],
          intermediate: [1.05, 1.35],
          advanced: [1.05, 1.35],
        },
      },
    },
  };

  const proteinRange = proteinMultipliers[gender][activityLevel][goal][level];

  if (!proteinRange) {
    throw new Error("Invalid activity level, goal, or experience level.");
  }

  const minMultiplier =
    proteinRange.length === 1 ? proteinRange[0] : proteinRange[0];
  const maxMultiplier =
    proteinRange.length === 1 ? proteinRange[0] : proteinRange[1];

  const minProtein = (currentWeight * minMultiplier).toFixed(2);
  const maxProtein = (currentWeight * maxMultiplier).toFixed(2);

  return { minProtein, maxProtein };
};
