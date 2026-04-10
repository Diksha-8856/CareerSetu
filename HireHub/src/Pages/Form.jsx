import React, { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

function Form() {
  //  const[form,setForm]=useState("");
  const [enqid, setEnqId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [enquirytext, setEnquiryText] = useState("");
  const [postdate, setPostDate] = useState("");



  const EnqData = async (e) => {
    e.preventDefault(e);
    const user = {
      enqid,
      name,
      gender,
      address,
      contactno,
      email,
      enquirytext,
      postdate

      
    }
    console.log(user);

    const response = await axios.post('http://localhost:5000/api/enquiry', user)
    console.log(response);

  }


  return (
    <div className="form-bg">
      <Container className="form-card w-50">
        <form onSubmit={EnqData}>

          {/* Header */}
          <h2 className='text-center mb-4 fw-bold'>
            <i class="fa-brands fa-accusoft fa-bounce"></i> JOB SEEKER ENQUIRY FORM
          </h2>


          <Row className="g-4 justify-content-center">

            {/* LEFT */}
            <Col md={5}>
              <h5 className="fw-bold">Personal Details</h5>

              <label>Enquiry ID</label>
              <input type="text" name="enqid" className='form-control mb-3' value={enqid} onChange={(e) => setEnqId(e.target.value)} />

              <label>Full Name</label>
              <input type="text" name="name" className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} />

              <label>Gender</label><br />
              <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male
              <input type="radio" name="gender" value="Female" className="ms-3" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female
              <input type="radio" name="gender" value="Other" className="ms-3" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} /> Other

              <br /><br />

              <label>Address</label>
              <textarea name="address" className='form-control mb-3' rows={4} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            </Col>

            {/* RIGHT */}
            <Col md={5}>
              <h5 className="fw-bold">Contact Information</h5>

              <label>Email</label>
              <input type="email" name="email" className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} />

              <label>Contact Number</label>
              <input type="text" name="contactno" className='form-control mb-3' value={contactno} onChange={(e) => setContactNo(e.target.value)} />

              <h5 className="fw-bold mt-3">Enquiry Details</h5>

              <label>Enquiry Text</label>
              <textarea name="enquirytext" className='form-control mb-3 ' value={enquirytext} onChange={(e) => setEnquiryText(e.target.value)}></textarea>

              <label>Post Date</label>
              <input type="date" name="postdate" className='form-control' value={postdate} onChange={(e) => setPostDate(e.target.value)} />
            </Col>

          </Row>

          {/* Button */}
          <button className="btn btn-primary w-100 mt-4">
            SUBMIT ENQUIRY
          </button>
        </form>
      </Container>
    </div>
  )
}

export default Form