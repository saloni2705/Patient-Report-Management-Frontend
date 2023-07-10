import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePatient from './components/CreatePatient';
import PatientList from './components/PatientList';
import UpdatePatient from './components/updatePatient';
import CreateReport from './components/CreateReport';
import ViewReport from './components/ViewReport';
import Login from './components/login';
import Logout from './components/Logout';
import NavigationBar from './components/NavigationBar';
import Register from './components/Register';
import Home from './components/Home';
import ViewUser from './components/ViewUser';
import UpdatePassword from './components/changePassword';


const AppRouter = () => {
  const showNavigationBar = !window.location.pathname.startsWith('/user') && window.location.pathname !== '/';

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:9090/user/logout', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        window.location.href = '/';
        
        console.log('Logout successful');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <NavigationBar showNavigationBar={showNavigationBar} handleLogout={handleLogout} />
        <Routes>
          <Route path="/add" element={<CreatePatient />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/update/:id" element={<UpdatePatient />} />
          <Route path="/create-report/:id" element={<CreateReport />} />
          <Route path="/patient/view-report/:id" element={<ViewReport />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/user/viewUser/:id" element={<ViewUser />} />
          <Route path="/user/updatePassword" element={<UpdatePassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
