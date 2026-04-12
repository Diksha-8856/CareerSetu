import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'

function ViewEnq() {
  const enquiries = [
    {
      type: "Job Related",
      name: "Rahul Sharma",
      gender: "Male",
      address: "Delhi",
      email: "rahul@gmail.com",
      contact: "9876543210",
      query: "I want to apply for frontend job"
    },
    {
      type: "Support",
      name: "Priya Singh",
      gender: "Female",
      address: "Mumbai",
      email: "priya@gmail.com",
      contact: "9876543211",
      query: "Unable to login"
    },
    {
      type: "General",
      name: "Amit Kumar",
      gender: "Male",
      address: "Noida",
      email: "amit@gmail.com",
      contact: "9876543212",
      query: "How to post job?"
    },
    {
      type: "Job Related",
      name: "Rahul Sharma",
      gender: "Male",
      address: "Delhi",
      email: "rahul@gmail.com",
      contact: "9876543210",
      query: "I want to apply for frontend job"
    },
    {
      type: "Support",
      name: "Priya Singh",
      gender: "Female",
      address: "Mumbai",
      email: "priya@gmail.com",
      contact: "9876543211",
      query: "Unable to login"
    },
    {
      type: "General",
      name: "Amit Kumar",
      gender: "Male",
      address: "Noida",
      email: "amit@gmail.com",
      contact: "9876543212",
      query: "How to post job?"
    }
  ]
  return (
   <>
   <Row>
    <Col>
     <div className="card p-3 shadow-sm mt-4">
      
      <div className="d-flex justify-content-between mb-3">
        <h5>Enquiry List</h5>
        <Button size="sm" style={{ backgroundColor: "#13357b" }}>
          View All
        </Button>
      </div>

      <Table responsive hover bordered>
        <thead className="bg-light">
          <tr>
            <th>Enquiry Type</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Query</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td style={{ maxWidth: "200px" }}>
                {item.query}
              </td>

              {/* Actions */}
              <td>
                <Button size="sm" className="me-2">
                  <i className="fa-solid fa-eye" style={{color:" rgb(30, 48, 80)"}}></i>
                </Button>
                <Button size="sm" variant="danger">
                  <i class="fa-solid fa-trash-can"  style={{color:" rgb(30, 48, 80)"}}></i>
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

export default ViewEnq
