import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { updateSurvey, readSurvey } from "../utils/api";
import { useParams, useNavigate } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import DailySurveyForm from "./DailySurveyForm";

export default function EditSurvey(survey) {
  let location = useLocation();
  let navigate = useNavigate();
  let number = location.pathname;
  let value = number.split("/").slice(2);
  const initialFormState = {
    track_physical_activity: 0,
    track_sleep_duration: 0,
    track_date: 0,
    track_sleep_quality: 0,
    track_stress_level: 0,
    track_focus_area: 0,
  };
  const history = useNavigate();

  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);

  console.log(location, value[0]);
  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    async function getData() {
      try {
        const response = await readSurvey(value[0], abortController);
        setFormData(response);
      } catch (error) {
        setError(error);
      }
    }
    getData();
    return () => abortController.abort();
    // eslint-disable-next-line
  }, [location]);
  let strategyType;
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

  const handleSubmit = async () => {
    const controller = new AbortController();
    try {
      await updateSurvey(formData);
      history(-1);
      setFormData({ ...initialFormState });
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };

  return (
    <>
      <h2 className="font-bold text-teal-700 text-center text-3xl md:text-5xl mx-2 p-3">
        Edit Survey
      </h2>
      <ErrorAlert error={error} />
      <DailySurveyForm />
    </>
  );
}
