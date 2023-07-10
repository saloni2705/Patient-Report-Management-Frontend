import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CreateReport = () => {
  const { id } = useParams(); // Retrieve the id parameter from the URL
  const location = useLocation();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState({});
  const [date, setDate] = useState('');
  const [testType, setTestType] = useState('');
  const [testResults, setTestResults] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [otherTestType, setOtherTestType] = useState('');

  useEffect(() => {
    setPatientData(location.state?.patientData || {});
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reportData = {
      id: id,
      date,
      testType: testType === 'Other' ? otherTestType : testType,
      testResults,
      diagnosis
    };

    axios
      .post(`http://localhost:9090/api/patients/${id}/reports`, reportData)
      .then((response) => {
        console.log('Report created:', response.data);
        navigate('/patients');
      })
      .catch((error) => {
        console.error('Error creating report:', error);
      });
  };

  const handleReset = () => {
    setDate('');
    setTestType('');
    setOtherTestType('');
    setTestResults('');
    setDiagnosis('');
  };

  return (
    <div className="container">
      <h2>Create New Report</h2>
      <hr />
      <form className="was-validated" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID</label>
          <input
            type="text"
            className="form-control"
            id="patientId"
            name="patientId"
            value={patientData.id || ''}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            className="form-control"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please enter a valid date.</div>
        </div>

        <div className="form-group">
          <label htmlFor="testType">Test Type</label>
          <select
            className="form-control"
            id="testType"
            name="testType"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
            required
          >
            <option value="">Select a test type</option>
             <option value="No Test Required">No Test Required</option>
            <option value="Blood test">Blood test</option>
            <option value="X-ray">X-ray</option>
            <option value="Allergy tests">Allergy tests</option>
            <option value="Dental tests">Dental tests</option>
            <option value="Genetic tests">Genetic tests</option>
            <option value="Hormone tests">Hormone tests</option>
            <option value="Immunological tests">Immunological tests</option>
            <option value="Infectious serology tests">Infectious serology tests</option>
            <option value="Clinical chemistry">Clinical chemistry</option>
            <option value="Microbiological tests">Microbiological tests</option>
            <option value="Tumor marker tests">Tumor marker tests</option>
            <option value="Clinical urine tests">Clinical urine tests</option>
            <option value="Stool analysis">Stool analysis</option>
            <option value="Other">Other</option>
          </select>
          {testType === 'Other' && (
            <input
              type="text"
              className="form-control mt-2"
              id="otherTestType"
              name="otherTestType"
              placeholder="Enter test type"
              value={otherTestType}
              onChange={(e) => setOtherTestType(e.target.value)}
              required
            />
          )}
          <div className="invalid-feedback">Please select or enter a test type.</div>
        </div>

        <div className="form-group">
          <label htmlFor="testResults">Test Results</label>
          <textarea
            className="form-control"
            id="testResults"
            name="testResults"
            value={testResults}
            onChange={(e) => setTestResults(e.target.value)}
            required
          ></textarea>
          <div className="invalid-feedback">Please enter the test results.</div>
        </div>

        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis</label>
          <textarea
            className="form-control"
            id="diagnosis"
            name="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          ></textarea>
          <div className="invalid-feedback">Please enter the diagnosis.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Report
        </button>
        <button type="reset" className="btn btn-secondary ml-2">
          Reset
        </button>
      </form>
    </div>
  );
};

export default CreateReport;
