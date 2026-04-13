import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

function FeedbackForm() {
  return (
    <>
     <Row className='mt-5 mx-auto'>
          <Col sm={12}>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
    
          <Card className="shadow p-4" style={{ width: "100%", maxWidth: "600px" }}>
            
            <h4 className="text-center mb-4" style={{ color: "#13357b" }}>
            <strong>Feedback</strong>   
            </h4>
    
            <Form>
              
              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>

               {/* Role */}
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              {/* file choose */}
              <Form.Group className="mb-3">
                <Form.Label for="formFile" className="form-label">Upload Your Image</Form.Label>
                <Form.Control className="form-control" type="file" id="formFile" />
              </Form.Group>
    
              {/* Description */}
              <Form.Group className="mb-4">
                <Form.Label>Feedback</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Enter description..." 
                />
              </Form.Group>
    
    
            </Form>
    
          </Card>
    
        </div>
    
            
          </Col>
        </Row>
    </>
  )
}

export default FeedbackForm