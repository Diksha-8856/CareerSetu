import React from 'react'
import { Col, Row } from 'react-bootstrap'

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
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Components/Card";



function Jobseek_Application() {
  return (
    <>
    <Col sm={10} style={{
         overflow: "hidden",
  height: "100vh",
  backgroundColor: ` #ededed`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
      }}>
    <Row className='px-4'>
        <Col sm={12} className='py-4  p-0'>
        <h2 className='m-0 mb-1'>My Applications</h2>
        <p className='m-0 applipara'>Track all your job applications in one place</p>
        </Col>
        <Col sm={8} className='p-0 pe-2'>
        <input type="text" placeholder='Search job title or company...' className='form-control py-2 rounded-1'/></Col>
        <Col sm={4} className='p-0'>
        <select name="" id="" className='form-control py-2'>
            <option value="">All Status</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select></Col>
    </Row>
    <Row>
        <Col sm={12}>
             <div className="row row-cols-1 row-cols-md-3 g-2 pt-3 px-2">
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
              <Card num="6" para="Profile Views" icon={faEye} text="#13357B" />
            </div>
        </Col>
    </Row>
    </Col>
    </>
  )
}

export default Jobseek_Application