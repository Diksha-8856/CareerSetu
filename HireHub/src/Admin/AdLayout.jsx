import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import careerSetu from '../assets/logo2_bg.png'

function AdLayout() {
  const [active, setActive] = useState("");
  
    const items = [
    { name: "Dashboard", path: "/admin/dashboard" ,icon: "fa-solid fa-house-chimney",},
    { name: "Recruiter", path: "/admin/viewRecruiter", icon: "fa-solid fa-user"},
    { name: "Jobseeker", path: "/admin/viewJobseeker", icon: "fa-solid fa-users"},
    { name: "Jobs", path: "/admin/jobs", icon: "fa-solid fa-building"},
    { name: "News", path: "/admin/postNews", icon: "fa-solid fa-newspaper"},
    { name: "Applications", path: "/admin/viewApplications",icon: "fa-solid fa-comment"},
    { name: "View Enquiry", path: "/admin/viewEnq", icon: "fa-solid fa-clipboard-list"}
  ];
  return (
   <>
    <div className="container-fluid" style={{overflow:"hidden"}}>
      <div className="row d-flex">
        {/* Sidebar */}
        <aside className="col-sm-2 sidebar  text-white p-3 vh-100" style={{backgroundColor:"#13357b"}}>
          <div className="text-center mb-4">
            <img src={careerSetu} alt="CareerSetu Logo" width="100%" className='image-fluid' height="100%" />
          </div>
          <ul className="nav flex-column">
            {items.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link to={item.path} className={`nav-link text-white sidebar-link rounded-pill ${ active === item.name ? "active" : "" }`} onClick={() => setActive(item.name)}> <i className={`${item.icon} me-2`}></i>  {item.name}
  </Link>
              </li>
            ))}
          </ul>

          {/* Profile Section */}
          {/* <div className="row d-flex flex-row" style={{marginTop: "350px"}}>
            <div className="col-3">
              <img src="/src/assets/shagun.jpeg" alt="profile" className="rounded-circle" width="50" />
            </div>
            <div className="col-9 px-3">
              <p className="small m-0">Dhani Roy</p>
              <p className="small m-0">dr123456@gmail.com</p>
            </div>
          </div> */}

        </aside>

        {/* Main Content */}
        <main className="col-10 flex-grow-1  bg-light overflowx-auto" style={{ height: "100vh", overflow: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
   </>
  )
}

export default AdLayout




