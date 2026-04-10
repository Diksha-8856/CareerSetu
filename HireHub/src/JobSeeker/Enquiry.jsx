import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";

function Enquiry() {
  const [enqid, setEnqId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [enquirytext, setEnquiryText] = useState("");
  const [postdate, setPostDate] = useState("");
  const [enquirytype, setEnquiryType] = useState("");

  const EnqData = async (e) => {
    e.preventDefault();

    const user = {
      name,
      gender,
      address,
      contactno,
      email,
      enquirytext,
      postdate,
      enquirytype
    };

      const response = await axios.post(
        "http://localhost:8002/api/enquiry",
        user,
      );
      toast.success("Enquiry Submitted Successfully ✅");
      console.log(response);
      setName('')
      setEnqId('')
      setEnquiryText('')
      setEnquiryType('')
      setGender('')
      setAddress('')
      setEmail('')
      setPostDate('')
      setContactNo('')
    } 
  

  return (
    <Col sm={10}   style={{ overflow: "auto", height: "100vh", backgroundColor: "#F2F0EF" }}>
      <Row>
        <Container fluid className="py-4" style={{ background: "#eef2f7" }}>
          <Row className="justify-content-center">
            <Col md={10} lg={10}>
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body className="p-4">
                  {/* Header */}
                  <h2 className="text-center fw-bold mb-4 text-primary">
                    💬 Have Any Query?
                  </h2>

                  <form onSubmit={EnqData}>
                    <Row>
                      {/* LEFT SIDE */}
                      <Col md={6}>
                        <h5 className="fw-bold mb-3">👤 Personal Details</h5>
                        <label htmlFor="" className="mb-1 fw-semibold">
                         Enquiry Type
                        </label>
                        <select className="form-control mb-3" value={enquirytype} onChange={(e)=>setEnquiryType(e.target.value)}>
                          <option>Select Query Type</option>
                          <option value={"Job Related"}>Job Related</option>
                          <option value={"Technical Issue"}>Technical Issue</option>
                          <option value={"General Inquiry"}>General Inquiry</option>
                          <option value={"Complaint"}>Complaint</option>
                        </select>
                        <label htmlFor="" className="fw-semibold mb-1">Fullname</label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control mb-3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />

                        <div className="mb-3">
                          <label className="fw-semibold me-2">Gender:</label>
                          <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                          />{" "}
                          Male
                           <input
                            type="radio"
                            value="Female"
                            className="ms-3"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                          />{" "}
                          Female
                          <input
                            type="radio"
                            value="Other"
                            className="ms-3"
                            checked={gender === "Other"}
                            onChange={(e) => setGender(e.target.value)}
                          />{" "}
                          Other
                        </div>

                        <textarea
                          placeholder="Address"
                          className="form-control mb-3"
                          rows={4}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </Col>

                      {/* RIGHT SIDE */}
                      <Col md={6}>
                        <h5 className="fw-bold mb-3">📞 Contact Info</h5>
<label htmlFor="" className="fw-semibold mb-1">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control mb-3 py-2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
<label htmlFor="" className="fw-semibold mb-1">Contact Number</label>

                        <input
                          type="text"
                          placeholder="Contact Number"
                          className="form-control mb-3 py-2"
                          value={contactno}
                          onChange={(e) => setContactNo(e.target.value)}
                        />

                        <h5 className="fw-bold mt-4 mb-4">📝 Enquiry Details</h5>
<label htmlFor="" className="fw-semibold mb-1">Enquiry Text</label>

                        <textarea
                          placeholder="Write your query..."
                          className="form-control mb-2"
                          rows={3}
                          value={enquirytext}
                          onChange={(e) => setEnquiryText(e.target.value)}
                        />
<label htmlFor="" className="fw-semibold mb-1">Enquiry Date</label>

                        <input
                          type="date"
                          className="form-control"
                          value={postdate}
                          onChange={(e) => setPostDate(e.target.value)}
                        />
                      </Col>
                    </Row>

                    {/* BUTTON */}
                    <div className="text-center mt-4">
                      <button className="btn btn-primary px-5 py-2 rounded-pill fw-bold shadow">
                        🚀 Submit Enquiry
                      </button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </Col>
  );
}

export default Enquiry;
