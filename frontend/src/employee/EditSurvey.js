import React, { useState, useEffect } from "react";
import { updateSurvey, readSurvey } from "../utils/api";
import { useParams, useNavigate } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import SurveyForm from "./SurveyForm";

export default function EditSurvey() {
  const initialFormState = {
    user_id: 0,
    track_physical_activity: 0,
    track_sleep_duration: 0,
    track_sleep_quality: 0,
    track_stress_level: 0,
    track_focus_area: "",
  };
  const history = useNavigate();
  const { trackId } = useParams();

  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    async function getData() {
      try {
        const response = await readSurvey(trackId, abortController.signal);
        setFormData(response);
      } catch (error) {
        setError(error);
      }
    }
    getData();
    return () => abortController.abort();
    // eslint-disable-next-line
  }, [trackId]);

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
      await updateSurvey(formData);
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
        Edit Survey
      </h2>
      <ErrorAlert error={error} />
      <SurveyForm
        handleSubmit={handleSubmit}
        handleNumber={handleNumber}
        handleChange={handleChange}
        formData={formData}
        history={history}
      />
    </div>
  );
}
