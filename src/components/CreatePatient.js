import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePatient = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [feesPaid, setFeesPaid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert('Mobile number should be 10 digits.');
      return;
    }

    const patientData = {
      firstName,
      lastName,
      gender,
      city,
      email,
      mobile,
      medicalHistory,
      feesPaid
    };

    fetch('http://localhost:9090/api/patients/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(patientData)
})
.then(response => response.json())
.then(data => {
  console.log('Patient created:', data);
  navigate(`/create-report/${data.id}`, { state: { patientData: { ...patientData, id: data.id } } });

})
.catch(error => {
  console.error('Error creating patient:', error);
});

};

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setCity('');
    setEmail('');
    setMobile('');
    setMedicalHistory('');
    setFeesPaid('');
  };
  

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col-md-12">
          <h2>Create new Patient.</h2>
          <h3>Fill the patient data into the form.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <form className="needs-validation" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                required
              />
              <div className="invalid-feedback">Please provide a first name.</div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile number"
                maxLength={10}
                minLength={10}
                required
              />
              <div className="invalid-feedback">Please provide a mobile number.</div>
            </div>
            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History</label>
              <input
                type="text"
                className="form-control"
                id="medicalHistory"
                name="medicalHistory"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                placeholder="Enter medical history"
              />
            </div>
            <div className="form-group">
              <label htmlFor="feesPaid">Fees Paid</label>
              <input
                type="text"
                className="form-control"
                id="feesPaid"
                name="feesPaid"
                value={feesPaid}
                onChange={(e) => setFeesPaid(e.target.value)}
                placeholder="Enter fees paid"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-warning ml-2">Clear</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
