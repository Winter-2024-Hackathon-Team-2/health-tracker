import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { deleteSurvey } from "../utils/api";
import SurveyCard from "./SurveyCard";

export default function Surveys({ surveys }) {
  const [error, setError] = useState(null);
  const history = useNavigate();

  async function handleCancel(activityId) {
    if (
      window.confirm("Do you want to delete this user? This cannot be undone.")
    ) {
      try {
        await deleteSurvey(activityId);
        history(-1);
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap">
      <ErrorAlert error={error} />
      {surveys &&
        surveys.map((survey) => (
          <div key={survey.track_activity_id}>
            <SurveyCard survey={survey} handleCancel={handleCancel} />
          </div>
        ))}
    </div>
  );
}
