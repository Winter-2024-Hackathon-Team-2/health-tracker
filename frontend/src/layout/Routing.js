import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import DailySurveyForm from "../employee/DailySurveyForm";
import EmployeeOverview from "../admin/EmployeeOverview";
import AddEmployee from "../admin/AddEmployee";
import NewUser from "../users/NewUser";
import Dashboard from "../dashboard/Dashboard";
import { today } from "../utils/date-time";
function Routing() {
  return (
    <>
      <Routes>
        <Route path="/admin/add" element={<AddEmployee />} />
        <Route path="/admin" element={<EmployeeOverview />} />
        <Route path="/survey" element={<DailySurveyForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user/new" element={<NewUser />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Routing;
