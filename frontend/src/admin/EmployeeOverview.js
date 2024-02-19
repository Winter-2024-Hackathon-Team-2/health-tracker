import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5001";

function EmployeeOverview() {
  const [employees, setEmployees] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/admin/add");
  };

  const handleDelete = (userId) => {
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
    <div>
        <button
          onClick={handleClick}
          className="bg-gray border border-gray-200 px-2 py-2 rounded hover:bg-gray-50 mt-4 mb-4"
        >
          Add
        </button>

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
            {/* Any other categories */}
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
                <button onClick={() => handleDelete(employee.user_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeOverview;
