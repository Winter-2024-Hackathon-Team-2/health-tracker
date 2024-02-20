import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const strategyType = localStorage.getItem("strategyType")

  const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('is_admin');
      
      navigate("/");
      window.location.reload();
    };
  
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
        <button onClick={handleLogout}>Logout</button>
      </nav>
    );
}

export default NavBar;
