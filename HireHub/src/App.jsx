import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "swiper/css";
import "swiper/css/autoplay";
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
import "swiper/css";
import Jobseek_Application from "./JobSeeker/Jobseek_Application";
import EmpSidebar from "./Employer/EmpSidebar";
import EmpDash from "./Employer/EmpDash";
import EmpViewApp from "./Employer/EmpViewApp";
import EmpPostJob from "./Employer/EmpPostJob";
import EmpAddEnq from "./Employer/EmpAddEnq";
import EmpProfile from "./Employer/EmpProfile";
import SerachJob from "./JobSeeker/SerachJob";
import MyApplications from "./JobSeeker/AppliedJob";
import SeeJobDetails from "./JobSeeker/SeeJobDetails";
import AdDash from "./Admin/AdDash";
import AdLayout from "./Admin/AdLayout";
import Jobs from "./Admin/Jobs";
import AdRecruiter from "./Admin/AdRecruiter";
import Jobseeker from "./Admin/Jobseeker";
import News from "./Admin/News";
import ViewEnq from "./Admin/ViewEnq";
import Register from "./Pages/Register";
import HomeJobs from "./Pages/HomeJobs";
import Feedback from "react-bootstrap/esm/Feedback";
import JobFeedback from "./JobSeeker/JobFeedback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/homeJobs" element={<HomeJobs />} />
          <Route path="/Sdfg" element={<Sdfg />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobseeker/" element={<JobSLayout />}>
            <Route path="" element={<JobSeekerDash />} />
            <Route path="jobseekerprofile" element={<Profile />} />
            <Route path="enq" element={<Enquiry />} />
            <Route path="feedback" element={<JobFeedback />} />
            <Route path="searchJob" element={<SerachJob />} />
            <Route path="userapplication" element={<Jobseek_Application />} />
            <Route path="application" element={<MyApplications />} />
            <Route path="jobDetails/:id" element={<SeeJobDetails />} />
          </Route>
          <Route path="/employer/" element={<EmpSidebar />}>
            <Route path="" element={<EmpDash />} />
            <Route path="viewApplicants" element={<EmpViewApp />} />
            <Route path="postJob" element={<EmpPostJob />} />
            <Route path="addEnq" element={<EmpAddEnq />} />
            <Route path="empProfile" element={<EmpProfile />} />
          </Route>
        <Route path="/admin" element={<AdLayout />}>
  <Route path="dashboard" element={<AdDash />} />
  <Route path="jobs" element={<Jobs />} />
  <Route path="viewRecruiter" element={<AdRecruiter />} />
  <Route path="viewJobseeker" element={<Jobseeker />} />
  <Route path="postNews" element={<News />} />
  <Route path="viewEnq" element={<ViewEnq />} />
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
