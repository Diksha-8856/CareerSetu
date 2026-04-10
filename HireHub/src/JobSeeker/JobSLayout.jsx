import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleQuestion,
  faFileLines,
  faHome,
  faSave,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/Cologo.png";

function JobSLayout() {
  return (
    <Container fluid>
      <Row
        style={{
          height: "100vh",
        }}
      >
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
                <Link className="text-decoration-none link" to={"/jobseeker/"}>
                  <FontAwesomeIcon icon={faHome} /> Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"userapplication"}>
                  <FontAwesomeIcon icon={faFileLines} /> My Apllication
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link" to={"enq"}>
                  {" "}
                  <FontAwesomeIcon icon={faCircleQuestion} /> Enquiry
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link">
                  <FontAwesomeIcon icon={faSearch} /> Search Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link">
                  <FontAwesomeIcon icon={faBriefcase} /> Applied Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link">
                  <FontAwesomeIcon icon={faSave} /> Saved Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none link">
                  <FontAwesomeIcon icon={faMessage} /> Messages
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
}

export default JobSLayout;
