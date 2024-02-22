import { useParams } from "react-router-dom";
import React from "react";
import EditSurvey from "./EditSurvey";
const SurveyCard = ({ survey }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const badDate = new Date(survey.track_date);
  const readableDate = `${months[badDate.getMonth()]} ${badDate.getDate()}`;

  return (
    <>
      {survey && (
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <p>Date: {`${readableDate}`}</p>
            <p>Work Stress: {survey.track_stress_level}</p>
            <p>Focus Area: {survey.track_focus_area}</p>
          </div>
          <div className="collapse-content">
            <p>Activity Time: {survey.track_physical_activity}</p>
            <p>Sleep Quality: {survey.track_sleep_duration}</p>
            <p>User Physical Activity: {survey.track_sleep_quality}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SurveyCard;

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>;
