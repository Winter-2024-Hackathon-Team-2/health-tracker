import React, { useEffect, useState } from "react";
import { listUsers2 } from "../utils/api";
import Users from "../users/Users";
import ErrorAlert from "../layout/ErrorAlert";
import useQuery from "../utils/useQuery";
import { today } from "../utils/date-time";
import { useNavigate } from "react-router";

import "../layout/Layout";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard() {
  const query = useQuery();
  const history = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const [date, setDate] = useState(query.get("date") || today());

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setError(null);
    listUsers2({ date }, abortController.signal).then(setUsers).catch(setError);
    return () => abortController.abort();
  }
  console.log(users, "---");
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
            Current Users:
          </h1>
        </label>

        <div
          id="buttonGroups"
          className="text-gray-100 text-xl sm:text-2xl "
        ></div>
      </div>

      <ErrorAlert error={error} />
      <Users users={users} />
      <h2 className="font-bold text-center text-teal-700 text-3xl md:text-5xl m-4">
        Users
      </h2>
    </main>
  );
}

export default Dashboard;
