import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9090/user/createUser',
        {
          fullName,
          email,
          address,
          qualification,
          password,
        },
        {
          withCredentials: true, // Add this line
        }
      );
      console.log('Registration successful:', response.data);
      navigate('/');
    } catch (error) {
      console.log('Registration failed:', error.response);
  
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };
  
  
  const handleLogin = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Register Page</h1>
        {error && <div className="register-error">{error}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="register-label">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="register-input"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="register-label">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="register-label">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="register-input"
              placeholder="Enter your address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="qualification" className="register-label">Qualification:</label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="register-input"
              placeholder="Enter your qualification"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="register-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account?{' '}
          <span className="login-link-text" onClick={handleLogin}>
            <u>Login</u>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
