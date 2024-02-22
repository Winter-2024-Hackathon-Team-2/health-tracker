import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPage from "./home/Login";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Routes>
      {/* Route for the login page */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Route for all other pages */}
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

export default App;
