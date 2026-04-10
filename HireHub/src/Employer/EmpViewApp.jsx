import React from 'react'

function EmpViewApp() {
const applicants = [{ name: "John Doe", date: "07/27/2019", role: "Software Engineer", phone: "092-134-3360", status: "Phone Screen", source: "LinkedIn" }, { name: "Jane Smith", date: "08/15/2019", role: "Data Analyst", phone: "092-134-3361", status: "Interview Scheduled", source: "Naukri" }, { name: "Alice Johnson", date: "09/05/2019", role: "UI/UX Designer", phone: "092-134-3362", status: "Hired", source: "Internshala" }, { name: "Bob Brown", date: "10/20/2019", role: "Project Manager", phone: "092-134-3363", status: "Rejected", source: "Indeed" }, { name: "Charlie Davis", date: "11/10/2019", role: "Full Stack Developer", phone: "092-134-3364", status: "Phone Screen", source: "Facebook" }];

  return (
    <>
      <div className="bg-light py-3 border-end">
        {/* Filters */}
        <h6 className="fw-bold mb-3">FILTERS</h6>
        <div className="d-flex flex-wrap justify-content-around mb-3">
          <button className="btn btn-outline-secondary rounded-pill hover-btn">
            All Candidates
          </button>
          <button className="btn btn-outline-secondary rounded-pill hover-btn">
            New Candidates
          </button>
          <select className="form-select rounded-pill hover-btn flex-grow-1" style={{ maxWidth: "180px" }}>
            <option value="">-- Status --</option>
            <option value="followed">Followed Candidates</option>
            <option value="running">Still in the running</option>
            <option value="hired">Hired</option>
          </select>
          <select className="form-select rounded-pill hover-btn flex-grow-1" style={{ maxWidth: "180px" }}>
            <option>-- Source --</option>
            <option>LinkedIn</option>
            <option>Naukri</option>
            <option>Internshala</option>
            <option>Indeed</option>
            <option>Facebook</option>
          </select>
          <input type="text" className="form-control hover-btn flex-grow-1" placeholder="Custom Search" style={{ maxWidth: "360px" }}/>
          <button className="btn btn-outline-primary hover-btn">
            Reset
          </button>
        </div>

        {/* Applicants Table */}
        <main className="col-12 p-3">
          <div className="d-flex justify-content-between align-items-center my-3">
            <h5>Applicants</h5>
            <div>
              <button className="btn btn-outline-secondary rounded-pill me-2 hover-btn">CSV Import</button>
              <button className="btn btn-primary rounded-pill hover-btn">+ Add Candidate</button>
            </div>
          </div>

          <table className="table table-hover">
            <thead className='bg-white shadow-md fw-bold fs-5'>
              <tr>
                <th>Applicant</th>
                <th>Applied On</th>
                <th>Role</th>
                <th>Phone No.</th>
                <th>Status</th>
                <th>Source</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((a, idx) => (
                <tr key={idx}>
                  <td>{a.name}</td>
                  <td>{a.date}</td>
                  <td>{a.role}</td>
                  <td>{a.phone}</td>
                  <td>{a.status}</td>
                  <td>{a.source}</td>
                  <td>
                    <button className="btn btn-outline-success btn-sm mx-2">View</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between">
            <small>Displaying 25 out of 1300</small>
            <small>125 - 150</small>
          </div>
        </main>
      </div>
    </>
  );
}

export default EmpViewApp