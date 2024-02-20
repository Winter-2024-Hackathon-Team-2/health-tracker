import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import DailySurveyForm from "../employee/DailySurveyForm";
import EmployeeOverview from "../admin/EmployeeOverview";
import AddEmployee from "../admin/AddEmployee";
import StrategiesSearch from "../strategies/StrategiesSearch";
import ListStrategiesByType from "../strategies/ListStrategiesByType";
import LoginPage from "../home/Login";

function Routing() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

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
          <Route path="/strategies/:strategyType" element={<ListStrategiesByType />} />
        </>
      )}
      
    </Routes>
  );
}

export default Routing;
