import React, { useEffect, useState } from "react";
import { listHistory } from "../utils/api";
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

  useEffect(loadSurveyboard, []);

  function loadSurveyboard() {
    const abortController = new AbortController();
    setError(null);
    listHistory(abortController.signal).then(setSurveys).catch(setError);
    return () => abortController.abort();
  }
  console.log(surveys, "---");
  return (
    <main>
      <div
        id="header"
        className="flex flex-col justify-center lg:flex-row items-center p-4 bg-teal-500 "
      >
        <label htmlFor="reservation_date">
          <h1
            id="header-text"
            className="text-4xl sm:text-4xl m-1 font-bold text-black"
          >
            Current Surveys:
          </h1>
        </label>

        <div
          id="buttonGroups"
          className="text-gray-100 text-xl sm:text-2xl "
        ></div>
      </div>

      <ErrorAlert error={error} />
      <Surveys surveys={surveys} />
    </main>
  );
}

export default Surveyboard;
