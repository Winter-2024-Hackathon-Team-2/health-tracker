import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import SurveyCard from "./SurveyCard";

export default function Surveys({ surveys }) {
  const [error, setError] = useState(null);

  surveys = surveys.sort((a, b) => {
    if (a.track_date > b.track_date){
      return -1
    } else if (a.track_date < b.track_date){
      return 1;
    } else {
      return 0;
    }
  })

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:justify-center text-center flex-wrap">
      {error ? <ErrorAlert error={error} /> : <></>}
      {surveys &&
        surveys.map((survey) => (
          <div key={survey.track_activity_id} className="p-4">
            <SurveyCard survey={survey} />
          </div>
        ))}
    </div>
  );
}
