import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import adminPro from '../assets/me4.jpg'

function AdDash() {
  return (
    <>
   <Row className='align-items-center px-3 py-2 bg-light shadow-sm'>

  {/* LEFT - MENU */}
  <Col sm={2} className='d-flex align-items-center'>
    <button className="btn btn-light btn-sm shadow">
      ☰
    </button>
  </Col>

  {/* CENTER - SEARCH */}
  <Col sm={6}>
    <div className='d-flex align-items-center bg-white px-3 py-1 rounded'>
      <i className="fa-solid fa-magnifying-glass me-2"></i>
      <input 
        type="text" 
        className="form-control border-0 shadow-none"
        placeholder="Search..."
      />
    </div>
  </Col>

  {/* RIGHT - ICONS + PROFILE */}
  <Col sm={4}>
    <div className='d-flex align-items-center justify-content-end gap-3'>
      
      {/* Bell */}
      <div className='position-relative'>
        <i className="fa-solid fa-bell fs-5"></i>
        
      </div>

      {/* Profile */}
      <div className='d-flex align-items-center gap-2'>
        <img 
          src={adminPro} 
          alt="" 
          className='rounded-circle'
          height='50'
          width='50'
        />
        <div>
          <div className='fw-bold'>shagun</div>
          <small className='text-muted'>Admin</small>
        </div>
      </div>

    </div>
  </Col>

</Row>

 <Row className="align-items-center mt-3">
          
          {/* LEFT - IMAGE */}
          <Col md={2}>
            <img 
              src={adminPro} 
              alt="profile" 
              className="img-fluid rounded"
            />
          </Col>

          {/* CENTER - DETAILS */}
          <Col md={7}>
            <div className="d-flex align-items-center gap-2">
              <h3 className="mb-0">Shagun</h3>
              <i className="fa-solid fa-circle-check" style={{color:"#13357b"}}></i>
            </div>

            <p className="mt-2 text-muted">Mern Full Stack Developer</p>

            <div className="d-flex flex-column gap-3 mt-1 text-muted">
              <span>
                <i className="fa-solid fa-location-dot me-2 mt-3"></i>
                Softpro India Computer Technologies Pvt. Ltd., Noida
              </span>

              <span>
                <i className="fa-solid fa-phone me-2"></i>
                7830667712
              </ span> 

              <span>
                <i className="fa-solid fa-envelope me-2 "></i>
                shagunpaharwa1981@gmail.com
              </span>
            </div>

            <div className="d-flex flex-column me-2 text-muted">
              <span>
                <i className="fa-brands fa-linkedin me-2"></i>
                https://www.linkedin.com/in/admin
              </span>

              <span>
                <i className="fa-brands fa-github me-2"></i>
                https://github.com/admin
              </span>
            </div>
          </Col>

          {/* RIGHT - BUTTON */}
          <Col md={3} className="text-center">
            <Button className="rounded-pill px-4 shadow-lg" style={{backgroundColor:"#13357b"}}>
              Edit Profile
            </Button>
          </Col>

        </Row>

  <Row>
    <Col>
    </Col>
    </Row>      
    </>
  )
}

export default AdDash
