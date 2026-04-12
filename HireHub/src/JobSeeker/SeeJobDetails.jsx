import { faBriefcase, faBuilding, faCalendar, faEnvelope, faFileLines, faGraduationCap, faLocation, faPen, faSackDollar, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function SeeJobDetails() {
  return (
    <>
    <Col sm={10}  style={{
         overflow: "auto",
  height: "100vh",
  backgroundColor: ` #ededed`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
      }}>
    <Row>
        <Col md={10} className='mb-3'>

       <div className="job-card">
      {/* Header */}
      <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="job-title" style={{color:"#13357b"}}>Frontend Developer</h2>
          <p className="company-name">Google Pvt. Ltd.</p>
        </div>
        <span className="status fw-semibold"> Active</span>
      </div>

      <hr />

      {/* Info Section */}
      <div className="job-info">
        <div className="info-item">
            <FontAwesomeIcon icon={faBuilding} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Company Name</p>
            <p className="value">Google Pvt. Ltd.</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faBriefcase} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">Frontend Developer</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">hr@google.com</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faUser} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">2 - 4 Years</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faGraduationCap} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value">B.Tech / MCA</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faSackDollar} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">8 - 12 LPA</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faCalendar} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value">10 Apr 2026</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faLocation} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Address</p>
            <p className="value">Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Description */}
      <div className="job-description">
        <div className="desc-header">
             <FontAwesomeIcon icon={faFileLines} className='icon'/>
          <p className="label" style={{color:"#13357b"}}>Job Description</p>
        </div>

        <p className="desc-text">
          We are looking for a skilled Frontend Developer to join our team.
          You will be responsible for building responsive and user-friendly
          web applications using React, JavaScript, HTML, and CSS. Collaborate
          with designers and backend developers to deliver high-quality products.
        </p>
      </div>

      {/* Buttons */}
      <div className="job-actions">
        <button className="btn edit-btn ">
             <FontAwesomeIcon icon={faPen} className='icon'/>
        </button>
        <button className="btn delete-btn">
             <FontAwesomeIcon icon={faTrash} className='icon  text-danger'/>
        </button>
      </div>
    </div>
      </Col>
    </Row>
    </Col>
    </>
  )
}

export default SeeJobDetails