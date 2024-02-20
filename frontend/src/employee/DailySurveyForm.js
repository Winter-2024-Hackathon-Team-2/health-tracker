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
        let strategyType = getStrategySuggestions(formData);
        console.log(strategyType)
        setFormData(initialFormData);
        navigate(`/strategies/${strategyType}`)
    }
    
    return (
        <div className="flex items-center justify-center min-h-full">
            
            <form onSubmit={handleSubmit} className="w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Daily Survey</h1>
                <div className="form-group mb-4">
                    <label htmlFor="track_physical_activity" className="block text-gray-700 font-bold mb-2">
                        Sleep Quality
                    </label>
                    <input 
                        type="range" 
                        className="form-control range"
                        id="track_sleep_quality" 
                        name="track_sleep_quality" 
                        value={formData.track_sleep_quality} 
                        onChange={handleInput}
                        min= '1'
                        max= '10'
                        step='1'
                        required />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="track_sleep_duration" className="block text-gray-700 font-bold mb-2">
                        Hours Slept
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
                <div className="form-group mb-4">
                    <label htmlFor="track_physical_activity" className="block text-gray-700 font-bold mb-2">
                        Time spent active
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="track_physical_activity"
                        name="track_physical_activity"
                        onChange={handleInput}
                        value={formData.track_physical_activity}
                        required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="track_stress_level" className="block text-gray-700 font-bold mb-2">
                        Work Stress
                    </label>
                    <input 
                        type="range" 
                        className="form-control range"
                        id="track_stress_level" 
                        name="track_stress_level" 
                        value={formData.track_stress_level} 
                        onChange={handleInput}
                        min= '1'
                        max= '10'
                        step='1'
                        required />
                        <div className="w-full flex justify-between text-xs px-2">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="btn btn-primary mr-3">Submit</button>
                    <button type="button" className="btn btn-secondary mr-3" onClick={()=>navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>)
}

export default DailySurveyForm;