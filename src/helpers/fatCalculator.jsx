export const calculateFat = ({ activityLevel, currentWeight }) => {
  const fatMultipliers = {
    "lightly-active": [0.3, 0.5],
    "moderately-active": [0.5, 0.7],
    "highly-active": [0.7, 0.9],
  };

  const fatRange = fatMultipliers?.[activityLevel];

  if (!fatRange) {
    throw new Error("Invalid activityLevel! Can't estimate fat!");
  }

  const lowerFat = (currentWeight * fatRange[0]).toFixed(2);
  const upperFat = (currentWeight * fatRange[1]).toFixed(2);

  return { lower: lowerFat, upper: upperFat };
};
