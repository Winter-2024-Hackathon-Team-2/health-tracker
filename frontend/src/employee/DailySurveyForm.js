import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import getStrategySuggestions from "../utils/getStrategySuggestions";

function DailySurveyForm(){
    const initialFormData = {
        activity_time: 0,
        sleep_amount: 0,
        sleep_quality: 0,
        work_stress: 0,
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
                    <label htmlFor="activity_time">
                        Activity Time
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="activity_time" 
                        name="activity_time"
                        onChange={handleInput}
                        value={formData.activity_time}
                        placeholder="number of minutes being active yesterday" />
                </div>
                <div className="form-group">
                    <label htmlFor="sleep_amount">
                        Sleep Amount
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="sleep_amount" 
                        name="sleep_amount" 
                        onChange={handleInput}
                        value={formData.sleep_amount}
                        placeholder="Hours of sleep last night" />
                </div>
                <div className="form-group">
                    <label htmlFor="sleep_quality">
                        Sleep Quality
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="sleep_quality"
                        name="sleep_quality"
                        onChange={handleInput}
                        value={formData.sleep_quality}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="work_stress">
                        Work Stress
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="work_stress" 
                        name="work_stress" 
                        value={formData.work_stress} 
                        onChange={handleInput}
                        required />
                </div>
                
                <button type="submit" className="btn btn-primary mr-3">Submit</button>
                <button type="button" className="btn btn-secondary mr-3" onClick={()=>navigate(-1)}>Cancel</button>
            </form>
        </div>)
}

export default DailySurveyForm;