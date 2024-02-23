import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPage from "./home/Login";
import { Helmet } from 'react-helmet';

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
  <div className="App">
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Routes>
      {/* Route for the login page */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Route for all other pages */}
      <Route path="/*" element={<Layout />} />
    </Routes>
  </div>);
}

export default App;
