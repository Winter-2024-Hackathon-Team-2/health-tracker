import React from "react";
import EditSurvey from "./EditSurvey";
const SurveyCard = ({ survey, handleCancel }) => {
  return (
    <>
      {
        <div>
          <p>Track ID: {survey.track_activity_id}</p>
          <p>User ID: {survey.user_id}</p>
          <p>Activity Time: {survey.track_physical_activity}</p>
          <p>Sleep Quality: {survey.track_sleep_duration}</p>
          <p>Track Date: {survey.track_date}</p>
          <p>User Physical Activity: {survey.track_sleep_quality}</p>
          <p>Work Stress: {survey.track_stress_level}</p>
          <p>Focus Area: {survey.track_focus_area}</p>
          <div className="flex justify-center mt-2 font-bold text-teal-700">
            <a
              className="focus:outline-none hover:no-underline bg-gray-100 hover:bg-teal-600 hover:text-black py-1 px-3 rounded-full mr-3"
              onClick={() => <EditSurvey />}
              href={`/users/${survey.survey_id}/edit`}
            >
              Edit
            </a>

            <button
              type="button"
              className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black font-bold py-1 px-3 rounded-full ml-3"
              onClick={() => handleCancel(survey.survey_id)}
              data-user-id-cancel={survey.survey_id}
            >
              Cancel
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default SurveyCard;
