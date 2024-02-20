import React, { useState, useEffect } from "react";
import { createSurvey } from "../utils/api";
import { useNavigate } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import DailySurveyForm from "./DailySurveyForm";

export default function NewSurvey() {
  const initialFormState = {
    user_id: "",
    track_physical_activity: 0,
    track_sleep_duration: 0,
    track_sleep_quality: 0,
    track_stress_level: 0,
    track_focus_area: "",
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
      await createSurvey(formData, controller.signal);

      setFormData({ ...initialFormState });
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };

  return (
    <div>
      <h2>Create a New Survey</h2>

      <ErrorAlert error={error} />
      <DailySurveyForm />
    </div>
  );
}
