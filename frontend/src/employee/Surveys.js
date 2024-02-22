import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import SurveyCard from "./SurveyCard";

export default function Surveys({ surveys }) {
  const [error, setError] = useState(null);


  return (
    <div className=" grid grid-cols-3 sm:justify-center text-center flex-wrap">
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
