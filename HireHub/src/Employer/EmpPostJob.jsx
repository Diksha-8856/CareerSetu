import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function EmpPostJob() {
  return (
    <>
    <Container fluid className='vh-100'>
      <Row className='mt-4 d-flex justify-content-center align-items-center'>
        <Col sm={10} className='mt-3 p-3 shadow-lg' style={{borderRadius:"10px"}}>

          <h3 className="mb-3 fw-bold text-center" style={{color:"#13357b"}}>POST NEW JOB</h3>

          <form className='form-control mt-4' style={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}>
                  {/* Company Name + Job Title */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Company Name</strong></label>
                      <input type="text" name="Company Name" className="form-control mt-2 rounded-pill"/>
                    </div>

                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Job Title</strong></label>
                      <input type="text" name="Job Title" className="form-control mt-2 rounded-pill"/>
                    </div>
                  </div>

                  {/* email + Experience */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Email</strong></label>
                      <input type="email" name="email" className="form-control mt-2 rounded-pill"/>
                    </div>

                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Experience (In Year)</strong></label>
                      <input type="number" name="experience" className="form-control mt-2 rounded-pill"/>
                    </div>
                  </div>

                  {/* qualification + Salary */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Qualification</strong></label>
                      <input type="text" name="qualification" className="form-control mt-2 rounded-pill" />
                    </div>

                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Salary (Per Annum)</strong></label>
                      <input type="number" name="salary" className="form-control mt-2 rounded-pill"/>
                    </div>
                  </div>

                  {/* Date + Address */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Posted date</strong></label>
                      <input type="date" name="posteddate" className="form-control mt-2 rounded-pill" style={{color:"#13357b"}}/>
                    </div>

                    <div className="col-md-6">
                      <label style={{color:"#13357b"}}><strong>Address</strong></label>
                      <textarea type="text" name="location" className="form-control mt-2"/>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-3">
                    <label style={{color:"#13357b"}}><strong>Job Description</strong></label>
                    <textarea name="jobdesc" className="form-control mt-2" rows="4" ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-end gap-2">
                    <button type="reset" className="btn bg-light" style={{color:"#13357b"}}>
                      Cancel
                    </button>
                    <button type="submit" className="btn text-light" style={{backgroundColor:"#13357b"}}>
                      SAVE & PUBLISH 🚀
                    </button>
                  </div>
          </form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default EmpPostJob
