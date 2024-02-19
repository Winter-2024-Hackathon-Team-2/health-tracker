import React from "react";
import EditUser from "./EditUser";
const UserCard = ({ user, handleCancel }) => {
  return (
    <>
      {
        <div>
          <p>User ID: {user.user_id}</p>
          <p>Gender: {user.user_gender}</p>
          <p>Age: {user.user_age}</p>
          <p>Occupation: {user.occupation}</p>
          <p>User BMI: {user.user_bmi}</p>
          <div className="flex justify-center mt-2 font-bold text-teal-700">
            <a
              className="focus:outline-none hover:no-underline bg-gray-100 hover:bg-teal-600 hover:text-black py-1 px-3 rounded-full mr-3"
              onClick={() => <EditUser />}
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
