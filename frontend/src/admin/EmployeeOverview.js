import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5001";

function EmployeeOverview() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_BASE_URL}/users`)
            .then(response => response.json())
            .then(data => setEmployees(data.data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/admin/add");
    }

    const handleDelete = (userId) => {
        fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'DELETE',
        })
        .then(response =>{
            if(response.ok) {
                setEmployees(prevEmployees => prevEmployees.filter(employee => employee.user_id !== userId));
            } else {
                console.error("Failed to delete employee");
            }
        })
        .catch(error => console.error("Error deleting employee:", error));
    }

    return (
        <div>
            <button onClick={handleClick}>Add</button>

            <table class="table">
                <thead>
                    <tr>
                        <th> User ID </th>
                        <th> Occupation </th>
                        <th> Admin </th>
                        {/* Any other categories */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => 
                        <tr key={employee.user_id}>
                            <td>{employee.user_id}</td>
                            <td>{employee.occupation}</td>
                            <td>{employee.is_admin === true ? 'Yes' : 'No'}</td>
                            <button onClick={() => handleDelete(employee.user_id)}>Delete</button>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeOverview;