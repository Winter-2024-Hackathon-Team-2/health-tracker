import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [formData, setFormData] = useState({
    user_id: "",
    admin_id: 1, 
    is_admin: false, 
    user_gender: "",
    user_age: "",
    occupation: "",
    user_sleep_duration: "",
    user_sleep_quality: "",
    user_physical_activity: "",
    user_stress: "",
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

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission 
  }

  return (
    <div>
      <h1>Add an Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_id">User ID</label>
          <input
            name="user_id"
            id="user_id"
            type="text"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <label htmlFor="user_sleep_duration">Sleep Duration</label>
          <input
            name="user_sleep_duration"
            id="user_sleep_duration"
            type="number"
            step="0.01"
            value={formData.user_sleep_duration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_sleep_quality">Sleep Quality</label>
          <input
            name="user_sleep_quality"
            id="user_sleep_quality"
            type="number"
            step="1"
            value={formData.user_sleep_quality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_physical_activity">Physical Activity</label>
          <input
            name="user_physical_activity"
            id="user_physical_activity"
            type="text"
            value={formData.user_physical_activity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_stress">Stress Level</label>
          <input
            name="user_stress"
            id="user_stress"
            type="number"
            value={formData.user_stress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_bmi">BMI</label>
          <input
            name="user_bmi"
            id="user_bmi"
            type="text"
            value={formData.user_bmi}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_blood_pressure">Blood Pressure</label>
          <input
            name="user_blood_pressure"
            id="user_blood_pressure"
            type="text"
            value={formData.user_blood_pressure}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_heart_rate">Heart Rate</label>
          <input
            name="user_heart_rate"
            id="user_heart_rate"
            type="text"
            value={formData.user_heart_rate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_daily_steps">Daily Steps</label>
          <input
            name="user_daily_steps"
            id="user_daily_steps"
            type="text"
            value={formData.user_daily_steps}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_sleep_disorder">Sleep Disorder</label>
          <input
            name="user_sleep_disorder"
            id="user_sleep_disorder"
            type="text"
            value={formData.user_sleep_disorder}
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
