import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

function News() {
  return (
    <>
    <Row className='mt-5 mx-auto'>
      <Col sm={12}>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>

      <Card className="shadow p-4" style={{ width: "100%", maxWidth: "600px" }}>
        
        <h4 className="text-center mb-4" style={{ color: "#13357b" }}>
          Add News
        </h4>

        <Form>
          
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>News Title</Form.Label>
            <Form.Control type="text" placeholder="Enter news title" />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Enter description..." 
            />
          </Form.Group>

          {/* Button */}
          <Button 
            type="submit" 
            className="w-100"
            style={{ backgroundColor: "#13357b", border: "none", padding: "10px" }}
          >
            Submit News
          </Button>

        </Form>

      </Card>

    </div>

        
      </Col>
    </Row>
    </>
  )
}

export default News
