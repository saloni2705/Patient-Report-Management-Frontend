import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      let url = 'http://localhost:9090/api/patients/list-patients';
      if (keyword) {
        url = `http://localhost:9090/api/patients/search?keyword=${keyword}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const clearSearch = () => {
    setKeyword('');
    fetchPatients();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9090/api/patients/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Patient deleted successfully, navigate to updated patient list
        fetchPatients(); // Refetch the patients to update the list
      } else {
        console.error('Failed to delete patient');
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="container">
        <h3>Available Patients</h3>
      </div>

      <div className="container">
        <p>All available patients are displayed here.</p>
        <div className="mb-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search patients"
          />
          <button type="button" className="btn btn-primary" onClick={fetchPatients}>
            Search
          </button>
          <button type="button" className="btn btn-secondary" onClick={clearSearch}>
            Clear
          </button>
        </div>
        {/* Add your table and iterate over the patients */}
        <table className="table table-striped table-info">
          <thead className="table-dark">
            <tr className="table-active">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Medical History</th>
              <th>Fees Paid</th>
              <th>Update</th>
              <th>Report</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.gender}</td>
                <td>{patient.city}</td>
                <td>{patient.email}</td>
                <td>{patient.mobile}</td>
                <td>{patient.medicalHistory}</td>
                <td>{patient.feesPaid}</td>
                <td>
                  <Link to={`/update/${patient.id}`} className="btn btn-info">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to={`/patient/view-report/${patient.id}`} className="btn btn-primary">
                    Report
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
