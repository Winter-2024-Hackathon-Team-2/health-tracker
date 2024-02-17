import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeOverview() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5001/users")
            .then(response => response.json())
            .then(data => setEmployees(data.data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/admin/add");
    }

    return (
        <div>
            <button onClick={handleClick}>Add</button>

            <table class="table">
                <thead>
                    <tr>
                        <th> User ID </th>
                        <th> Occupation </th>
                        {/* Any other categories */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => 
                        <tr key={employee.user_id}>
                            <td>{employee.user_id}</td>
                            <td>{employee.occupation}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeOverview;