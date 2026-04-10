import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";

function Sdfg() {
  return (
    <div className="bg-white shadow-sm rounded-3 p-3 mb-3">
      <Row className="align-items-center">
        
        {/* Logo */}
        <Col sm={2} className="text-center">
          <img
            src="https://logo.clearbit.com/tcs.com"
            alt="company logo"
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        </Col>

        {/* Details */}
        <Col sm={5}>
          <h5 className="mb-1 fw-semibold">Software Engineer</h5>
          <p className="mb-1 text-muted">Bangalore</p>
          <small className="text-muted">Applied on: 10 Jan 2024</small>
        </Col>

        {/* Buttons */}
        <Col sm={3} className="d-flex gap-2 justify-content-end">
          <Button variant="outline-primary" size="sm">
            View Details
          </Button>
          <Button variant="outline-primary" size="sm">
            View Application
          </Button>
          <Button variant="outline-primary" size="sm">
            Withdraw
          </Button>
        </Col>

        {/* Status */}
        <Col sm={2} className="text-end">
          <Badge
            bg="warning"
            text="dark"
            className="px-3 py-2 rounded-pill"
          >
            Under Review
          </Badge>
        </Col>

      </Row>
    </div>
  );
}

export default Sdfg;