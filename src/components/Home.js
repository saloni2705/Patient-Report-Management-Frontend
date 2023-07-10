import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pmsImage from './Images/pmsImage.jpg';

function Home() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/home" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">User Dashboard</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li>
                <Link to="/home" className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/patients" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Records</span>
                </Link>
              </li>
              <li>
                <span
                  className={`nav-link px-0 align-middle text-white ${showProfileOptions ? 'active' : ''}`}
                  onClick={toggleProfileOptions}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span>
                </span>
              </li>
              {showProfileOptions && (
                <>
                  <li>
                    <Link to="/user/viewUser" className="nav-link px-0 align-middle text-white">
                      <i className="fs-4 bi-eye"></i> <span className="ms-1 d-none d-sm-inline">View Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/updatePassword" className="nav-link px-0 align-middle text-white">
                      <i className="fs-4 bi-lock"></i> <span className="ms-1 d-none d-sm-inline">Change Password</span>
                    </Link>
                  </li>
                </>
              )}
              <li>
                <a href="/logout" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0 d-flex justify-content-start align-items-center">
          <div style={{ marginLeft: '100px', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <div>
              <h1
                className="text2"
                style={{
                  height: '94px',
                  width: 'auto',
                  color: '#000000',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  letterSpacing: '0',
                  lineHeight: '48px',
                  marginRight: '20px',
                  marginTop: '-80px', // Adjust the marginTop value to move the text slightly above
                }}
              >
                Patient <br />
                Report <br />
                Management <br />
                System
              </h1>
              <div style={{ marginTop: '120px' }}>
              
              </div>
              <p style={{ fontSize: '25px', color: '#1A2745', height: '25px', marginTop: '-10px' }}>Everything you need to manage patient reports</p>
            </div>
            <img src={pmsImage} alt="Your Image" style={{ width: '60%', height: 'auto', margin: '0 auto', marginTop: '-40px' }} /> {/* Adjust the marginTop value to move the image slightly above */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
