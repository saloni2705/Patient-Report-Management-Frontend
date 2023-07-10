import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/api/patients/view-report/${id}`);
        if (response.status === 200) {
          const reportData = response.data[0];
          console.log('Fetched report data:', reportData);
          setReport(reportData);
          setLoading(false);
        } else {
          console.log('Failed to fetch report data');
          setError('Failed to fetch report data');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error occurred while fetching report data:', error);
        setError('Error occurred while fetching report data');
        setLoading(false);
      }
    };
  
    fetchReportData();
  }, [id]);
  console.log('Report:', report);

  if (loading) {
    return <div>Loading report data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col-sm-8">
          <div className="container mt-4">
            <h2>Patient Report</h2>
            <hr />
            <div>
              <h3>Patient Information</h3>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={report.patient && report.patient.firstName} // Check if report.patient exists before accessing firstName
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={report.patient && report.patient.lastName} // Check if report.patient exists before accessing lastName
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      value={report.patient && report.patient.gender} // Check if report.patient exists before accessing gender
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={report.patient && report.patient.city} // Check if report.patient exists before accessing city
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={report.patient && report.patient.email} // Check if report.patient exists before accessing email
                      readOnly
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="phone">Mobile:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={report.patient && report.patient.mobile} // Check if report.patient exists before accessing mobile
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="feesPaid">Fees Paid:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="feesPaid"
                      value={report.patient && report.patient.feesPaid} // Check if report.patient exists before accessing feesPaid
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <hr />
              <h3>Report Information</h3>
              <div className="form-group">
                <label htmlFor="testResults">Test Results:</label>
                <textarea
                  className="form-control"
                  id="testResults"
                  readOnly
                  value={report.testResults}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="diagnosis">Diagnosis Information:</label>
                <textarea
                  className="form-control"
                  id="diagnosis"
                  readOnly
                  value={report.diagnosis}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="testType">Test Type:</label>
                <input
                  type="text"
                  className="form-control"
                  id="testType"
                  value={report.testType}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  value={report.date}
                  readOnly
                />
              </div>
              <Link to="/patients" className="btn btn-primary">
                Back to Patient List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
