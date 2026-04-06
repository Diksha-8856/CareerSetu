import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/CareerLogo3.png";

function JobSLayout() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-success vh-100 p-0">
          <div className="">
            <img
              src={logo}
              alt=""
              className="img-fluid w-100 "
              style={{ filter: "drop-shadow(2px 0px 1px black) " }}
            />
          </div>
          <div>
            <ul className="list-unstyled">
                <li>
                    <Link className="text-decoration-none text-dark fw-semibold fs-5">Dashboard</Link>
                </li>
                <li>
                    <Link >DashBoard</Link>
                </li>
                <li>
                    <Link >DasBoard</Link>
                </li>
                <li>
                    <Link >DasBoard</Link>
                </li>
                <li>
                    <Link >DasBoard</Link>
                </li>
                <li>
                    <Link >DasBoard</Link>
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
