import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./Login";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <header className="home-header">
          <h1>Our App</h1>
        </header>

        <section className="home-intro">
          <div className="intro-content">
            <p></p>
            <div className="cta-buttons">
              <Link to="/login" className="cta-button login-btn">
                <h1>HomePage</h1>
                <LoginPage />
              </Link>
            </div>
          </div>
        </section>

        <section className="home-features">
          <div className="feature-item"></div>
          <div className="feature-item"></div>
          <div className="feature-item"></div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
