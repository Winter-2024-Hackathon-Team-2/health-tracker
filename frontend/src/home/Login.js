import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../utils/api';
import moodscapev2 from '../images/moodscapev2.png'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /*Test cases for Login:
  Admin
  username: 4
  password: 97273f94-697c-420c-8820-5f0703278e90

  User
  Username: 11
  Password: ad501149-a265-4df9-853b-e796efeee079
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await login(username, password);
      console.log('User logged in:', userData);
      localStorage.setItem('isLoggedIn', 'true');
      if (userData.is_admin) {
        localStorage.setItem('is_admin', 'true');
        navigate('/admin')
      }
      else {
        navigate(`/track/${username}/new`)
        window.location.reload();
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-sm xl:p-0'>
        <div className='p-6 space-y-2 md:space-y-2 sm:p-4 flex flex-col justify-center items-center'>
        <img src={moodscapev2} alt="Logo" className="w-32 mb-1" />
          <h2 className='text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Login
          </h2>
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
            <div>
              <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900'>Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className='input input-bordered w-full bg-white'
                required
              />
            </div>
            <div>
              <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className='input input-bordered w-full bg-white'
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className='text-center py-3'>
              <button type="submit" className='btn btn-info btn-wide text-center self-center'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;