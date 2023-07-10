import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationBar = ({ showNavigationBar, handleLogout }) => {
  const logout = () => {
    handleLogout(); // Invoke the handleLogout 
  };

  if (!showNavigationBar) {
    return null; // Don't render the navigation bar
  }

  const navBarStyle = {
    backgroundColor: '#0a7686', 
  };

  const navLinkStyle = {
    color: 'white',
  };

  const logoutLinkStyle = {
    color: 'white',
  };

  const homeLinkStyle = {
    color: 'white',
    marginLeft: '20px', // Adjust the margin as needed
  };

  return (
    <Navbar style={navBarStyle} variant="dark" expand="sm">
      <Navbar.Brand as={Link} to="/home" style={homeLinkStyle}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/add" style={navLinkStyle}>New Patient</Nav.Link>
          <Nav.Link as={Link} to="/patients" style={navLinkStyle}>Patient List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as="button" onClick={logout} style={logoutLinkStyle}>
            <i className="bi bi-box-arrow-right"></i> Log-out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
