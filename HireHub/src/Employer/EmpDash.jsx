import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function EmpDash() {
  const jobs = [
    {
      title: "Frontend Developer",
      department: "Development",
      postedDate: "Mar 15, 2026",
      applicants: 45,
      email: "hr@careersetu.com",
      phone: "(123) 456-7890",
      status: "Active",
    },
    {
      title: "Project Manager",
      department: "Sales & Marketing",
      postedDate: "Feb 20, 2026",
      applicants: 30,
      email: "jobs@careersetu.com",
      phone: "(555) 321-7612",
      status: "Closed",
    },
    {
      title: "Data Analyst",
      department: "Analytics & Data",
      postedDate: "Jan 10, 2026",
      applicants: 60,
      email: "analytics@careersetu.com",
      phone: "(333) 345-5456",
      status: "Active",
    },
  ];

  const applicant = [
    {
      pic: "/src/assets/diksha.jpeg", // applicant photo
      name: "Olivia Williams",
      experience: "2 Years Exp", // fresher / 1 yr / 2 yr etc.
      role: "Frontend Developer", // applied role
      appliedDate: "Apr 5, 2026",
      email: "olivia.williams@example.com",
      phone: "(123) 456-7890",
      status: "Pending", // top right badge (Followed, Pending, Shortlisted etc.)
    }
  ];

  const interviews = [
    { candidate: "Chester Wiza", role: "Full Stack Developer", date: "Apr 12, 2026", time: "10:00 AM" },
    { candidate: "Luis Calvillo", role: "Data Analyst", date: "Apr 13, 2026", time: "2:00 PM" },
  ];

  return (
    <>
      {/* Top Bar */}
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <Col md={9}>
          <input type="text" className="form-control w-100 rounded-pill" placeholder="Search jobs/applicants..." />
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <button className="btn btn-outline-secondary rounded-pill me-2 hover-btn"> Sort </button>
          <button className="btn btn-outline-primary rounded-pill me-2 hover-btn"> Import </button>
          <button className="btn btn-primary rounded-pill hover-btn"> + Post Job </button>
        </Col>
      </Row>

      {/* Summary Widgets */}
      <Row className="mb-4">
        <Col md={3}>
          <div className="card p-3 shadow-sm">Active Jobs: 12</div>
        </Col>
        <Col md={3}>
          <div className="card p-3 shadow-sm">Applicants: 340</div>
        </Col>
        <Col md={3}>
          <div className="card p-3 shadow-sm">Interviews: 8</div>
        </Col>
        <Col md={3}>
          <div className="card p-3 shadow-sm">Hires: 5</div>
        </Col>
      </Row>

      {/* Job Postings */}
      <h5 className="fw-bold mb-3">Job Postings</h5>
      <Row className="mb-4">
        {jobs.map((job, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <div className="card shadow-sm h-100 position-relative job-card">
              {/* Top Right Status Badge */}
              <span
                className={`badge rounded-pill position-absolute top-0 end-0 m-2 ${
                  job.status === "Active"
                    ? "bg-success"
                    : job.status === "Closed"
                    ? "bg-danger"
                    : "bg-secondary"
                }`}
              >
                {job.status}
              </span>

              <div className="card-body">
                {/* Job Title */}
                <h6 className="fw-bold mt-3">Role: {job.title}</h6>
                <p className="fw-bold">Department: <span className="badge bg-primary rounded-pill"> {job.department}</span> </p>

                {/* Job Details */}
                <Row>
                  <Col md={7}>
                    <p className="small m-0"><strong>Posted:</strong> <br /> {job.postedDate}</p>
                  </Col>
                  <Col md={5}>
                    <p className="small m-0"><strong>Applicants:</strong> <br /> {job.applicants}</p>
                  </Col>
                </Row>

                {/* Buttons */}
                <Row className="d-flex justify-content-center mt-3">
                  <Col md={6}>
                  <Button size="md" variant="info" className="rounded-pill hover-btn w-100">
                    Edit
                  </Button>
                  </Col>
                  <Col md={6}>
                  <Button size="md" variant="primary" className="rounded-pill hover-btn w-100">
                    View
                  </Button> </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Recent Applicants */}
      <h5 className="fw-bold mb-3">Recent Applicants</h5>
      <Row className="mb-4">
        {applicant.map((applicant, idx) => (
          <Col md={3} key={idx}>
            <Card className="shadow-sm applicant-card position-relative">
              {/* Top Right Status Badge */}
              <span
                className={`badge rounded-pill position-absolute top-0 end-0 m-2 ${
                  applicant.status === "Pending"
                    ? "bg-warning text-dark"
                    : applicant.status === "Followed"
                    ? "bg-info text-dark"
                    : applicant.status === "Shortlisted"
                    ? "bg-success"
                    : "bg-secondary"
                }`}
              >
                {applicant.status}
              </span>

              <Card.Body>
                {/* Pic + Name + Experience */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={applicant.pic}
                    alt={applicant.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold mb-1">{applicant.name}</h6>
                    <span className="badge bg-primary rounded-pill">{applicant.experience}</span>
                  </div>
                </div>

                {/* Role + Applied Date */}
                <Row>
                  <Col md={7}>
                    <p className="small m-0"><strong>Role:</strong> <br /> {applicant.role}</p>
                  </Col>
                  <Col md={5}>
                    <p className="small m-0"><strong>Applied Date:</strong> <br /> {applicant.appliedDate}</p>
                  </Col>
                </Row>

                {/* Email + Phone in grey box */}
                <div className="bg-light p-2 rounded mt-2">
                  <p className="small my-2 border-bottom"><strong>Email:</strong> {applicant.email}</p>
                  <p className="small my-2"><strong>Phone:</strong> {applicant.phone}</p>
                </div>

                {/* Buttons */}
                <Row className="d-flex justify-content-center mt-3">
                  <Col md={6}>
                  <Button size="md" variant="info" className="rounded-pill hover-btn w-100">
                    Edit
                  </Button>
                  </Col>
                  <Col md={6}>
                  <Button size="md" variant="primary" className="rounded-pill hover-btn w-100">
                    View
                  </Button> </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Upcoming Interviews */}
      <h5 className="fw-bold mb-3">Upcoming Interviews</h5>
      <Row className="mb-4">
        {interviews.map((intv, idx) => (
          <Col md={4} key={idx}>
            <div className="card shadow-sm interview-card">
              <div className="card-body">
                <h6 className="fw-bold mb-1">{intv.candidate}</h6>
                <p className="small m-0">{intv.role}</p>
                <p className="small m-0">Date: {intv.date}</p>
                <p className="small m-0">Time: {intv.time}</p>
                <span className="badge bg-warning text-dark rounded-pill mt-2">Scheduled</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Analytics Section */}
      <h5 className="fw-bold mb-3">Analytics</h5>
      <Row>
        <Col md={6}>
          <div className="card p-3 shadow-sm">
            {/* Replace with Chart.js or Recharts */}
            <h6 className="fw-bold">Hiring Trends</h6>
            <div style={{ height: "250px", background: "#f0f0f0" }}>
              {/* Chart Placeholder */}
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="card p-3 shadow-sm">
            <h6 className="fw-bold">Department-wise Stats</h6>
            <div style={{ height: "250px", background: "#f0f0f0" }}>
              {/* Chart Placeholder */}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default EmpDash;
