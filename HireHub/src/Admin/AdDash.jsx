import React, { useState } from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'
import adminPro from '../assets/me4.jpg'
import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';

ModuleRegistry.registerModules([AllCommunityModule]);

function AdDash() {

  // ✅ Pie Chart Data Function
  const getData = () => {
    return [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 30000 },
      { asset: "Real Estate", amount: 20000 },
      { asset: "Cash", amount: 10000 },
    ];
  };

  // ✅ Bar Chart
  const [chartOptions] = useState({
    data: [
      { month: 'Jan', iceCreamSales: 162000 },
      { month: 'Mar', iceCreamSales: 302000 },
      { month: 'May', iceCreamSales: 800000 },
      { month: 'Jul', iceCreamSales: 1254000 },
      { month: 'Sep', iceCreamSales: 950000 },
      { month: 'Nov', iceCreamSales: 200000 },
    ],
    series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
  });

  // ✅ Pie Chart
  const [options] = useState({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
        },
      },
    ],
  });

  // ✅ Jobs Data
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      applications: 120,
      date: "10 Apr 2026",
      status: "Active"
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      applications: 95,
      date: "08 Apr 2026",
      status: "Closed"
    },
  ];

  return (
    <>
      {/* HEADER */}
      <Row className='align-items-center px-3 py-2 bg-light shadow-sm'>
        <Col sm={2}>
          <button className="btn btn-light btn-sm shadow">☰</button>
        </Col>

        <Col sm={6}>
          <div className='d-flex bg-white px-3 py-1 rounded'>
            <input 
              type="text" 
              className="form-control border-0 shadow-none"
              placeholder="Search..."
            />
          </div>
        </Col>

        <Col sm={4} className='d-flex justify-content-end align-items-center gap-3'>
          <i className="fa-solid fa-bell"></i>

          <div className='d-flex align-items-center gap-2'>
            <img src={adminPro} alt="" className='rounded-circle' height='40' width='40'/>
            <div>
              <div className='fw-bold'>shagun</div>
              <small className='text-muted'>Admin</small>
            </div>
          </div>
        </Col>
      </Row>

      {/* CARDS */}
      <Row className="mt-4 px-3">
        {[
          { title: "Total Applied Job", value: "26+", color: "#eaf4fd" },
          { title: "Total Shortlisted", value: "16+", color: "#eef8f0" },
          { title: "Total Recruiter", value: "26+", color: "#f4f2fb" },
          { title: "Total Job Seeker", value: "20+", color: "#fef8ea" },
          { title: "Total Posted Job", value: "21+", color: "#fdeff4" },
          { title: "Total Enquiries", value: "26+", color: "#eaf4fd" },
        ].map((item, i) => (
          <Col md={4} className="mb-3" key={i}>
            <div className="card text-center" style={{background:item.color}}>
              <div className="card-body">
                <h3>{item.value}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* TABLE */}
      <Row className="px-3">
        <Col>
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between mb-3">
              <h5>Recent Jobs</h5>
              <Button size="sm" style={{backgroundColor:"#13357b"}}>View All</Button>
            </div>

            <Table responsive hover>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Applications</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job, i) => (
                  <tr key={i}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.applications}</td>
                    <td>{job.date}</td>
                    <td>
                      <span style={{
                        padding: "5px 10px",
                        borderRadius: "20px",
                        color: "#fff",
                        backgroundColor: job.status === "Active" ? "#28a745" : "#dc3545"
                      }}>
                        {job.status}
                      </span>
                    </td>
                    <td>
                      <Button size="sm" className="me-2">Edit</Button>
                      <Button size="sm" variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* CHARTS */}
      <Row className="px-3">
        <Col md={6}>
          <div className="card mt-3 p-3">
            <AgCharts options={chartOptions} />
          </div>
        </Col>

        <Col md={6}>
          <div className="card mt-3 p-3">
            <AgCharts options={options} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AdDash;