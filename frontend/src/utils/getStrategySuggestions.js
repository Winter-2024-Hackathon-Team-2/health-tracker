
//Utility function that returns the priority coping strategy

function calculatePercentage(input, maxValue) {
  return (input / maxValue) * 100;
}

export default function getStrategySuggestions(surveyInputs) {
  let strategyTypes = {
    sleep: 0,
    stress: 0,
    "physical-activity": 0,
  };

  const sleepQuality = surveyInputs.track_sleep_quality;
  const sleepQuantity = surveyInputs.track_sleep_duration;
  const sleepAverage = (Number(sleepQuality) + Number(sleepQuantity)) / 2;

  /*
    Calculates the percentage for each stressor based on maximum allowable input
    */
  strategyTypes.stress =
    100 - calculatePercentage(Number(surveyInputs.track_stress_level), 10);
  strategyTypes.sleep = calculatePercentage(sleepAverage, 10);
  strategyTypes["physical-activity"] = calculatePercentage(
    Number(surveyInputs.track_physical_activity),
    90
  );

  //gets the lowest value of the stressor percentages and returns that stressor as the focus area

  let lowestCategory = Math.min(...Object.values(strategyTypes));
  let focusArea;

  for (let [key, value] of Object.entries(strategyTypes)) {
    if (value === lowestCategory) {
      focusArea = key;
    }
  }
  localStorage.setItem('strategyType', focusArea);
  return focusArea;
}

