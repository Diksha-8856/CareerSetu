import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


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
          <h2 className=" fw-bold" style={{color:"#13357b"}}>1,500+</h2>
          <h5 className="fw-semibold">Jobs Posted</h5>
          <p className="text-muted text-center fw-semibold">
            Explore thousands of job opportunities.
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
      <button className="btn apply-btn w-100 mainbtn">Apply Now</button>
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
          <p className="m-0">{p.para}</p>
        </div>
      </div>
    </>
  )
}

export default Card;
export { Card2, Card3 ,Card4,Card5,Card6,Card7};