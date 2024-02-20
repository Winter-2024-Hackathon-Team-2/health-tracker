import React from "react";
//import LoginPage from './Login'
import EmployeeOverview from "../admin/EmployeeOverview";
import NewSurvey from "../employee/NewSurvey";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      {localStorage.isAdmin ? <EmployeeOverview /> : <NewSurvey />}
    </div>
  );
}

export default HomePage;
