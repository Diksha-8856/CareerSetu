import { faBriefcase, faBuilding, faCalendar, faEnvelope, faFileLines, faGraduationCap, faLocation, faPen, faSackDollar, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function SeeJobDetails() {
  const [jobData,setJobDats] = useState([]);
  const {id} = useParams();
  // console.log("job ID",id)
  const getJobDetail =async ()=>{
    const response = await axios.get(`http://localhost:8002/api/employerpostJob/${id}`);
    console.log(response);
    if(response.data.msg == "Success"){
      setJobDats(response.data.postedJob);
    }
  }
  useEffect(()=>{
    getJobDetail();
  },[])
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
          <p className="company-name">{jobData.comName}</p>
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
            <p className="value">{jobData.comName}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faBriefcase} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Job Title</p>
            <p className="value">{jobData.jobTitle}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Email</p>
            <p className="value">{jobData.empEmail}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faUser} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Experience (In Year)</p>
            <p className="value">{jobData.experience}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faGraduationCap} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Qualification</p>
            <p className="value" style={{wordBreak: "break-word"}}>{jobData.qualification}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faSackDollar} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Salary (Per Annum)</p>
            <p className="value">{jobData.salary}</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faCalendar} className='icon'/>
          <div>
            <p className="label" style={{color:"#13357b"}}>Posted Date</p>
            <p className="value"> {jobData.createdAt?.split("T")[0]}
</p>
          </div>
        </div>

        <div className="info-item">
             <FontAwesomeIcon icon={faLocation} className='icon'/>
          <div className=''>
            <p className="label" style={{color:"#13357b"}}>Address</p>
            <p className="value " style={{wordBreak: "break-word"}}>{jobData.comAddress}</p>
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

        <p className="desc-text" style={{wordBreak: "break-word"}}>
          {jobData.jobDesc}
        </p>
      </div>
      </div>
      </Col>
    </Row>
    </Col>
    </>
  )
}

export default SeeJobDetails