import React, { useState, useEffect } from "react";
import { createUser } from "../utils/api";
import { useNavigate } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import UserForm from "./UserForm";

export default function NewUser() {
  const initialFormState = {
    user_gender: "",
    user_age: "",
    occupation: "",
    user_sleep_duration: "",
    user_sleep_quality: "",
    user_physical_activity: "",
    user_stress: "",
    user_bmi: "",
    user_blood_pressure: "",
  };

  const history = useNavigate();
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    async function getData() {
      try {
        setFormData({ ...initialFormState });
      } catch (error) {
        setError(error);
      }
    }
    getData();
    return () => abortController.abort();
    // eslint-disable-next-line
  }, []);

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
      await createUser(formData, controller.signal);

      setFormData({ ...initialFormState });
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };

  return (
    <div>
      <h2>Create a New User</h2>

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
