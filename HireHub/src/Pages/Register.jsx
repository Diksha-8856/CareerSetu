import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [role, setRole] = useState("jobseeker");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [expreience, setExpreince] = useState("");
  // =====================employer variable======================
  const [comName,setComName] = useState("")
  const [comWork,setComWork] = useState("")
  const [empPhone,ssetEmpPhone] = useState("")
  const [comAddress,setComAddress] = useState("")
  const [empName,setEmpName] = useState("")
  const [empEmail,setEmpEmail] = useState("")
  const [empAadharNum,setEmpAadhar] = useState("")
  const [panNum,setPanNum] = useState("")
  const [gstNum,setGstNum] = useState("")
  const [regDate,setRegDate] = useState("")
  const [password,setPassword] = useState("")
  const [userData, setUserData] = useState([]);

  const uploadJobseekerData = async (e) => {
    e.preventDefault();
    const user = {
      fullName,
      location,
      phone,
      email,
      dob,
      skill,
      education,
      expreience,
      gender,
      password
    };
    const response = await axios.post(
      `http://localhost:8002/api/userprofile/`,
      user,
    );
    console.log(response)
    // console.log(localStorage.getItem("jobSeeker"))
    if (response.data.msg == "Success") {
      toast.success("Profile Data Updated");
      setFullName("");
      setLocation("");
      setPhone("");
      setEmail("");
      setDOB("");
      setSkills("");
      setEducation("");
      setExpreince("");
      setGender("");
      setPassword("");
    }
  };
  const uploadEmployeerData = async(e)=>{
    e.preventDefault();
      const empData = {comName,comWork,comAddress,empName,empPhone,empEmail,empAadharNum,panNum,gstNum,password}
      const response = await axios.post(`http://localhost:8002/api/registeremployer/`, empData);
      console.log(response)
      if(response.data.msg == "Success"){
        toast.success("SuccussFully Registered");
        setComName("")
        setComWork("")
        setComAddress("")
        setEmpName("")
        ssetEmpPhone("")
        setEmpEmail("")
        setEmpAadhar("")
        setPanNum("")
        setGstNum("")
        setPassword("")
      }
  }
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary fw-bold">
        Careersetu Portal
      </h2>

      {/* Role Selection */}
      <div className="text-center mb-4">
        <button
          className="btn btn-primary me-3"
          onClick={() => setRole("jobseeker")}
        >
          Job Seeker
        </button>
        <button className="btn btn-primary" onClick={() => setRole("employer")}>
          Employer
        </button>
      </div>

      {/* Job Seeker Form */}
      {role === "jobseeker" && (
        <form onSubmit={uploadJobseekerData}>
          <div className="card p-4 shadow border-0">
            <h4 className="text-primary mb-3">Job Seeker Registration</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Contact No</label>
                <input
                  type="tel"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">DOB</label>
                <input
                  type="date"
                  className="form-control"
                  value={dob}
                  onChange={(e) => setDOB(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>
                <input
                  type="text"
                  className="form-control"
                  value={expreience}
                  onChange={(e) => setExpreince(e.target.value)} // ✅ FIXED
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  value={skill}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPanNum(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-2">Register</button>
          </div>
        </form>
      )}
      {/* Employer Form */}
      {role === "employer" && (
        <form action="" onSubmit={uploadEmployeerData}>
          <div className="card p-4 shadow border-0">
            <h4 className="text-primary mb-3">Employer Registration</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name" value={comName} onChange={(e)=>setComName(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Company Work</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Work Type"
                  value={comWork} onChange={(e)=>setComWork(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  value={comAddress} onChange={(e)=>setComAddress(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Employer Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={empName} onChange={(e)=>setEmpName(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Employer Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Number"
                  value={empPhone} onChange={(e)=>ssetEmpPhone(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Employer Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Aadhar No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Aadhar Number"
                  value={empAadharNum} onChange={(e)=>setEmpAadhar(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">PAN No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PAN Number"
                  value={panNum} onChange={(e)=>setPanNum(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">GST No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter GST Number"
                  value={gstNum} onChange={(e)=>setGstNum(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-2">Register</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Register;
