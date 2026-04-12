import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { Card, Col, Row } from 'react-bootstrap'

function Jobs() {
  return (
    <>
    <Row className='mt-4 mx-auto'>
      <Col md={6} className='mb-3'>

       <div className="job-card">
      {/* Header */}
      <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="job-title" style={{color:"#13357b"}}>Frontend Developer</h2>
          <p className="company-name">Google Pvt. Ltd.</p>
        </div>
        <span className="status"> Active</span>
      </div>

      <hr />

      {/* Info Section */}
      <div className="job-info">
        <div className="info-item">
          <i className="fa-solid fa-building icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Company Name</p>
            <p className="value">Google Pvt. Ltd.</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-briefcase icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">Frontend Developer</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-envelope icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">hr@google.com</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-user icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">2 - 4 Years</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-graduation-cap icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value">B.Tech / MCA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-sack-dollar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">8 - 12 LPA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-calendar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value">10 Apr 2026</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-location-dot icon"></i>
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
          <i className="fa-solid fa-file-lines icon" ></i>
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
        <button className="btn edit-btn">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="btn delete-btn">
          <i className="fa-solid fa-trash"></i> 
        </button>
      </div>
    </div>
      </Col>

      <Col md={6} className='mb-3'>

       <div className="job-card">
      {/* Header */}
      <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="job-title" style={{color:"#13357b"}}>Frontend Developer</h2>
          <p className="company-name">Google Pvt. Ltd.</p>
        </div>
        <span className="status"> Active</span>
      </div>

      <hr />

      {/* Info Section */}
      <div className="job-info">
        <div className="info-item">
          <i className="fa-solid fa-building icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Company Name</p>
            <p className="value">Google Pvt. Ltd.</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-briefcase icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">Frontend Developer</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-envelope icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">hr@google.com</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-user icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">2 - 4 Years</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-graduation-cap icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value">B.Tech / MCA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-sack-dollar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">8 - 12 LPA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-calendar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value">10 Apr 2026</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-location-dot icon"></i>
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
          <i className="fa-solid fa-file-lines icon" ></i>
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
        <button className="btn edit-btn">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="btn delete-btn">
          <i className="fa-solid fa-trash"></i> 
        </button>
      </div>
    </div>
      </Col>
    </Row>

    <Row className='mt-4 mx-auto'>
      <Col md={6} className='mb-3'>

       <div className="job-card">
      {/* Header */}
      <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="job-title" style={{color:"#13357b"}}>Frontend Developer</h2>
          <p className="company-name">Google Pvt. Ltd.</p>
        </div>
        <span className="status"> Active</span>
      </div>

      <hr />

      {/* Info Section */}
      <div className="job-info">
        <div className="info-item">
          <i className="fa-solid fa-building icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Company Name</p>
            <p className="value">Google Pvt. Ltd.</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-briefcase icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">Frontend Developer</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-envelope icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">hr@google.com</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-user icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">2 - 4 Years</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-graduation-cap icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value">B.Tech / MCA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-sack-dollar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">8 - 12 LPA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-calendar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value">10 Apr 2026</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-location-dot icon"></i>
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
          <i className="fa-solid fa-file-lines icon" ></i>
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
        <button className="btn edit-btn">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="btn delete-btn">
          <i className="fa-solid fa-trash"></i> 
        </button>
      </div>
    </div>
      </Col>

      <Col md={6} className='mb-3'>

       <div className="job-card">
      {/* Header */}
      <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="job-title" style={{color:"#13357b"}}>Frontend Developer</h2>
          <p className="company-name">Google Pvt. Ltd.</p>
        </div>
        <span className="status"> Active</span>
      </div>

      <hr />

      {/* Info Section */}
      <div className="job-info">
        <div className="info-item">
          <i className="fa-solid fa-building icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Company Name</p>
            <p className="value">Google Pvt. Ltd.</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-briefcase icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">Frontend Developer</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-envelope icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">hr@google.com</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-user icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">2 - 4 Years</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-graduation-cap icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value">B.Tech / MCA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-sack-dollar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">8 - 12 LPA</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-calendar icon"></i>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value">10 Apr 2026</p>
          </div>
        </div>

        <div className="info-item">
          <i className="fa-solid fa-location-dot icon"></i>
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
          <i className="fa-solid fa-file-lines icon" ></i>
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
        <button className="btn edit-btn">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="btn delete-btn">
          <i className="fa-solid fa-trash"></i> 
        </button>
      </div>
    </div>
      </Col>
    </Row>
    </>
  )
}

export default Jobs
