import React from 'react'
//import LoginPage from './Login'
import EmployeeOverview from '../admin/EmployeeOverview'
import DailySurveyForm from '../employee/DailySurveyForm'

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      {
        localStorage.isAdmin ? (
          <EmployeeOverview />
        ) : (
          <DailySurveyForm />
        )}
    </div>
  )
}

export default HomePage