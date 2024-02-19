import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import Surveyboard from "../employee/Surveyboard";
import EmployeeOverview from "../admin/EmployeeOverview";
import AddEmployee from "../admin/AddEmployee";
import NewUser from "../users/NewUser";
import NewSurvey from "../employee/NewSurvey";
import Dashboard from "../dashboard/Dashboard";
import EditUser from "../users/EditUser";
import EditSurvey from "../employee/EditSurvey";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/admin/add" element={<AddEmployee />} />
        <Route path="/admin" element={<EmployeeOverview />} />
        <Route path="/track" element={<Surveyboard />} />
        <Route path="/track/new" element={<NewSurvey />} />
        <Route path="/track/:trackId/edit" element={<EditSurvey />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/users/new" element={<NewUser />} />
        <Route path="/users/:userId/edit" element={<EditUser />} />
        <Route path="/users" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Routing;
