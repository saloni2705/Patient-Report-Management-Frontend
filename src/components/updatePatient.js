import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdatePatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    email: '',
    mobile: '',
    medicalHistory: '',
    feesPaid: '',
  });

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/api/patients/update/${id}`);
      const patientData = response.data;
      setPatient(patientData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const updatePatient = async () => {
    try {
      await axios.put(`http://localhost:9090/api/patients/update/${id}`, patient);
      console.log('Patient updated successfully');
      navigate('/patients'); // Navigate back to the patient list page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <h2>Update Patient</h2>
      <div className="row">
        <div className="col-sm-8">
          <form>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={patient.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={patient.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={patient.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={patient.city}
                onChange={handleInputChange}
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={patient.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={patient.mobile}
                onChange={handleInputChange}
                placeholder="Mobile"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History</label>
              <textarea
                className="form-control"
                id="medicalHistory"
                name="medicalHistory"
                value={patient.medicalHistory}
                onChange={handleInputChange}
                placeholder="Medical History"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="feesPaid">Fees Paid</label>
              <input
                type="number"
                className="form-control"
                id="feesPaid"
                name="feesPaid"
                value={patient.feesPaid}
                onChange={handleInputChange}
                placeholder="Fees Paid"
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={updatePatient}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePatient;
