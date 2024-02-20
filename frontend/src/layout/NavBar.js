import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const strategyType = localStorage.getItem("strategyType")
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/survey">Daily Survey</Link>
        </li>
        <li>
          <Link to="/track">History</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link to="/users">Registration</Link>
        </li>
          <li>
            {/*TODO: implement function that replaces :strategyType with {strategyType} from user survey*/}
            <Link to={`/strategies/${strategyType}`}>Strategies</Link>
          </li>
          <li>
            <Link to="/strategies">Search</Link>
          </li>
      </ul>
    </nav>
  );
}

export default NavBar;
