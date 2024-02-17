//import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {}

  const navigate = useNavigate();

  return (
    <div>
      <h1>Add an Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input
            name="first_name"
            className="form-control"
            id="first_name"
            type="text"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input
            name="last_name"
            className="form-control"
            id="last_name"
            type="text"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="User ID">User ID</label>
          <input
            name="user_id"
            className="form-control"
            id="user-id"
            type="text"
            onChange={handleChange}
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-3"
          onClick={() => navigate.goBack()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
