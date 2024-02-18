import React from "react";

export default function ReservationForm({
  handleSubmit,
  handleNumber,
  handleChange,
  formData,
  history,
}) {
  return (
    <div className="p-2">
      <form
        className="mx-auto w-10/12 sm:w-8/12 drop-shadow-3xl text-xl md:text-2xl font-bold leading-10 bg-teal-500 text-black text-center p-4 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="user_gender">User Gender</label>
          <input
            type="text"
            className="form-control"
            id="user_gender"
            name="user_gender"
            placeholder="User Gender"
            value={formData.user_gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_age">User Age</label>
          <input
            type="text"
            className="form-control"
            id="user_age"
            name="user_age"
            placeholder="User Age"
            value={formData.user_age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            className="form-control"
            id="occupation"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_sleep_duration">User Sleep Duration</label>
          <input
            type="text"
            className="form-control"
            id="user_sleep_duration"
            name="user_sleep_duration"
            placeholder="user sleep duration"
            value={formData.user_sleep_duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_sleep_quality">User Sleep Quality</label>
          <input
            type="text"
            className="form-control"
            id="user_sleep_quality"
            name="user_sleep_quality"
            placeholder="user sleep quality"
            value={formData.user_sleep_quality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_physical_activity">User Physical Activity</label>
          <input
            type="number"
            className="form-control"
            id="user_physical_activity"
            name="user_physical_activity"
            min={1}
            placeholder="User Physical Activity"
            value={formData.user_physical_activity}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_physical_activity">User Stress</label>
          <input
            type="number"
            className="form-control"
            id="user_stress"
            name="user_stress"
            min={1}
            placeholder="User Stress"
            value={formData.user_stress}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_bmi">User BMI</label>
          <input
            type="number"
            className="form-control"
            id="user_bmi"
            name="user_bmi"
            min={1}
            placeholder="User BMI"
            value={formData.user_bmi}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_blood_pressure">User Blood Pressure</label>
          <input
            type="number"
            className="form-control"
            id="user_blood_pressure"
            name="user_blood_pressure"
            min={1}
            placeholder="User Blood Pressure"
            value={formData.user_blood_pressure}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="sm:mt-4">
          <button
            type="submit"
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={history.goBack}
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
