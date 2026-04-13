import {
  faBars,
  faComments,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilelogo from "../assets/profile.jpeg";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { JobCard } from "../Components/Card";
function SerachJob() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [resume, setResume] = useState(null);
      const [coverLetter, setCoverLetter] = useState("");
      const [experience, setExperience] = useState("");
      const [skills, setSkills] = useState("");
      const [status, setStatus] = useState("Not Applied")
  const [userData, setUserData] = useState([]);
  const nevigate = useNavigate();

  const getPostData = async () => {
    const response = await axios.get(
      `http://localhost:8002/api/employerpostJob/`,
    );
    if (response.data.msg === "Success") {
      setUserData(response.data.job);
    }
  };
  console.log(userData)
  function logOut() {
    localStorage.removeItem("jobSeeker");
    nevigate("/login");
  }

  // const validate = () => {
  //   if (!localStorage.getItem("jobSeeker")) {
  //     toast.error("Please Login");
  //     nevigate("/login");
  //   }
  // };

    const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      experience,
      skills,
      coverLetter,
      resume,
      status
    };
    const response = await axios.post(`http://localhost:8002/api/applyJob`, formData);
    console.log(response);
    alert("Application Submitted Successfully 🚀");
    alert(setStatus("Applied"));
  };

  useEffect(() => {
    // validate();
    getPostData();
  }, []);
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
          <Col sm={12} >
            <Row className="">
              <Col sm={9} className="pt-3 d-flex">
                <div className="pt-2 ps-2">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="fs-5 bars"
                    style={{ color: "#13357B" }}
                  />
                </div>
                <div className="w-100 ms-3">
                  {" "}
                  <input
                    type="search"
                    placeholder="Search Jobs....."
                    className="py-2 form-control search-box w-75"
                  />
                </div>
              </Col>
              <Col sm={3} className="pt-4 pe-5">
                <div className="d-flex justify-content-end gap-2">
                  <span className="pt-1">
                    <Link>
                      <FontAwesomeIcon
                        icon={faComments}
                        className=" icon"
                        style={{ color: "#13357B" }}
                      />
                    </Link>
                  </span>
                  <span className="pt-1">
                    <Link>
                      {" "}
                      <FontAwesomeIcon
                        icon={faBell}
                        className=" icon"
                        style={{ color: "#13357B" }}
                      />
                    </Link>
                  </span>
                  <div className="profile-dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropDownBtn"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src={profilelogo}
                        alt=""
                        className="rounded-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px solid #13357B",
                          objectFit: "cover",
                        }}
                      />
                    </button>
                    <ul className="dropdown-menu lh-sm">
                      <li className="hoverColor">
                        <Link
                          className="dropdown-item fw-semibold"
                          to={"jobseekerprofile"}
                        >
                          <FontAwesomeIcon icon={faUser} /> Profile
                        </Link>
                      </li>
                      <li className="m-0 hoverColor">
                        <button
                          className="dropdown-item fw-semibold btn"
                          onClick={logOut}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faRightFromBracket} /> LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="row row-cols-1 row-cols-md-3 px-3 py-3 ">
              {userData.map((u, i) => (
                <JobCard 
                key={i}
                  company={u.comName}
                  title={u.jobTitle}
                  location={u.comAddress}
                  salary={u.salary}
                  desc={u.jobDesc}
                  type={u.department}
                  FullTime={u.jobType}
                  viewJob={`/jobseeker/jobDetails/${u._id}`}
                  OnSite={u.workMode}
                  modal={"modal"}
                  exampleModal={"#exampleModal"}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Col>
      {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <form
      onSubmit={handleSubmit}
      className="p-4 shadow-sm "
      style={{
        maxWidth: "700px",
        margin: "auto",
        borderRadius: "15px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h4 className="mb-3 fw-bold text-center" style={{ color: "#13357b" }}>
        Apply for Job
      </h4>

      {/* Name */}
      <div className="mb-3">
        <label className="fw-semibold">Full Name</label>
        <input
          type="text"
          className="form-control mt-1 rounded-pill"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="fw-semibold">Email</label>
        <input
          type="email"
          className="form-control mt-1 rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="fw-semibold">Phone</label>
        <input
          type="tel"
          className="form-control mt-1 rounded-pill"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      {/* Experience */}
      <div className="mb-3">
        <label className="fw-semibold">Experience (Years)</label>
        <input
          type="number"
          className="form-control mt-1 rounded-pill"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>

      {/* Skills */}
      <div className="mb-3">
        <label className="fw-semibold">Skills</label>
        <input
          type="text"
          className="form-control mt-1 rounded-pill"
          placeholder="React, Node, Python..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>

      {/* Resume Upload */}
      <div className="mb-3">
        <label className="fw-semibold">Upload Resume</label>
        <input
          type="file"
          className="form-control mt-1"
          onChange={(e) => setResume(e.target.files[0])}
        />
      </div>

      {/* Cover Letter */}
      <div className="mb-3">
        <label className="fw-semibold">Cover Letter</label>
        <textarea
          className="form-control mt-1"
          rows="3"
          placeholder="Why should we hire you?"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        ></textarea>
      </div>

      {/* Submit */}
      <div className="text-end">
        <button
          type="submit"
          className="btn text-light px-4 rounded-pill "  data-bs-dismiss="modal"
          style={{ backgroundColor: "#13357b" }}
        >
          Apply Now 🚀
        </button>
      </div>
    </form>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default SerachJob;
