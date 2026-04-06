import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Profile() {
  return (
   <Row className="justify-content-center">
        <Col md={6}>

          <Card className="p-4 shadow-lg border-0 rounded-4 text-center">

            {/* Profile Image */}
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
                className="profile-img"
              />
            </div>

            {/* Name */}
            <h3 className="fw-bold">Diksha Kushawaha</h3>
            <p className="text-muted">Aspiring Frontend Developer</p>

            {/* Skills */}
            <div className="d-flex justify-content-center gap-2 mb-3">
              <span className="badge bg-primary">React</span>
              <span className="badge bg-secondary">JavaScript</span>
              <span className="badge bg-success">Fresher</span>
            </div>

            {/* About */}
            <div className="text-start mt-3">
              <h5>About Me</h5>
              <p className="text-muted">
                Passionate frontend developer eager to build user-friendly
                web applications. Quick learner and ready to grow.
              </p>
            </div>

            {/* Info */}
            <div className="text-start mt-3">
              <p><strong>Email:</strong> diksha@email.com</p>
              <p><strong>Phone:</strong> 1234567890</p>
              <p><strong>Location:</strong> Delhi, India</p>
            </div>

            {/* Button */}
            <Button variant="primary" className="mt-3">
              Edit Profile
            </Button>

          </Card>

        </Col>
      </Row>
  );
}

export default Profile;