import React from "react";
import profileImg from "../assets/shagun.jpeg";
import { Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faFileInvoice, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from 'axios';

function EmpProfile() {
  const [empData, setEmpData] = useState({});

  const getEmpData = async () => {
      const res = await axios.get(`http://localhost:5000/api/empProfile`); // Replace with actual employer ID
      // console.log(res.data);
      if (res.data.msg === "Success") {
        setEmpData(res.data.employer[0]); // first object of array
}
  };
console.log(empData);
  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <>
      <Row className="justify-content-center">
        <Col md={12}>
          {/* Header Section */}
          <Card className="p-3 mb-3 bg-light border-0 shadow-lg rounded-4">
            <Row>
              <Col md={2}>
                <img src={profileImg} className="img-fluid rounded-circle border border-3" alt="profile" />
              </Col>

              <Col md={8}>
                <h3 className="m-0 fw-bold text-dark">
                  {empData.empName}{" "}
                  <FaCheckCircle style={{ color: "#13357B" }} />
                </h3>
                <p className=" fs-5 m-0 fw-semibold">{empData.comName}</p>

                <Row>
                  <Col sm={6}>
                    <div className="sizep"><FaMapMarkerAlt /> {empData.comAddress}</div>
                    <div className="sizep"><FaPhone /> {empData.empNum}</div>
                    <div className="sizep"><FaEnvelope /> {empData.empEmail}</div>
                  </Col>
                  <Col sm={6} className="p-0">
                    <div className="sizep"><FontAwesomeIcon icon={faIdCard} /> Aadhar: {empData.empAadharNum}</div>
                    <div className="sizep"><FontAwesomeIcon icon={faFileInvoice} /> PAN: {empData.panNum}</div>
                    <div className="sizep"><FontAwesomeIcon icon={faBuilding} /> GST: {empData.gstNum}</div>
                  </Col>
                </Row>
              </Col>

              <Col md={2} className="text-end">
                <button type="button" className="btn fw-semibold mainbtn px-3 rounded-pill hover-btn text-white" data-bs-toggle="modal" data-bs-target="#editRecruiterModal" style={{ backgroundColor: "#13357B" }} >
                  Edit Profile
                </button>
              </Col>
            </Row>
          </Card>

          {/* Sections */}
          <Row className="g-5 mt-3">
            <Col md={6}>
              <Card class="card">
                <div class="card-header pt-3" style={{ backgroundColor: "#13357B" }} >
                  <h5 className="fw-semibold text-white rounded">About Company</h5>
                </div>
                <div class="card-body">
                  <blockquote class="mb-0">
                    <p>{empData.comWork}</p>
                  </blockquote>
                </div>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="card">
                <div class="card-header pt-3" style={{ backgroundColor: "#13357B" }} >
                  <h5 className="fw-semibold text-white rounded">Registration Details</h5>
                </div>
                <div class="card-body">
                  <blockquote class="mb-0">
                    <p>{empData.regDate}</p>
                    <p className="m-0"><strong>Status:</strong> {empData.status}</p>
                  </blockquote>
                </div>
              </Card>
            </Col>

            <Col sm={12}>
              <div className="mt-4">
                <h3 className="mb-3 fw-bold" style={{ color: "#13357B" }}>
                  <FontAwesomeIcon icon={faFileInvoice} /> Jobs Posted
                </h3>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                  <Card className="p-3 shadow-sm border-0 rounded-4 hover-btn">
                    <h6 className="fw-bold">Frontend Developer</h6>
                    <p className="small m-0">Department: Development</p>
                    <p className="small m-0">Applicants: 45</p>
                  </Card>
                  
                  <Card className="p-3 shadow-sm border-0 rounded-4 hover-btn">
                    <h6 className="fw-bold">Data Analyst</h6>
                    <p className="small m-0">Department: Analytics</p>
                    <p className="small m-0">Applicants: 30</p>
                  </Card>
                  <Card className="p-3 shadow-sm border-0 rounded-4 hover-btn">
                    <h6 className="fw-bold">Project Manager</h6>
                    <p className="small m-0">Department: Sales & Marketing</p>
                    <p className="small m-0">Applicants: 20</p>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Modal Structure */}
      <div className="modal fade" id="editRecruiterModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Edit Recruiter Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Example form fields */}
              <form>
                <div className="mb-3">
                  <label className="form-label">Recruiter Name</label>
                  <input type="text" className="form-control" defaultValue={empData.empName} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" defaultValue={empData.comAddress} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" defaultValue={empData.empNum} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary rounded-pill">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpProfile;