import React, { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

function EmpAddEnq() {
  const [enqid, setEnqId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [enquirytext, setEnquiryText] = useState("");
  const [postdate, setPostDate] = useState("");

  const EnqData = async (e) => {
    e.preventDefault();
    const user = { enqid, name, gender, address, contactno, email, enquirytext, postdate };
    console.log(user);
    const response = await axios.post('http://localhost:5000/api/enquiry', user);
    console.log(response);
  };

  return (
    <>
     <Container className="p-4">
      <form onSubmit={EnqData} className="bg-white p-4 rounded shadow-sm">
        {/* Header */}
        <h2 className='text-center mb-4 fw-bold'>
          <i className="fa-brands fa-accusoft fa-bounce"></i> Have Any Query?
        </h2>

        <Row className="g-4 justify-content-center">
          {/* LEFT */}
          <Col md={5}>
            <h5 className="fw-bold">Personal Details</h5>

            <label className="mb-1 fw-semibold"> Enquiry Type </label>
            <select className="form-select rounded-pill hover-btn mb-3">
              <option>Select Query Type</option>
              <option>Job Related</option>
              <option>Technical Issue</option>
              <option>General Inquiry</option>
              <option>Complaint</option>
            </select>

            <label className="mb-1 fw-semibold">Full Name</label>
            <input type="text" className='form-control rounded-pill hover-btn mb-3'
              value={name} onChange={(e) => setName(e.target.value)} />

            <label className="mb-1 fw-semibold">Gender</label><br />
            <div className="d-flex gap-3 mb-3">
              <label><input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
              <label><input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} /> Other</label>
            </div>

            <label className="mb-1 fw-semibold">Address</label>
            <textarea className='form-control hover-btn mb-3' rows={4}
              value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </Col>

          {/* RIGHT */}
          <Col md={5}>
            <h5 className="fw-bold">Contact Information</h5>

            <label className="mb-1 fw-semibold">Email</label>
            <input type="email" className='form-control rounded-pill hover-btn mb-3'
              value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="mb-1 fw-semibold">Contact Number</label>
            <input type="text" className='form-control rounded-pill hover-btn mb-3'
              value={contactno} onChange={(e) => setContactNo(e.target.value)} />

            <h5 className="fw-bold mt-3">Enquiry Details</h5>

            <label className="mb-1 fw-semibold">Enquiry Text</label>
            <textarea className='form-control hover-btn mb-3'
              value={enquirytext} onChange={(e) => setEnquiryText(e.target.value)}></textarea>

            <label className="mb-1 fw-semibold">Post Date</label>
            <input type="date" className='form-control rounded-pill hover-btn'
              value={postdate} onChange={(e) => setPostDate(e.target.value)} />
          </Col>
        </Row>

        {/* Button */}
        <button className="btn btn-primary w-100 mt-4 rounded-pill hover-btn">
          SUBMIT ENQUIRY
        </button>
      </form>
    </Container>
    </>
  )
}

export default EmpAddEnq
