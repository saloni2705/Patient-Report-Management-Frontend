import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
  const { id } = useParams(); // Get the user ID from the URL parameter
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/user/viewUser/${id}`); // Include the user ID in the URL
        if (response.status === 200) {
          const userData = response.data;
          console.log('Fetched user data:', userData);
          setUser(userData);
          setLoading(false);
        } else {
          console.log('Failed to fetch user data');
          setError('Failed to fetch user data');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error occurred while fetching user data:', error);
        setError('Error occurred while fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  console.log('User:', user);

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col-sm-8">
          <div className="container mt-4">
            <h2>User Details</h2>
            <hr />
            <div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={user.fullName}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={user.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={user.address}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification">Qualification:</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification"
                  value={user.qualification}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  value={user.role}
                  readOnly
                />
              </div>
              <Link to="/home" className="btn btn-primary">
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
