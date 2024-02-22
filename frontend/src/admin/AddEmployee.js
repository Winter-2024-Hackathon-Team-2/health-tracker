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
      console.error("Error adding employee:", error.message);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center p-4 bg-sky-100">
        <label htmlFor="employee_overview">
          <h1 className="text-4xl sm:text-4xl m-1 font-bold text-dark-purple">
            Add an Employee
          </h1>
        </label>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="user_gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gender
            </label>
            <input
              name="user_gender"
              id="user_gender"
              type="text"
              value={formData.user_gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_age"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Age
            </label>
            <input
              name="user_age"
              id="user_age"
              type="number"
              value={formData.user_age}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Occupation
            </label>
            <input
              name="occupation"
              id="occupation"
              type="text"
              value={formData.occupation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
