import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios'
import {toast} from "react-toastify"

function EmpPostJob() {
  const [workMode, setWorkMode] = useState("");
const [department, setDepartment] = useState("");
  const [comName,setComName] = useState('');
  const [jobTitle,setJobTitle] = useState('');
  const [empEmail,setEmpEmail] = useState('');
  const [qualification,setQualification] = useState('');
  const [experience,setExperience] = useState('');
  const [salary,setSalary] = useState('');
  const [postedDate,setPostedDate] = useState('');
  const [comAddress,setComAddress] = useState('');
  const [jobDesc,setJobDesc] = useState('');
  const [jobType,setJobType] = useState('');

  const postFormData = async(e)=>{
    e.preventDefault();
    const data = {comName,jobTitle,empEmail,qualification,experience,salary,postedDate,comAddress,jobDesc,jobType,workMode,department}
    const response = await axios.post(`http://localhost:8002/api/employerpostJob`, data);
    console.log(response);
    if(response.data.msg=="Success"){
      toast.success("Job Posted SuccessFully")
      setComName("")
      setJobTitle("")
      setComName("")
      setEmpEmail("")
      setExperience("")
      setQualification("")
      setSalary("")
      setPostedDate("")
      setComAddress("")
      setJobType("")
      setJobDesc("")
    }
  }

  return (
    <>
    <Container fluid className='vh-100'>
      <Row className='mt-4 d-flex justify-content-center align-items-center'>
        <Col sm={10} className='mt-3 p-3 shadow-lg' style={{borderRadius:"10px"}}>

          <h3 className="mb-3 fw-bold text-center" style={{color:"#13357b"}}>POST NEW JOB</h3>
<form
  className="p-4 mt-4 shadow-sm"
  style={{
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: "15px",
  }}
  onSubmit={postFormData}
>
  {/* Company Name + Job Title */}
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Company Name
      </label>
      <input
        type="text"
        className="form-control mt-2 rounded-pill"
        value={comName}
        onChange={(e) => setComName(e.target.value)}
      />
    </div>

    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Job Title
      </label>
      <input
        type="text"
        className="form-control mt-2 rounded-pill"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
    </div>
  </div>

  {/* Email + Experience */}
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Email
      </label>
      <input
        type="email"
        className="form-control mt-2 rounded-pill"
        value={empEmail}
        onChange={(e) => setEmpEmail(e.target.value)}
      />
    </div>

    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Experience (Years)
      </label>
      <input
        type="number"
        className="form-control mt-2 rounded-pill"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
    </div>
  </div>

  {/* Qualification + Salary */}
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Qualification
      </label>
      <input
        type="text"
        className="form-control mt-2 rounded-pill"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      />
    </div>

    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Salary (Per Annum)
      </label>
      <input
        type="number"
        className="form-control mt-2 rounded-pill"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
    </div>
  </div>

  {/* Job Type + Location Type */}
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Job Type
      </label>
      <select
        className="form-control mt-2 rounded-pill"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>
    </div>

    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Work Mode
      </label>
      <select
        className="form-control mt-2 rounded-pill"
        value={workMode}
        onChange={(e) => setWorkMode(e.target.value)}
      >
        <option value="">Select</option>
        <option value="On-site">On-site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>
  </div>

  {/* Department + Location */}
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Department
      </label>
      <input
        type="text"
        className="form-control mt-2 rounded-pill"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
    </div>

    <div className="col-md-6">
      <label className="fw-semibold" style={{ color: "#13357b" }}>
        Location
      </label>
      <input
        type="text"
        className="form-control mt-2 rounded-pill"
        value={comAddress}
        onChange={(e) => setComAddress(e.target.value)}
      />
    </div>
  </div>
  {/* Job Description */}
  <div className="mb-3">
    <label className="fw-semibold" style={{ color: "#13357b" }}>
      Job Description
    </label>
    <textarea
      className="form-control mt-2"
      rows="4"
      value={jobDesc}
      onChange={(e) => setJobDesc(e.target.value)}
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="text-end">
    <button
      type="submit"
      className="btn px-4 py-2 rounded-pill text-light"
      style={{ backgroundColor: "#13357b" }}
    >
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
