import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moodscapename from '../images/moodscapename.png';

function NavBar() {
  const strategyType = localStorage.getItem("strategyType");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('is_admin');
    localStorage.removeItem('surveyComplete');
    navigate("/");
    window.location.reload();
  };
  const isAdmin = localStorage.getItem('is_admin');

  return (
    <div className="navbar bg-off-white flex flex-row">
      {isAdmin === 'true' ? (
        <>
          <div className="navbar-start">
            <button
              className="btn bg-dark-purple text-white hover:bg-violet-800 px-4"
              onClick={() => navigate('/admin/add')}
            >
              Add
            </button>
          </div>
          <div className="navbar-center">
            <img
              href="/"
              src={moodscapename}
              alt="moodscape logo"
              className="btn btn-ghost text-xl"
            />
          </div>
          <div className="navbar-end">
            <button
              className="btn bg-dark-purple text-white hover:bg-violet-800 px-9"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to={`/track/${userId}`}>History</Link>
                </li>
                <li>
                  <Link to={`/strategies/${strategyType}`}>Strategies</Link>
                </li>
                <li>
                  <Link to="/strategies">Search</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <img
              href="/"
              src={moodscapename}
              alt="moodscape logo"
              className="btn btn-ghost text-xl"
            />
          </div>
          <div className="navbar-end">
            <button
              className="btn bg-dark-purple text-white hover:bg-violet-800 px-9"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
