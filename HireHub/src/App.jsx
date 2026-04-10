import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerDash from "./JobSeeker/JobSeekerDash";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Profile from "./JobSeeker/Profile";
import JobSLayout from "./JobSeeker/JobSLayout";
import Enquiry from "./JobSeeker/Enquiry";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import Sdfg from "./JobSeeker/sdfg";
import Jobseek_Application from "./JobSeeker/Jobseek_Application";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asd" element={<Sdfg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobseeker/" element={<JobSLayout />}>
            <Route path="" element={<JobSeekerDash />} />
            <Route path="jobseekerprofile" element={<Profile />} />
            <Route path="enq" element={<Enquiry />} />
            <Route path="userapplication" element={<Jobseek_Application />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
