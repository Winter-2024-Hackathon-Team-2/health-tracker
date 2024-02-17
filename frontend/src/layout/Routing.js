import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from '../home/HomePage';
import DailySurveyForm from '../employee/DailySurveyForm';
import EmployeeOverview from '../admin/EmployeeOverview';
import AddEmployee from '../admin/AddEmployee';

function Routing() {
  return (<>
    
    <Routes>
       
      <Route path="/admin/add" element = {<AddEmployee />} /> 
      <Route path="/admin" element = {<EmployeeOverview />} />
      <Route path="/survey" element = {<DailySurveyForm />} />
      <Route path="/*" element = {<HomePage />} />   
              
    </Routes>
  </>)
}

export default Routing