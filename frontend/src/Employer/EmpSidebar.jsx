import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function EmpSidebar() {
  const [active, setActive] = useState("");

  const items = [
    { name: "Dashboard", path: "/employer/dashboard", icon: "fa-solid fa-house" },
    { name: "Applicants", path: "/employer/viewApplicants", icon: "fa-solid fa-users" },
    { name: "Create Job", path: "/employer/postJob", icon: "fa-solid fa-briefcase" },
    { name: "Add Enquiry", path: "/employer/addEnq", icon: "fa-solid fa-comment" }
  ];

  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {/* Sidebar */}
        <aside className="col-2 sidebar bg-dark text-white p-3 vh-100">
          <div className="text-center mb-4">
            <img src="/logo1.png" alt="CareerSetu Logo" width="120" />
          </div>
          <ul className="nav flex-column">
            {items.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link to={item.path} className={`nav-link text-white sidebar-link rounded-pill ${ active === item.name ? "active" : "" }`} onClick={() => setActive(item.name)}> <i className={`${item.icon} me-2`}></i>  {item.name} </Link>
              </li>
            ))}
          </ul>

          {/* Profile Section */}
          <Link to="/employer/profile" className="row bg-transparent border-0 hover-btn d-flex flex-row rounded-2 text-white text-decoration-none" style={{ marginTop: "350px" }} >
            <div className="col-3">
              <img src="/src/assets/shagun.jpeg" alt="profile" className="rounded-circle" width="50"/>
            </div>
            <div className="col-9 d-flex flex-column align-items-start justify-content-center px-3">
              <p className="small m-0">Dhani Roy</p>
              <p className="small m-0">dr123456@gmail.com</p>
            </div>
          </Link>

          <button type="button" className="btn btn-primary mt-3">Log Out</button>
        </aside>

        {/* Main Content */}
        <main className="col-10 flex-grow-1 p-4 bg-light overflow-auto" style={{ height: "100vh" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default EmpSidebar;
