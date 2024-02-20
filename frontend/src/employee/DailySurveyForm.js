import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import getStrategySuggestions from "../utils/getStrategySuggestions";

function DailySurveyForm(){
    const initialFormData = {
        track_physical_activity: 0,
        track_sleep_duration: 0,
        track_sleep_quality: 0,
        track_stress_level: 0,
    }
    const navigate = useNavigate();
    const [formData, setFormData]=useState(initialFormData)

    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        getStrategySuggestions(formData);
        setFormData(initialFormData);

    }
    
    return (
        <div className="w-100">
            <h1>This is the correct page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="track_physical_activity">
                        Activity Time
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="track_physical_activity" 
                        name="track_physical_activity"
                        onChange={handleInput}
                        value={formData.track_physical_activity}
                        placeholder="number of minutes being active yesterday" />
                </div>
                <div className="form-group">
                    <label htmlFor="track_sleep_duration">
                        Sleep Amount
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="track_sleep_duration" 
                        name="track_sleep_duration" 
                        onChange={handleInput}
                        value={formData.track_sleep_duration}
                        placeholder="Hours of sleep last night" />
                </div>
                <div className="form-group">
                    <label htmlFor="track_sleep_quality">
                        Sleep Quality
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="track_sleep_quality"
                        name="track_sleep_quality"
                        onChange={handleInput}
                        value={formData.track_sleep_quality}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="track_stress_level">
                        Work Stress
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="track_stress_level" 
                        name="track_stress_level" 
                        value={formData.track_stress_level} 
                        onChange={handleInput}
                        required />
                </div>
                
                <button type="submit" className="btn btn-primary mr-3">Submit</button>
                <button type="button" className="btn btn-secondary mr-3" onClick={()=>navigate(-1)}>Cancel</button>
            </form>
        </div>)
}

export default DailySurveyForm;