import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import DailySurveyForm from "../employee/DailySurveyForm";
import EmployeeOverview from "../admin/EmployeeOverview";
import AddEmployee from "../admin/AddEmployee";
import StrategiesSearch from "../strategies/StrategiesSearch";
import ListStrategiesByType from "../strategies/ListStrategiesByType";
import LoginPage from "../home/Login";
import NewUser from "../users/NewUser";
import NewSurvey from "../employee/NewSurvey";
import Dashboard from "../dashboard/Dashboard";
import EditUser from "../users/EditUser";
import EditSurvey from "../employee/EditSurvey";
import Surveyboard from "../employee/Surveyboard";
import SurveyCard from "../employee/SurveyCard";
function Routing() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Routes>
      {/* If user is not logged in, redirect to login page */}
      {!isLoggedIn && <Route path="/*" element={<LoginPage />} />}

      <Route path="/login" element={<LoginPage />} />
      {/* Routes accessible only when logged in */}
      {isLoggedIn && (
        <>
          <Route path="/admin/add" element={<AddEmployee />} />
          <Route path="/admin" element={<EmployeeOverview />} />
          <Route path="/survey" element={<DailySurveyForm />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/strategies" element={<StrategiesSearch />} />
          {/* Currently not functional, placeholder text tells user to fill out survey or search for strategies. */}
          {/* TODO: Add functionality that takes survey input and replace :/strategyType with {strategyType} from survey */}
          <Route
            path="/strategies/:strategyType"
            element={<ListStrategiesByType />}
          />
          <Route path="/track" element={<Surveyboard />} />
          <Route path="/track/new" element={<NewSurvey />} />
          <Route path="/track/:trackId/edit" element={<EditSurvey />} />
          <Route path="/track/:userId" element={<Surveyboard />} />
          <Route path="/users/new" element={<NewUser />} />
          <Route path="/users/:userId/edit" element={<EditUser />} />
          <Route path="/users" element={<Dashboard />} />
        </>
      )}
    </Routes>
  );
}

export default Routing;
