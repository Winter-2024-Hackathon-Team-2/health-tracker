import React, { useState, useEffect } from "react";
import { readUser, updateUser } from "../utils/api";
import { useParams, useNavigate } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import UserForm from "./UserForm";

export default function EditUser() {
  const initialFormState = {
    user_gender: "",
    user_age: "",
    occupation: "",
  };
  const history = useNavigate();
  const { userId } = useParams();

  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    async function getData() {
      try {
        const response = await readUser(userId, abortController.signal);
        setFormData(response);
      } catch (error) {
        setError(error);
      }
    }
    getData();
    return () => abortController.abort();
    // eslint-disable-next-line
  }, [userId]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleNumber = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: Number(target.value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const controller = new AbortController();
    try {
      await updateUser(formData);
      history(-1);
      setFormData({ ...initialFormState });
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };

  return (
    <div className="w-full h-full min-h-screen bg-no-repeat bg-cover bg-top">
      <h2 className="font-bold text-teal-700 text-center text-3xl md:text-5xl mx-2 p-3">
        Edit User
      </h2>
      <ErrorAlert error={error} />
      <UserForm
        handleSubmit={handleSubmit}
        handleNumber={handleNumber}
        handleChange={handleChange}
        formData={formData}
        history={history}
      />
    </div>
  );
}
