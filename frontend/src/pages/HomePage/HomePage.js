import React from "react";
import { Link } from "react-router-dom";
// Adding some icons for aesthetic purposes

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
                Login
              </Link>
              <Link to="/register" className="cta-button register-btn">
                Register
              </Link>
            </div>
          </div>
          {/* <img
            src={}
            alt=""
            className="intro-image"
          /> */}
        </section>

        <section className="home-features">
          <div className="feature-item">
            <h2>Read & Learn</h2>
            <p></p>
          </div>
          <div className="feature-item">
            <h2>Climb & Master</h2>
            <p></p>
          </div>
          <div className="feature-item">
            <h2>Expert Insights</h2>
            <p></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
