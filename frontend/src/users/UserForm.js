import React from "react";

export default function UserForm({
  handleSubmit,
  handleNumber,
  handleChange,
  formData,
  history,
}) {
  function handleCancel() {
    if (window.confirm("Do you want to exit from editing this user?")) {
      history(-1);
    }
  }
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
            type="number"
            className="form-control"
            id="user_age"
            name="user_age"
            placeholder="User Age"
            value={formData.user_age}
            onChange={handleNumber}
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
          <label htmlFor="user_bmi">User BMI</label>
          <input
            type="number"
            className="form-control"
            id="user_bmi"
            name="user_bmi"
            placeholder="User BMI"
            value={formData.user_bmi}
            onChange={handleNumber}
            required
          />
        </div>
        <div className="sm:mt-4">
          <button
            type="submit"
            onClick={history.goBack}
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => handleCancel()}
            className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black text-teal-700 font-bold py-2 px-3 rounded-full m-2 md:mx-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
