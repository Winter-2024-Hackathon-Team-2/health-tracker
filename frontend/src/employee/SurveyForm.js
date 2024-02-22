import React from "react";
import { useNavigate } from "react-router-dom";

export default function SurveyForm({
  handleSubmit,
  handleNumber,
  handleChange,
  formData,
  history,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-100">
      <h1>This is the correct page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_id">User ID</label>
          <input
            type="integer"
            className="form-control"
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={formData.user_id}
            placeholder="user Id from Users Table"
          />
        </div>
        <div className="form-group">
          <label htmlFor="track_physical_activity">Activity Time</label>
          <input
            type="number"
            className="form-control"
            id="track_physical_activity"
            name="track_physical_activity"
            onChange={handleNumber}
            value={formData.track_physical_activity}
            placeholder="number of minutes being active yesterday"
          />
        </div>
        <div className="form-group">
          <label htmlFor="track_sleep_duration">Sleep Amount</label>
          <input
            type="number"
            className="form-control"
            id="track_sleep_duration"
            name="track_sleep_duration"
            onChange={handleNumber}
            value={formData.track_sleep_duration}
            placeholder="Hours of sleep last night"
          />
        </div>
        <div className="form-group">
          <label htmlFor="track_sleep_quality">Sleep Quality</label>
          <input
            type="number"
            className="form-control"
            id="track_sleep_quality"
            name="track_sleep_quality"
            onChange={handleNumber}
            value={formData.track_sleep_quality}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="track_stress_level">Work Stress</label>
          <input
            type="number"
            className="form-control"
            id="track_stress_level"
            name="track_stress_level"
            value={formData.track_stress_level}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="track_focus_area">Focus Area</label>
          <input
            type="text"
            className="form-control"
            id="track_focus_area"
            name="track_focus_area"
            value={formData.track_focus_area}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mr-3"
          onClick={navigate.goBack}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-3"
          onClick={navigate.goBack}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
