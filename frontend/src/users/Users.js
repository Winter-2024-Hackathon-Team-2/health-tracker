import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { deleteUser } from "../utils/api";
import UserCard from "./UserCard";

export default function Users({ users }) {
  const [error, setError] = useState(null);
  const history = useNavigate();

  async function handleCancel(user_id) {
    if (
      window.confirm("Do you want to delete this user? This cannot be undone.")
    ) {
      try {
        await deleteUser(user_id);
        history(-1);
      } catch (error) {
        setError(error);
      }
    }
  }
  let users2 = [];
  for (const element of users) {
    if (element !== undefined) users2.push(element);
  }
  console.log(Object.entries(users2));
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap">
      <ErrorAlert error={error} />
      {users2 &&
        users2.map((user) => (
          <div key={user.user_id}>
            <UserCard user={user} handleCancel={handleCancel} />
          </div>
        ))}
    </div>
  );
}
