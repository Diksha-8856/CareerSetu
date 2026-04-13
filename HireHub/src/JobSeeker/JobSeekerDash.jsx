import {
  faBars,
  faBellSlash,
  faBookmark,
  faBriefcase,
  faCalendar,
  faCalendarCheck,
  faCalendarDay,
  faComments,
  faEye,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilelogo from "../assets/profile.jpeg";
import google from "../assets/google.jpg";
import netflix from "../assets/netflix1.png";
import paypal from "../assets/paypal.jpg";
import nasa from "../assets/nasa1.png";
import flipkart from "../assets/flipkart.png";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card, { Card2, Card3 } from "../Components/Card";
import bg1 from '../assets/bg13.jpeg'
import axios from "axios";
import { toast } from "react-toastify";

function JobSeekerDash() {
   const [userData, setUserData] = useState([]);
  const nevigate = useNavigate();

      const getUserData = async () => {
    const response = await axios.get(
      `http://localhost:8002/api/userprofile/${localStorage.getItem("jobseeker")}`,
    );
    // console.log(response);
    if (response.data.msg === "Success") {
      setUserData(response.data.userProfile);
    }
  };
  // console.log(userData)
  function logOut(){
    localStorage.removeItem('jobseeker');
  nevigate('/login')
  }

  const validate = ()=>{
    if(!localStorage.getItem('jobseeker')){
      toast.error("Please Login");
      nevigate("/login")
    }
  }
  useEffect(() => {
    validate()
    getUserData();
  }, []);

  return (
    <>
      <Col sm={10} className="mainRow " style={{
         overflow: "hidden",
  height: "100vh",
  backgroundColor: ` #ededed`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
      }}>
        <Row className="" >
          <Col sm={9} className="pt-3 d-flex" >
            <div className="pt-2 ps-2">
              <FontAwesomeIcon icon={faBars} className="fs-5 bars" style={{color:"#13357B"}}/>
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
          <Col sm={3} className="pt-4 bg-white pe-5">
            <div className="d-flex justify-content-end gap-2">
              <span className="pt-1">
                <Link>
                  <FontAwesomeIcon icon={faComments} className=" icon" style={{color:"#13357B"}} />
                </Link>
              </span>
              <span className="pt-1">
                <Link>
                  {" "}
                  <FontAwesomeIcon icon={faBell} className=" icon"  style={{color:"#13357B"}}/>
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
                      border:"1px solid #13357B",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <ul className="dropdown-menu lh-sm">
                  <li className="hoverColor">
                    <Link className="dropdown-item fw-semibold" to={"/jobseeker/jobseekerprofile"}>
                     <FontAwesomeIcon icon={faUser}/> Profile
                    </Link>
                  </li>
                  <li className="m-0 hoverColor">
                     <button className="dropdown-item fw-semibold btn"  onClick={logOut}>  <FontAwesomeIcon icon={faRightFromBracket} /> LogOut</button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="" >
          <Col sm={9} className="px-4">
            <div className="row row-cols-1 row-cols-md-4 g-3 pt-3 px-2">
              <Card
                num="25"
                para="Total Applications"
                icon={faBriefcase}
                text="#13357B"
              />
              <Card
                num="9"
                para="Total Shortlisted"
                icon={faBookmark}
                text="#13357B"
              />
              <Card
                num="23"
                para="Total Interviews"
                icon={faCalendarDay}
                text="#13357B"
              />
              <Card num="6" para="Profile Views" icon={faEye} text="#13357B" />
            </div>
            <Row className="px-3 py-3 pt-4">
              <Col className="">
                <h3 className="fw-bold" style={{color:"#031273"}}>Job Lists</h3>
                <Row>
                  <Col>
                    <div className=" pt-2 skill2">
                      <marquee behavior="" direction="right">
                        <ul className="list-unstyled d-flex">
                          <li className="px-3 py-2 fw-semibold rounded-3">
                            Full Stack Developer
                          </li>
                          <li className="mx-4 px-3 py-2 fw-semibold rounded-3">
                            Mern Stack Developer
                          </li>
                          <li className=" px-3 py-2 fw-semibold rounded-3">
                            Software Engineer
                          </li>
                          <li className="mx-4 px-3 py-2 fw-semibold rounded-3">
                            Frontend Developer
                          </li>
                          <li className=" px-3 py-2 fw-semibold rounded-3">
                            Backend Developer
                          </li>
                          <li className="mx-4 px-3 py-2 fw-semibold rounded-3">
                            Graphic Designer
                          </li>
                        </ul>
                      </marquee>
                    </div>
                  </Col>
                </Row>
                <Col
                  className="px-3 py-4"
                  style={{ height: "270px", overflowY: "auto" }}
                >
                  <Card2 src={google} />
                  <Card2 src={paypal} />
                  <Card2 src={flipkart} />
                  <Card2 src={nasa} />
                </Col>
              </Col>
            </Row>
          </Col>
          <Col sm={3} className="bg-white">
            <Row className="py-3 px-2">
              <h6 className="text-uppercase rightHead">Profile Summary</h6>
              <Col sm={3} className="pt-2 p-0">
              <img src={profilelogo} alt=""  className="img-fluid rounded-circle"/></Col>
              <Col sm={9} className=" p-0 ps-2">
              <b>Diksha Kushawaha</b>
              <p className="w-100 rightpara m-0">Mern Full StackDeveloper</p>
              <div className="d-flex pe-3 m-0 mt-2 ">
                <div style={{width:"80%",height:"10px",borderRadius:"10px 0px 0px 10px",backgroundColor:"rgb(7, 37, 97)"}} className="" ></div>
                <div style={{width:"50%",height:"10px",borderRadius:"0px 10px 10px 0px",backgroundColor:"rgb(0,0,0,0.3)"}} className=""></div>
              </div>
              <p className="tine m-0"><small>Profile Strength: 80% Complete</small></p>
              </Col>
            </Row>
<Row>
  <Col>
    <h6 className="text-uppercase mb-2">Verified Skills</h6>

    <div className="d-flex flex-wrap gap-2 skill3">
     
      <span className="bg-light border px-3 py-1 skill  rounded-pill">React</span>
      <span className="bg-light border px-3 py-1 skill rounded-pill">Python</span>
      <span className="bg-light border px-3 py-1 skill rounded-pill">Figma</span>
      <span className="bg-light border px-3 py-1 skill rounded-pill">AWS</span>
      <span className="bg-light border px-3 py-1 skill rounded-pill">Tailwind CSS</span>
      <span className="bg-light border px-3 py-1 skill rounded-pill">+ Add Skill</span>
    </div>
  </Col>
</Row>
<Row>
  <Col className="py-3" >
  <h6>Skill-Based Job Suggestions</h6>
                    <div className="rounded-3 pe-2" style={{height:"210px",overflowY:"auto",backgroundColor:"rgb(0,0,0,0.3)"}}>
                       <Card3 src={netflix}/>
                       <Card3 src={netflix}/>
  <Card3 src={netflix}/>
                    </div>
<div className="me-3 ms-2">  <button className="btn  my-1 py-1 form-control mainbtn">Suggested Job</button></div>
  </Col>
</Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default JobSeekerDash;
