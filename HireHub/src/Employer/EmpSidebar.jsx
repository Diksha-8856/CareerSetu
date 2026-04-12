import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleQuestion,
  faComment,
  faFileLines,
  faHome,
  faSave,
  faSearch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/logo5remove.png";
import shagun from "../assets/shagun.jpeg";

function EmpSidebar() {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {/* Sidebar */}
         <Col
          sm={2}
          className="py-4 jobeekerDash "
          style={{
            height: "100vh",
            position: "sticky",
            top: "0",
            backgroundColor: "#13357b",
            color: "#E2E8F0",
          }}
        >
          <div className="mt-1 mb-4">
            <img
              src={logo}
              alt=""
              className="img-fluid w-100 "
              style={{ filter: "drop-shadow(2px -2px 2px lightgrey) " }}
            />
          </div>
          <hr className="mb-0" />
          <div className="ps-2 sidenav">
            <ul className="list-unstyled pt-4">
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"/employer/"}>
                  <FontAwesomeIcon icon={faHome} /> Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"viewApplicants"}>
                  <FontAwesomeIcon icon={faUsers} /> Applicants
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"postJob"}>
                  {" "}
                  <FontAwesomeIcon icon={faBriefcase} /> Create Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"addEnq"}>
                  <FontAwesomeIcon icon={faComment} /> Add Enquiry
                </Link>
              </li>
            </ul>
              {/* Profile Section */}
          <Link to={"empProfile"} className="row bg-transparent  d-flex flex-row rounded-2 text-white text-decoration-none"  >
            <div className="col-3">
              <img src={shagun} alt="profile" className="rounded-circle" width="50"/>
            </div>
            <div className="col-9 d-flex flex-column align-items-start justify-content-center px-3">
              <p className="small m-0">Dhani Roy</p>
              <p className="small m-0">dr123456@gmail.com</p>
            </div>
          </Link>

          <button type="button" className="btn btn-primary mt-3">Log Out</button>
          </div>
          
        </Col>

        {/* Main Content */}
        <main className="col-10 flex-grow-1 p-4 bg-light overflow-auto" style={{ height: "100vh" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default EmpSidebar;
