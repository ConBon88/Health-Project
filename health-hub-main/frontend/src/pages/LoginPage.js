import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin"
import '../css_Styles/Login.css';

function LoginPage() {
   // State variables to store email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Custom hook 'useLogin' to handle login functionality
  const { login, error, isLoading } = useLogin()

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the 'login' function from the 'useLogin' hook
    await login(email, password)
  }

  return (
    <>
    <center>
    <div className="login-container">
      <h1>Welcome to HealthHub</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button to submit the login form */}
        <button disabled={isLoading}>Login</button>
        
        {/* Display the error message if there is an error */}
        {error && <div className="error">{error}</div>}
      </form>
      <div className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </div>
    </div>
    </center>
    </>
  );
}

export default LoginPage;
