import React from "react";

const UserCard = ({ user, handleCancel }) => {
  return (
    <>
      {
        <div>
          <p>User ID: {user.user_id}</p>
          <p>Gender: {user.user_gender}</p>
          <p>Age: {user.user_age}</p>
          <p>Occupation: {user.occupation}</p>
          <p>User Sleep Duration: {user.user_sleep_duration}</p>
          <p>User Sleep Quality: {user.user_sleep_quality}</p>
          <p>User Physical Activity: {user.user_physical_activity}</p>
          <p>User Stress: {user.user_stress}</p>
          <p>User BMI: {user.user_bmi}</p>
          <p>User Blood Pressure: {user.user_blood_pressure}</p>

          <div className="flex justify-center mt-2 font-bold text-teal-700">
            <a
              className="focus:outline-none hover:no-underline bg-gray-100 hover:bg-teal-600 hover:text-black py-1 px-3 rounded-full mr-3"
              href={`/users/${user.user_id}/edit`}
            >
              Edit
            </a>

            <button
              type="button"
              className="focus:outline-none bg-gray-100 hover:bg-teal-600 hover:text-black font-bold py-1 px-3 rounded-full ml-3"
              onClick={() => handleCancel(user.user_id)}
              data-user-id-cancel={user.user_id}
            >
              Cancel
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default UserCard;
