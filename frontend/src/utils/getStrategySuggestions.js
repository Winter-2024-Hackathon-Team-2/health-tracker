//Utility function that returns the priority coping strategy

function calculatePercentage(input, maxValue) {
  return (input / maxValue) * 100;
}

export default function getStrategySuggestions(surveyInputs) {
  let strategyTypes = {
    sleep: 0,
    stress: 0,
    physical_activity: 0,
  };

  const sleepQuality = surveyInputs.sleep_quality;
  const sleepQuantity = surveyInputs.sleep_amount;
  const sleepAverage = (Number(sleepQuality) + Number(sleepQuantity)) / 2;

  /*
    Calculates the percentage for each stressor based on maximum allowable input
    */
  strategyTypes.stress =
    100 - calculatePercentage(Number(surveyInputs.work_stress), 10);
  strategyTypes.sleep = calculatePercentage(sleepAverage, 10);
  strategyTypes.physical_activity = calculatePercentage(
    Number(surveyInputs.activity_time),
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

  console.log(focusArea);
}
