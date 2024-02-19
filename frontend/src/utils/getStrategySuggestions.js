//Params: surveyForm
/*
TODO: 
Get percentages of everything
Return the strategyType with the min value
Default to none if survey is incomplete
*/

function calculatePercentage(input, maxValue){
    return input/maxValue * 100;
}

export default function getStrategySuggestions(surveyInputs){
    let strategyTypes = {
        sleep: 0,
        stress: 0,
        "physical-activity": 0
    }
    for (let [key, value] of Object.entries(surveyInputs)){
        if (key === "track_physical_activity"){
            strategyTypes["physical_activity"] = calculatePercentage(value, 90);
        }
        if (key === "track_stress_level"){
            strategyTypes.stress = calculatePercentage(value, 10);
        }
    }
}