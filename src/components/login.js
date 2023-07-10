import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/user/signin', { email, password });
      console.log('Login successful:', response.data);
      const userId = response.data.id; // Extract the user ID from the response
      localStorage.setItem('userId', userId);
      navigate('/home'); // Navigate to the home page after successful login
      window.location.reload();
    } catch (error) {
      console.log('Login failed:', error.response);

      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('Incorrect Email id or Password');
      }
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login Page</h1>
        {error && <div className="login-error">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{' '}
          <span className="register-link-text" onClick={handleRegister}>
            <u>Register</u>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
