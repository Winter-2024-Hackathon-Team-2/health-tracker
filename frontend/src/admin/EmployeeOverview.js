import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listUsers } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

const API_BASE_URL = "http://localhost:5001";

function EmployeeOverview() {
  const [employees, setEmployees] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(loadEmployees, []);

  function loadEmployees() {
    const abortController = new AbortController();
    setError(null);
    listUsers(abortController.signal)
      .then(setEmployees)
      .catch(setError);
    return () => abortController.abort();
  }

  const handleDelete = (userId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    if (isConfirmed) {
      fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setEmployees((prevEmployees) =>
              prevEmployees.filter((employee) => employee.user_id !== userId)
            );
          } else {
            console.error("Failed to delete employee");
          }
        })
        .catch((error) => console.error("Error deleting employee:", error));
    }
  };

  const handleSort = (key) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setSortConfig({ key, direction: newDirection });
  };

  const sortedEmployees = () => {
    if (!sortConfig.key) return employees;

    return employees.slice().sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (sortConfig.direction === "ascending") {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      } else {
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
      }
    });
  };

  return (
    <main>
      <div className="flex flex-col justify-center lg:flex-row items-center p-4 bg-teal-500">
        <label htmlFor="employee_overview">
          <h1 className="text-4xl sm:text-4xl m-1 font-bold text-black">
            Employee Overview
          </h1>
        </label>
      </div>

      <ErrorAlert error={error} />

      <table className="table">
        <thead>
          <tr className="border border-gray-300 p-4 mb-6" style={{ fontSize: "1.5em" }}>
            <th onClick={() => handleSort("user_id")}>
              <button
                style={{ cursor: "pointer !important" }}
                className="sort-button"
              >
                {" "}
                User ID{" "}
              </button>
            </th>
            <th onClick={() => handleSort("occupation")}>
              <button
                style={{ cursor: "pointer !important" }}
                className="sort-button"
              >
                {" "}
                Occupation{" "}
              </button>
            </th>
            <th onClick={() => handleSort("user_age")}>
              <button
                style={{ cursor: "pointer !important" }}
                className="sort-button"
              >
                {" "}
                Age{" "}
              </button>
            </th>
            <th onClick={() => handleSort("is_admin")}>
              <button
                style={{ cursor: "pointer !important" }}
                className="sort-button"
              >
                {" "}
                Admin{" "}
              </button>
            </th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees().map((employee) => (
            <tr key={employee.user_id}>
              <td>{employee.user_id}</td>
              <td>{employee.occupation}</td>
              <td>{employee.user_age}</td>
              <td>{employee.is_admin === true ? "Yes" : "No"}</td>
              <td>
                <button 
                  onClick={() => handleDelete(employee.user_id)}
                  className="btn btn-red"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default EmployeeOverview;
