import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //Here's where we'll edit once we have backend
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
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