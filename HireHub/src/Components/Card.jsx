import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from '../assets/amazon.png'
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Card(p) {
  return (
    <>
      <div className="col ">
        <div className="card bg-white shadow-sm">
          <div className="card-body">
            <h2
              className="card-title text-center"
              style={{ color: `${p.text}` }}
            >
              {p.num}
            </h2>
            <p className="card-text text-center" style={{ color: "#13357B" }}>
              <FontAwesomeIcon icon={p.icon} /> {p.para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function Card2(p) {
  return (
    <>
      <div className="card mb-3 pb-0 bg-white">
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={p.src}
              className="img-fluid rounded-start job-img w-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body pb-0">
              <h4 className="card-title fw-bold jobtitle">
                Senior Software Engineer, Google
              </h4>
              <h5 className="jobsubtitle">Job Details</h5>
              <ul>
                <li className="list">
                  <strong>Role: </strong>
                  <span>
                    Develop and maintain core CareerSetu platform features.
                  </span>
                </li>
                <li className="list">
                  <strong>Skills Required: </strong>
                  <span>Python, React, AWS, Tailwind CSS.</span>
                </li>
                <li className="list">
                  <strong>Location: </strong>
                  <span>Hyderabad, India (Remote / On-site)</span>
                </li>
                <li className="list">
                  <strong>Experince: </strong>
                  <span>0-3y</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="card-text postedtime mb-0">
                  <span className="bg-light px-2 rounded small">
                    <b>Posted:</b> 2 Days Ago
                  </span>
                </p>
                <button
                  className="btn  btn-sm px-4"
                  style={{
                    background: "#2563EB",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Card3(p) {
  return (
    <>
      <div className="card mb-2 rounded-2 mx-2 my-2 bg-light ">
        <div className="row g-0">
          <div className="col-md-3 pt-3 ps-1">
            <img src={p.src} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-9 ps-3">
            <div className="card-body p-0 lh-sm">
              <h6 className="fw-bold  m-0" style={{ color: "rgb(7, 37, 97)" }}>
                UI/UX Designer
              </h6>
              <small
                className="text-muted"
                style={{ color: "rgb(0, 0, 0,0.3)" }}
              >
                Netflix
              </small>
              <p className="small m-0">Remote • 2+ yrs exp</p>
              <div className="d-flex justify-content-between pe-3 ps-1 mt-2 mb-1">
                <small
                  className="fw-semibold pt-1 "
                  style={{ color: "rgb(7, 37, 97)" }}
                >
                  ₹8-12 LPA
                </small>
                <button className="btn btn-sm  py-0 suggestedjobbtn">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Card4(p) {
  return(
    <>
    <div className="col" key={p.key}>
  <div className="card h-100 border-0 shadow-sm p-3 project-card">

    <div className="card-body p-0">
      
      {/* Title */}
      <h5 className="fw-semibold mb-2" style={{color:"#13357B"}}>
        {p.title}
      </h5>

      {/* Description */}
      <p className="text-muted small mb-2">
        {p.desc}
      </p>

      {/* Tech Stack */}
      <div className="mb-2">
        <span className="badge bg-light text-dark me-1">React</span>
        <span className="badge bg-light text-dark me-1">Node.js</span>
        <span className="badge bg-light text-dark">MongoDB</span>
      </div>

      {/* Button */}
      <button className="btn btn-sm mt-2 mainbtn">
        View Project
      </button>

    </div>
  </div>
</div>
    </>
  )
}
function Card5(p){
  return(
    <>
    <div className="col">
      <div className="card custom-card h-100 border-0 bg-white rounded-4 ">
        <div className="card-body">
          <h2 className=" fw-bold" style={{color:"#13357b"}}>{p.num}</h2>
          <h5 className="fw-semibold">{p.type}</h5>
          <p className="text-muted text-center fw-semibold">
           {p.desc}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
function Card6(p){
  return(
    <>
       <div className="col">
  <div className="card job-card h-100 border-0 bg-light" style={{border:"2px solid white"}}>

    {/* Image */}
    <div className="job-img-wrapper">
      <img
        src="src/assets/msp.png"
        className="card-img-top"
        alt="Marketing Specialist"
      />
    </div>

    {/* Body */}
    <div className="card-body">
      <h5 className="card-title fw-bold">Marketing Specialist</h5>
      <p className="company mb-1">Bright Media Pvt. Ltd.</p>
      <p className="location small mb-2">📍 Mumbai, India</p>

      <p className="salary small mb-2">
        💰 ₹4–8 LPA • 🧑‍💼 2–5 yrs
      </p>

      {/* Tags */}
      <div className="mb-3">
        <span className="badge custom-badge me-2">Full-Time</span>
        <span className="badge custom-badge me-2">Mid-Level</span>
        <span className="badge custom-badge-light">On-site</span>
      </div>

      {/* Button */}
      <button className="btn apply-btn w-100 mainbtn" onClick={p.gotoLogin}>Apply Now</button>
    </div>
  </div>
</div>
    </>
  )
}
function Card7(p){
  return(
    <>
        <div className="col-md-3">
        <div className="team-card">
          <img src={p.src} alt="Jeeya" className="img-fluid" />
          <h6 className="title">{p.title}</h6>
          <span className="role">{p.role}</span>

        </div>
      </div>
    </>
  )
}

function TestimonialCard(p) {
  return (
    <div className="card shadow-sm border-0  px-2 py-1 bg-white" style={{ maxWidth: "350px", borderRadius: "15px" }}>
      
      {/* User Image */}
      <div className="text-center">
        <img
          src={p.src}
          alt="user"
          className=" img-fluid w-100"
         style={{height: "200px",objectFit:"cover" }}
        />
      </div>

      {/* Review Text */}
      <div className="card-body">
                {/* User Name */}
        <h5 className="fw-bold mb-2 pb-1">Diksha Kushawaha</h5>
        <small className="py-1 px-2  rounded-pill" style={{color:"#072258",backgroundColor:" #9ecae1"}}>Software Developer</small>
        <p className="card-text  pt-3 text-muted">
          "This platform helped me land my dream job quickly. Super easy to use and very effective!"
        </p>
      </div>
    </div>
  );
}
  
function JobCard(p) {

const navigate = useNavigate();
  return (
    <div className="col-md-4 mb-3" key={p.key}>
  <div
  className="card border-0 shadow-sm h-100 p-2 bg-white"
  style={{
    borderRadius: "18px",
    transition: "0.3s",
    cursor: "pointer",
  }}
>
  <div className="card-body py-0">

    {/* Top Section */}
    <div className="d-flex align-items-center justify-content-between">
      
      {/* Logo + Company */}
      <div className="d-flex align-items-center gap-2">
        <img
          src={google}
          alt=""
          style={{
            width: "45px",
            height: "45px",
            objectFit: "contain",
            borderRadius: "10px",
            border: "1px solid #eee"
          }}
        />

        <div>
            <h6 className="mt-3 fw-semibold mb-0" style={{fontSize:"1.21rem"}}>{p.title}</h6>
          {/* <h6 className="fw-bold m-0" style={{ color: "#13357b" }}>
            {p.company}
          </h6> */}
          <small className="text-muted" style={{fontSize:"rem"}}> {p.company}</small>
        </div>
      </div>

      {/* Job Type */}
      <span className="badge bg-light text-dark border">
        {p.type}
      </span>
    </div>

    {/* Job Title */}


    {/* Salary */}

 <h6 className=" mt-2 fw-semibold mb-1" >{p.location}</h6>
    {/* Description */}
    <p className="text-success fw-semibold  m-0">
      💰 ₹{p.salary}
    </p>
    <p
      className="text-muted m-0 mt-2 px-1"
      style={{ fontSize: "14px", lineHeight: "1.4" }}
    >
      {p.desc?.slice(0, 80)}...
    </p>
<div className="my-2">
  <span className="fulltime me-2 px-3 py-1 rounded-5">{p.FullTime}</span>
<span  className="fulltime px-3 py-1 rounded-5">{p.OnSite}</span>
</div>
    {/* Bottom Buttons */}
    <div className="d-flex justify-content-between align-items-center mt-4 pt-2 px-2 pb-2">

      <button className="btn btn-outline-primary btn-sm rounded-pill px-3 me-3"   onClick={() => navigate(p.viewJob)} 
>
        View Details
      </button>
<button type="button" className="btn  btn-sm rounded-pill px-3 mainbtn" data-bs-toggle={p.modal} data-bs-target={p.exampleModal}>
  Apply Now
</button>
    </div>

  </div>
</div>
    </div>
  );
}
function AppliedJobCard(p) {
 return(
  <>
   <div className="col">
 <div
  className="card border-0 shadow-sm p-3 job-card"
  style={{
    borderRadius: "18px",
    background: "linear-gradient(145deg, #ffffff, #f3f6fb)"
  }}
>
  <div className="card-body p-2">

    {/* Top Section */}
    <div className="d-flex justify-content-between align-items-start">

      {/* Left: Logo + Title */}
      <div className="d-flex align-items-center gap-3">

        {/* Company Logo */}
        <div
          style={{
            padding: "6px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}
        >
          <img
            src={google}
            alt="company"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Job Info */}
        <div>
          <h5 className="fw-bold mb-0" style={{ fontSize: "1.1rem" }}>
           {p.jobType}
          </h5>
          <p className="text-muted m-0" style={{ fontSize: "14px" }}>
            {p.company}
          </p>
        </div>
      </div>

      {/* Status */}
      <span
        className="badge px-3 py-2"
        style={{
          backgroundColor: "#fff3cd",
          color: "#856404",
          borderRadius: "20px",
          fontSize: "12px"
        }}
      >
        {p.status}
      </span>
    </div>

    {/* Details */}
    <div className="mt-3 d-flex flex-wrap gap-3 text-muted" style={{ fontSize: "14px" }}>
      <span>📍 {p.location}</span>
      <span>💰 {p.salary} LPA</span>
      <span>📅 {p.date}</span>
    </div>

    {/* Description */}
    <p className="text-muted mt-3 mb-2" style={{ fontSize: "14px" }}>
     {p.desc}
    </p>

    {/* Button */}
    <div className="text-end">
      <button
        className="btn rounded-pill px-4 py-1"
        style={{
          border: "1px solid #13357b",
          color: "#13357b",
          backgroundColor: "transparent"
        }}
      >
        View Job →
      </button>
    </div>

  </div>
</div>
  </div>
  </>
 )
}

export default Card;
export { Card2, Card3 ,Card4,Card5,Card6,Card7,TestimonialCard ,JobCard,AppliedJobCard};
