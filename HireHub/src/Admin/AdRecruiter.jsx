import {Button, Col, Row, Table } from 'react-bootstrap'

function AdRecruiter() {

  const recruiters = [
    {
      company: "Google",
      name: "Rahul Sharma",
      email: "rahul@google.com",
      phone: "9876543210",
      city: "Bangalore",
      status: "Active",
      jobs: 12,
      created: "10 Apr 2026"
    },
    {
      company: "Amazon",
      name: "Priya Singh",
      email: "priya@amazon.com",
      phone: "9123456780",
      city: "Hyderabad",
      status: "Inactive",
      jobs: 8,
      created: "08 Apr 2026"
    },
    {
      company: "TCS",
      name: "Amit Verma",
      email: "amit@tcs.com",
      phone: "9012345678",
      city: "Delhi",
      status: "Active",
      jobs: 5,
      created: "05 Apr 2026"
    },
     {
      company: "Google",
      name: "Rahul Sharma",
      email: "rahul@google.com",
      phone: "9876543210",
      city: "Bangalore",
      status: "Active",
      jobs: 12,
      created: "10 Apr 2026"
    },
    {
      company: "Amazon",
      name: "Priya Singh",
      email: "priya@amazon.com",
      phone: "9123456780",
      city: "Hyderabad",
      status: "Inactive",
      jobs: 8,
      created: "08 Apr 2026"
    },
    {
      company: "TCS",
      name: "Amit Verma",
      email: "amit@tcs.com",
      phone: "9012345678",
      city: "Delhi",
      status: "Active",
      jobs: 5,
      created: "05 Apr 2026"
    },
     {
      company: "Google",
      name: "Rahul Sharma",
      email: "rahul@google.com",
      phone: "9876543210",
      city: "Bangalore",
      status: "Active",
      jobs: 12,
      created: "10 Apr 2026"
    },
    {
      company: "Amazon",
      name: "Priya Singh",
      email: "priya@amazon.com",
      phone: "9123456780",
      city: "Hyderabad",
      status: "Inactive",
      jobs: 8,
      created: "08 Apr 2026"
    },
    {
      company: "TCS",
      name: "Amit Verma",
      email: "amit@tcs.com",
      phone: "9012345678",
      city: "Delhi",
      status: "Active",
      jobs: 5,
      created: "05 Apr 2026"
    }
  ]


  return (
   <>
   <Row>
    <Col>
    <Row className='mt-4 mx-auto'>
  <Col sm={12}>
     <div className="card shadow-sm p-3">

          {/* Header */}
          <div className="d-flex justify-content-between mb-3">
            <h5>Recruiter List</h5>
            <Button size="sm" style={{ backgroundColor: "#13357b" }}>
              Add Recruiter
            </Button>
          </div>

          {/* Table */}
          <Table responsive hover bordered>
            <thead className="bg-light text-center">
              <tr>
                <th>Company</th>
                <th>Recruiter</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Status</th>
                <th>Jobs</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {recruiters.map((r, index) => (
                <tr key={index}>
                  <td>{r.company}</td>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>{r.city}</td>

                  {/* Status Badge */}
                  <td>
                    <span
                      style={{
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        color: "#fff",
                        backgroundColor:
                          r.status === "Active" ? "#28a745" : "#dc3545",
                      }}
                    >
                      {r.status}
                    </span>
                  </td>

                  <td>{r.jobs}</td>
                  <td>{r.created}</td>

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
    </Col>
   </Row>
   </>
  )
}

export default AdRecruiter
