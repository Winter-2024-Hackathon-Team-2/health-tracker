import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listHistory, readUserHistory } from "../utils/api";
import Surveys from "./Surveys";
import ErrorAlert from "../layout/ErrorAlert";

import "../layout/Layout";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Surveyboard() {
  const [surveys, setSurveys] = useState([]);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(loadSurveyboard, []);

  function loadSurveyboard() {
    const abortController = new AbortController();
    setError(null);
    readUserHistory(userId, abortController.signal)
      .then(setSurveys)
      .catch(setError);
    return () => abortController.abort();
  }

  let items = surveys.filter((survey) => (survey.user_id = userId));

  return (
    <main className="max-w-screen-xl flex flex-col mx-auto">
      <div
        id="header"
        className="flex flex-col justify-center lg:flex-row items-center p-4 bg-sky-200 "
      >
        <label htmlFor="reservation_date">
          <h1
            id="header-text"
            className="text-4xl sm:text-4xl m-1 font-bold text-black"
          >
            {`user ${userId}'s Survey History`}
          </h1>
        </label>

        <div
          id="buttonGroups"
          className="text-gray-100 text-xl sm:text-2xl "
        ></div>
      </div>

      <ErrorAlert error={error} />
      <Surveys surveys={items} />
    </main>
  );
}

export default Surveyboard;
