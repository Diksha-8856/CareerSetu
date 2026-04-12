import React from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'

function Jobseeker() {

  const jobseekers = [
    {
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      skills: "React, Node",
      experience: "2 Years",
      applications: 15,
      status: "Active",
      created: "10 Apr 2026"
    },
    {
      name: "Neha Sharma",
      email: "neha@gmail.com",
      phone: "9123456780",
      city: "Mumbai",
      skills: "Java, Spring",
      experience: "3 Years",
      applications: 20,
      status: "Inactive",
      created: "08 Apr 2026"
    },
    {
      name: "Rohit Singh",
      email: "rohit@gmail.com",
      phone: "9012345678",
      city: "Bangalore",
      skills: "Python, Django",
      experience: "1 Year",
      applications: 10,
      status: "Active",
      created: "05 Apr 2026"
    },
     {
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      skills: "React, Node",
      experience: "2 Years",
      applications: 15,
      status: "Active",
      created: "10 Apr 2026"
    },
    {
      name: "Neha Sharma",
      email: "neha@gmail.com",
      phone: "9123456780",
      city: "Mumbai",
      skills: "Java, Spring",
      experience: "3 Years",
      applications: 20,
      status: "Inactive",
      created: "08 Apr 2026"
    },
    {
      name: "Rohit Singh",
      email: "rohit@gmail.com",
      phone: "9012345678",
      city: "Bangalore",
      skills: "Python, Django",
      experience: "1 Year",
      applications: 10,
      status: "Active",
      created: "05 Apr 2026"
    },
     {
      name: "Aman Verma",
      email: "aman@gmail.com",
      phone: "9876543210",
      city: "Delhi",
      skills: "React, Node",
      experience: "2 Years",
      applications: 15,
      status: "Active",
      created: "10 Apr 2026"
    },
    {
      name: "Neha Sharma",
      email: "neha@gmail.com",
      phone: "9123456780",
      city: "Mumbai",
      skills: "Java, Spring",
      experience: "3 Years",
      applications: 20,
      status: "Inactive",
      created: "08 Apr 2026"
    },
    {
      name: "Rohit Singh",
      email: "rohit@gmail.com",
      phone: "9012345678",
      city: "Bangalore",
      skills: "Python, Django",
      experience: "1 Year",
      applications: 10,
      status: "Active",
      created: "05 Apr 2026"
    }
  ]
  return (
   <>
   <Row className="mt-4">
      <Col>
        <div className="card shadow-sm p-3">

          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h5>Jobseeker List</h5>
            <Button size="sm" style={{ backgroundColor: "#13357b" }}>
              Add Jobseeker
            </Button>
          </div>

          {/* Table */}
          <Table responsive hover bordered>
            <thead className="bg-light text-center">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Skills</th>
                <th>Experience</th>
                <th>Applications</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {jobseekers.map((j, index) => (
                <tr key={index}>
                  <td>{j.name}</td>
                  <td>{j.email}</td>
                  <td>{j.phone}</td>
                  <td>{j.city}</td>
                  <td>{j.skills}</td>
                  <td>{j.experience}</td>
                  <td>{j.applications}</td>

                  {/* Status Badge */}
                  <td>
                    <span
                      style={{
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        color: "#fff",
                        backgroundColor:
                          j.status === "Active" ? "#28a745" : "#dc3545",
                      }}
                    >
                      {j.status}
                    </span>
                  </td>

                  <td>{j.created}</td>

                  {/* Actions */}
                  <td>
                    

                    <Button
                      size="sm"
                      style={{ backgroundColor: "#13357b" }}
                      className="me-2"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>

                    <Button size="sm" variant="outline-danger">
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </Col>
    </Row>
   </>
  )
}

export default Jobseeker
