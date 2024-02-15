import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from '../home/HomePage';
import DailySurveyForm from '../employee/DailySurveyForm';

function Routing() {
  return (<>
    
    <Routes>
       
      <Route path="/survey" element = {<DailySurveyForm />} />
      <Route path="/*" element = {<HomePage />} />   
              
    </Routes>
  </>)
}

export default Routing