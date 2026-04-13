import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'

function JobFeedback() {
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const [fbText,setFdText] = useState('')
    const  sendFeedback = async(e)=>{
        e.preventDefault();
        const feedback = {name,role,fbText};
        const response = await axios.post(`http://localhost:8002/api/feedback`,feedback);
        console.log(response)
        if(response.data.msg == "Success"){
            toast.success("Feedback send Successfully");
            setName("")
            setRole("")
            sendFeedback("")
        }
    }

  return (
    <>
   <Col sm={10}>
   <Row className='mt-5 mx-auto'>
            <Col sm={12}>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      
            <Card className="shadow p-4" style={{ width: "100%", maxWidth: "600px" }}>
              
              <h4 className="text-center mb-4" style={{ color: "#13357b" }}>
              <strong>Feedback</strong>   
              </h4>
      
              <Form onSubmit={sendFeedback}>
                
                {/* Title */}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Name"  value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
  
                 {/* Role */}
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="" value={role} onChange={(e)=>setRole(e.target.value)} />
                </Form.Group>
  
                {/* file choose */}
                {/* <Form.Group className="mb-3">
                  <Form.Label for="formFile" className="form-label">Upload Your Image</Form.Label>
                  <Form.Control className="form-control" type="file" id="formFile" />
                </Form.Group> */}
      
                {/* Description */}
                <Form.Group className="mb-4">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Enter description..." 
                     value={fbText} onChange={(e)=>setFdText(e.target.value)}
                  />
                </Form.Group>
                    <button type='submit' className='btn mainbtn px-4 form-control py-2 fw-semibold'>Submit</button>
      
              </Form>
      
            </Card>
      
          </div>
      
              
            </Col>
          </Row></Col>
    </>
  )
}

export default JobFeedback