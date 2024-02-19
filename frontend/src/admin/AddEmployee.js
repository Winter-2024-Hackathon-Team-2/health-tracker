import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/api";

function AddEmployee() {
  const [formData, setFormData] = useState({
    user_gender: "", 
    user_age: 0, 
    occupation: "", 
    user_sleep_duration: 0.0, 
    user_sleep_quality: 0.0, 
    user_physical_activity: "", 
    user_stress: 0, 
    user_bmi: "", 
    user_blood_pressure: "", 
    user_heart_rate: "", 
    user_daily_steps: "", 
    user_sleep_disorder: "", 
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newUser = await createUser(formData);
      console.log("New user created:", newUser);
      navigate(-1); 
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  }

  return (
    <div>
      <h1>Add an Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_gender">Gender</label>
          <input
            name="user_gender"
            id="user_gender"
            type="text"
            value={formData.user_gender}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_age">Age</label>
          <input
            name="user_age"
            id="user_age"
            type="number"
            value={formData.user_age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <input
            name="occupation"
            id="occupation"
            type="text"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </form>
    </div>
  );
}

export default AddEmployee;
