import React, { useEffect } from "react";
import profileImg from "../assets/diksha.jpeg";
import axios from "axios";
import { FaGithub, FaLinkedin, FaRProject } from "react-icons/fa";
import { faEnvelope, faFile, faLocation, faLocationDot, faPhone, faProjectDiagram, faUser} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-toastify";
import { Card4 } from "../Components/Card";


function EmpProfile() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"];
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [gitHub, setGithub] = useState("");
  const [skill, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [expreience, setExpreince] = useState("");
  const [resume, setResume] = useState("");
  const [projectTitle, setPeojectTitle] = useState("");
  const [projectDesc, setProjectDecs] = useState("");
  const [userData, setUserData] = useState([]);
  
  // =======================post Data==================================
  const uploadProfileData = async (e) => {
    e.preventDefault();
    const user = { fullName, role, about, location, phone, email, linkedin, gitHub, skill, education, expreience, resume, projectTitle, projectDesc };
    const response = await axios.put(
      `http://localhost:8002/api/userprofile/${localStorage.getItem("jobSeeker")}`,
      user,
    );
    // console.log(response)
    // console.log(localStorage.getItem("jobSeeker"))
    if (response.data.msg == "Success") {
      toast.success("Profile Data Updated");
      setFullName("");
      setRole("");
      setAbout("");
      setLocation("");
      setPhone("");
      setEmail("");
      setLinkedin("");
      setGithub("");
      setSkills("");
      setEducation("");
      setResume("");
      setPeojectTitle("");
      setProjectDecs("");
      getUserData();
    }
  };

  // ===========================get Data================================
  const getUserData = async () => {
    const response = await axios.get(
      `http://localhost:8002/api/userprofile/${localStorage.getItem("jobSeeker")}`,
    );
    // console.log(response);
    if (response.data.msg === "Success") {
      setUserData(response.data.userProfile);
    }
  };
  console.log(userData);
  useEffect(() => {
    getUserData();
  }, []);


  return (
    <>
      <Col
        sm={10}
        className="px-3 py-3"
        style={{
          overflow: "auto",
          height: "100vh",
          backgroundColor: "#F2F0EF",
        }}
      >
        <Row className="justify-content-center">
          {/* Main Content (col-md-10) */}
          <Col md={12}>
            {/* Top Profile Card */}
            <Card className="p-3 mb-2 bg-white   border-0">
              <Row className="">
                <Col md={2}>
                  <img
                    src={profileImg}
                    className="img-fluid rounded"
                    alt="profile"
                  />
                </Col>

                <Col md={8}>
                  <h3 className="m-0">
                    {userData.fullName}{" "}
                    <FaCheckCircle className="" style={{ color: "#13357B" }} />
                  </h3>

                  <p className="mb-1 fs-5 m-0">{userData.role}</p>

                  <p className="text-muted m-0 sizepara">{userData.headline}</p>
                  <Row className="">
                    <Col sm={5} className="">
                      <div>
                        <div className="sizep">
                          <FaMapMarkerAlt /> {userData.location}
                        </div>
                        <div className="sizep">
                          <FontAwesomeIcon icon={faPhone} /> {userData.phone}
                        </div>
                        <div className="sizep">
                          <FaEnvelope /> {userData.email}
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} className="p-0 ">
                      <div className="sizep">
                        <FaLinkedin /> {userData.linkedin}
                      </div>
                      <div className="sizep">
                        <FaGithub /> {userData.gitHub}
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col md={2} className="text-end ">
                  <button
                    type="button"
                    className="btn fw-semibold mainbtn px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit Profile
                  </button>
                </Col>
              </Row>
            </Card>

            {/* Sections */}
            <Row className="">
              {/* About */}
              <Col md={6}>
                <Card className="px-3 bg-white border-0  py-3">
                  <h4 className="fw-semibold">About Me</h4>
                  <p className="fw-semibold">{userData.about}</p>
                </Card>
              </Col>

              {/* Skills */}
              <Col md={6}>
                <Card className="p-3 shadow-sm  bg-white  border-0 h-100">
                  <h4>Skills</h4>

                  <div className="d-flex flex-wrap gap-2 mt-2 bagde">
                    <span className="px-3 py-1 rounded-4">
                      {userData.skill}
                    </span>
                    <span className="px-3 py-1 rounded-4">CSS - Advanced</span>
                    <span className="px-3 py-1 rounded-4">
                      JavaScript - Intermediate
                    </span>
                    <span className="px-3 py-1 rounded-4">
                      React - Beginner
                    </span>
                    <span className="px-3 py-1 rounded-4">
                      Full Stack Developer
                    </span>
                  </div>
                </Card>
              </Col>

              {/* Education */}
              <Col md={6}>
                <Card className="p-3 mt-2 bg-white shadow-sm border-0">
                  <h4 className="m-0">Education</h4>

                  <h5>Diploma Computer Science</h5>
                  <p className="mb-1">
                    Mahamaya Polytechnic Information of technology
                  </p>
                  <small>2022 - 2025</small>

                  <hr className="m-0 my-3" />

                  <h5>High School</h5>
                  <p className="mb-1">UP Board</p>
                  <small>2022 | 83%</small>
                </Card>
              </Col>

              {/* Experience */}
              <Col md={6}>
                <Card className="px-3 py-2 mt-2 border-0 bg-white">
                  <h5 className="m-0 mb-1">Experience</h5>
                  <p className="m-0">{userData.expreience}</p>
                </Card>
                <Card className="p-3 mt-2 shadow-sm border-0 bg-white">
                  <h5>Updates</h5>
                  <p className="m-0 ps-1">📩 You received a new message</p>
                  <p className="ps-1 m-0">
                    📄 Your application is under review
                  </p>
                </Card>
                <Card className="px-3 py-2 mt-2 shadow-sm bg-white border-0">
                  <h5>Resume : </h5>
                  {userData.resume}
                </Card>
              </Col>
              <Col sm={12}>
                <div className="mt-4">
                  <h3 className="mb-3 fw-bold" style={{ color: "#13357B" }}>
                    <FontAwesomeIcon icon={faFile} />
                    My Projects
                  </h3>
                  <div class="row row-cols-1 row-cols-md-4 g-2">
                    <Card4
                      title="Job Portal Website"
                      src=""
                      desc="A full job portal where users can apply for jobs, built using React and Node.js."
                    />
                    <Card4
                      title="Job Portal Website"
                      src=""
                      desc="A full job portal where users can apply for jobs, built using React and Node.js."
                    />
                    <Card4
                      title="Job Portal Website"
                      src=""
                      desc="A full job portal where users can apply for jobs, built using React and Node.js."
                    />
                    <Card4
                      title="Job Portal Website"
                      src=""
                      desc="A full job portal where users can apply for jobs, built using React and Node.js."
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-4 py-2">
              {/* Basic Info */}
              <form action="" onSubmit={uploadProfileData}>
                <div className="bg-light rounded-4 px-3 py-3 shadow-sm">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">Full Name</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Enter name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">Role</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Frontend Developer"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="fw-semibold mb-1">Headline</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Frontend Developer"
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fw-semibold mb-1">About Me</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Contact */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">Location</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="City, State"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">Phone</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">Email</label>
                      <input
                        type="email"
                        className="form-control py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="fw-semibold mb-1">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="fw-semibold mb-1">GitHub</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      value={gitHub}
                      onChange={(e) => setGithub(e.target.value)}
                    />
                  </div>

                  {/* Skills */}
                  <div className="mb-3">
                    <label className="fw-semibold mb-1">Skills</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="React, CSS, JS"
                      value={skill}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </div>

                  {/* Education */}
                  <div className="mb-3">
                    <label className="fw-semibold mb-1">Education</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Diploma / College"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <label className="fw-semibold mb-1">Experience</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Fresher / Years"
                      value={expreience}
                      onChange={(e) => setExpreince(e.target.value)}
                    />
                  </div>

                  {/* Resume */}
                  <div className="mb-3">
                    <label>Upload Resume</label>
                    <input
                      type="file"
                      className="form-control py-2"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </div>

                  {/* Projects */}
                  <div className="mb-3">
                    <label className="fw-semibold mb-1">Project Title</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      value={projectTitle}
                      onChange={(e) => setPeojectTitle(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="fw-semibold mb-1">
                      Project Description
                    </label>
                    <textarea
                      className="form-control"
                      value={projectDesc}
                      onChange={(e) => setProjectDecs(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button className="btn fw-semibold rounded-2 py-2 w-100 mainbtn">
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpProfile