import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../assets/logo5remove.png";
import home1 from "../assets/home5rem.png";
import profilelogo from "../assets/profile.jpeg";
import aboutImg from "../assets/jobseekers.jpg";
import jeeya from "../assets/jeeya.jpeg";
import diksha from "../assets/diksha.jpeg";
import megha from "../assets/megha.jpeg";
import sagun from "../assets/shagun.jpeg";
import jobvidio from "../assets/jvideo.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Card5, Card6, Card7, TestimonialCard } from "../Components/Card";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Theme Apply
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  return (
    <>
      <div className="container-fluid min-vh-100 p-0 overflow-hidden">
        <section
          className="position-relative w-100 overflow-hidden"
          style={{ minHeight: "90vh" }}
        >
          <video
            autoPlay
            loop
            muted
            className="position-absolute top-0 h-100"
            style={{ objectFit: "cover", zIndex: -1, width: "100vw" }}
          >
            <source src="src/assets/bgvdo.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.6)", zIndex: -1 }}
          ></div>

          {/* Hero Section */}
          <div className="row  py-5" style={{}} id="hero">
            <div className="col-md-12  mt-5 pt-5 ps-5">
              <Row>
                <Col sm={8} className="">
                  <h1 className="fw-bold display-5 hero-title text-start ps-5 mt-5 mb-2">
                    Find Your Dream Job with <br />
                    <span style={{ color: "var(--primary)" }}>Career</span>
                    <span style={{ color: "var(--soft)" }}>Setu</span>
                  </h1>
                  <p className="lead  hero-subtitle ps-5 w-75" >
                    Connect with top talent and leading employers to grow your career or build your team.🚀
                  </p>
                  <Row className=" pt-3 ps-3">
                    <Col sm={4} className="p-0 ps-5 ">
                     <button className="btn btn-primary-custom form-control rounded-3 fw-semibold fs-5 py-2 text-white">
                      Get Jobs
                      </button>
                    </Col>

                    <Col sm={4} className="p-0 px-2 pe-4">
                      <button className="btn btn-primary-custom  form-control rounded-3 fw-semibold fs-5  py-2 text-white">
                      Post Jobs
                      </button>
                    </Col>
                    <Col>
                      {/* Company Logo Marquee */}
                      <div className="company-marquee d-flex align-items-center justify-content-center mt-4">
                        <div className="marquee-inner d-flex align-items-center">
                          <div className="py-3 rounded-3 companyBackground">
                            <img
                              src="src/assets/google.png"
                              alt="Google"
                              className="company-logo mx-4"
                            />
                          </div>
                          <div className="py-3 rounded-3 mx-3 companyBackground">
                            <img
                              src="src/assets/ms.jpg"
                              alt="Microsoft"
                              className="company-logo mx-4"
                            />
                          </div>
                          <div className="companyBackground py-3 rounded-3">
                            <img
                              src="src/assets/adobe.png"
                              alt="Adobe"
                              className="company-logo mx-4"
                            />
                          </div>
                          <div className="companyBackground py-3 rounded-3 mx-3">
                            <img
                              src="src/assets/inf.png"
                              alt="Infosys"
                              className="company-logo mx-4"
                            />
                          </div>
                          <div className="companyBackground py-3 px-5 rounded-3">
                            <img
                              src="src/assets/tcs.png"
                              alt="TCS"
                              className="company-logo mx-4"
                            />
                          </div>
                          <div className="companyBackground py-3  px-5 rounded-3 mx-3">
                            <img
                              src="src/assets/amazon.png"
                              alt="Amazon"
                              className="company-logo mx-4"
                            />
                          </div>

                         <div className="companyBackground py-3 px-5 rounded-3">
                            <img
                            src="src/assets/meta.png"
                            alt="Meta"
                            className="company-logo "
                          />
                        </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4} className="ps-5">
                  <img src={home1} alt="" className="img-fluid ms-4" />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* navbar */}
        <div
          className="row fixed-top py-0"
          style={{
            backgroundColor: scrolled
              ? "#072258" // scroll ke baad dark
              : "rgb(19, 53, 123, 0.2)", // hero ke upar transparent
            borderRadius: "0px 0px 50px 50px",
            boxShadow: scrolled
              ? "0px 4px 12px rgba(0,0,0,0.2)"
              : "1px 1px 2px #13367bb0",
            transition: "all 0.3s ease",
          }}
        >
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {/* Logo always left */}
                <a className="navbar-brand fw-bold" href="#">
                  <img src={logo} alt="Logo" height="70" className="me-2" />
                </a>

                {/* Toggle button for offcanvas */}
                <button
                  className="navbar-toggler border-0 order-sm-3 ms-4"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Offcanvas menu (right side slide) */}
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body navlink">
                    <ul className="navbar-nav mx-auto   mb-lg-0 ">
                      <li className="nav-item">
                        <a className="nav-link navlinka active " href="#hero">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link  navlinka mx-4 " href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link  navlinka p-0 " href="#jobs">
                          Jobs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link  navlinka mx-4" href="#hero">
                          Companies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link navlinka " href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Buttons always right end (desktop + mobile both) */}
                <div className="d-flex ms-auto mt-lg-0 order-sm-2 pe-4">
                  <button
                    className={`btn loginbtn mx-2 rounded-pill ${
                      scrolled ? "login-scrolled" : ""
                    }`}
                  >
                    <Link
                      to={"login"}
                      className="px-4 text-decoration-none fw-semibold "
                    >
                      Login
                    </Link>
                  </button>
                  <button
                    className={`btn px-4 fw-bold regisbtn rounded-pill ${
                      scrolled ? "register-scrolled" : ""
                    }`}
                  >
                    Register
                  </button>
                </div>

                {/* <div className="nav-actions d-flex align-items-center ms-3">
                  <div
                    className={`theme-toggle rounded-pill ${
                      scrolled ? "register-scrolled" : ""
                    }`}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <div  className={`toggle-track ${
                      scrolled ? "register-scrolled" : ""
                    }`}>
                      <span className="toggle-icon moon">🌙</span>
                      <span className="toggle-icon sun">☀️</span>

                      <div
                        className={`toggle-thumb ${darkMode ? "thumb-dark" : "thumb-light"}`}
                      ></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>

        {/* Achievements Cards */}
        <div
          className="row row-cols-1 row-cols-md-4 g-3 text-center px-5 py-5 "
          style={{ backgroundColor: "#f4f4f4" }}
        >
          {/* Card 1 */}
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
        </div>

        {/* About Section */}
        <section
          className="py-5 ps-4 pe-3"
          id="about"
          style={{ backgroundColor: "#072258 " }}
        >
          <div className="row px-5">
            {/* Left Image */}
            <div className="col-md-5 mb-md-0">
              <div className="about-img  p-0">
                <img
                  src={aboutImg}
                  alt="About CareerSetu"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-7 ps-4 ">
              <h2 className="about-title mb-3">About CareerSetu</h2>

              <p className="about-text m-0">
                On the CareerSetu portal, we provide a complete and
                user-friendly platform that connects job seekers with the right
                career opportunities. Our portal is designed to make the job
                search process simple, fast, and effective.
              </p>

              <p className="about-text m-0 mb-2">
                Users can easily explore a wide range of job listings from
                different industries, filter them based on their skills,
                location, and preferences, and apply within just a few clicks.
                The platform ensures that all job postings come from verified
                companies, giving users a safe and reliable experience
              </p>
              {/* Features */}
              <h4 className="text-white pt-3">
                Key Features of CareerSetu Portal
              </h4>
              <ul className="about-list">
                <li className="about-text">Easy job search and filtering</li>
                <li className="about-text">
                  Quick and simple application process
                </li>
                <li className="about-text">Verified job listings</li>
                <li className="about-text">Profile and resume management</li>
                <li className="about-text">
                  Secure and user-friendly platform
                </li>
              </ul>
              {/* Button */}
              <button className="btn about-btn mt-3   rounded-3">
                Explore Jobs →
              </button>
            </div>
          </div>
        </section>
        {/* Trending Jobs */}
        <section
          className="py-4 trandingJob"
          id="jobs"
          style={{
            backgroundImage: `linear-gradient(135deg, rgb(158, 202, 225,0.6)), url(${jobvidio})`,
          }}
        >
          <h2
            className="fw-bold fs-1  mb-4 text-center"
            style={{ color: "#072258" }}
          >
            Trending Jobs
          </h2>
          <Row className="px-5 mx-2">
             <Swiper
      spaceBetween={15}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
      <SwiperSlide><Card6 /></SwiperSlide>
     
      ...
    </Swiper>
          </Row>
          {/* <div className="row row-cols-1 row-cols-md-3 g-4 px-5 ">
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
          </div> */}
        </section>
        {/* Team / Contact Section */}
        <section
          className="team-section py-4 "
          style={{ backgroundColor: "#072258" }}
        >
          <div className="container pb-3 pt-2 ">
            <h2 className="fw-bold text-center  team-title">Meet Our Team</h2>

            <p className="text-center mb-5 team-subtitle fw-semibold">
              Our dedicated team works to connect talent with the right
              opportunities.
            </p>

            <div className="row text-center g-4">
              {/* Card 1 */}
              <Card7
                src={jeeya}
                title="Jeeya Agrawal"
                role="Full Stack Developer"
                para="Builds scalable web apps with modern technologies."
              />
              <Card7
                src={diksha}
                title="Diksha Kushawaha"
                role="Backend Engineer"
                para="Handles server-side logic and database systems."
              />
              <Card7
                src={megha}
                title="Megha Upadhyaya"
                role="UI/UX Designer"
                para="Designs clean and user-friendly interfaces."
              />
              <Card7
                src={sagun}
                title="Shagun"
                role="Graphics Designer"
                para="Creates creative visuals and branding ideas."
              />
            </div>
          </div>
        </section>
         <section
          className="py-4 trandingJob"
          id="jobs"
          style={{
            backgroundImage: `linear-gradient(135deg, rgb(158, 202, 225,0.6)), url(${jobvidio})`,
          }}
        >
          <h2
            className="fw-bold fs-1  mb-4 text-center"
            style={{ color: "#072258" }}
          >
            Testimonials
          </h2>
          <Row className="px-5 mx-2">
             <Swiper
      spaceBetween={15}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><TestimonialCard src={profilelogo}/></SwiperSlide>
      <SwiperSlide><TestimonialCard src={profilelogo}/></SwiperSlide>
      <SwiperSlide><TestimonialCard src={profilelogo}/></SwiperSlide>
      <SwiperSlide><TestimonialCard src={profilelogo}/></SwiperSlide>
      <SwiperSlide><TestimonialCard src={profilelogo}/></SwiperSlide> 
    </Swiper>
          </Row>
          {/* <div className="row row-cols-1 row-cols-md-3 g-4 px-5 ">
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
            <Card6 />
          </div> */}
        </section>
        {/* FAQ Section */}
        <section className="py-5 px-5" style={{ backgroundColor: " #f4f4f4" }}>
          <Row className="d-flex justify-content-center">
            <Col sm={10}>
              <h2
                className="fw-bold mb-4 text-center"
                style={{ color: "#072258" }}
              >
                Frequently Asked Questions
              </h2>
              <div
                className="accordion custom-accordion mt-4 pt-2"
                id="accordionFlushExample"
              >
                {/* Q1 */}
                <div className="accordion-item rounded-5">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#q1"
                    >
                      How do I apply for jobs on CareerSetu?
                    </button>
                  </h2>
                  <div
                    id="q1"
                    className="accordion-collapse collapse m-0"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can easily apply by selecting a job, clicking on
                      "Apply Now", and submitting your profile or resume.
                    </div>
                  </div>
                </div>

                {/* Q2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q2"
                    >
                      Is CareerSetu free for job seekers?
                    </button>
                  </h2>
                  <div
                    id="q2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, CareerSetu is completely free for job seekers to
                      explore and apply for jobs.
                    </div>
                  </div>
                </div>

                {/* Q3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q3"
                    >
                      How can I upload my resume?
                    </button>
                  </h2>
                  <div
                    id="q3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can upload your resume from your profile dashboard
                      after logging in.
                    </div>
                  </div>
                </div>

                {/* Q4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q4"
                    >
                      Are the companies verified?
                    </button>
                  </h2>
                  <div
                    id="q4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we ensure that all companies on CareerSetu are
                      verified for a safe experience.
                    </div>
                  </div>
                </div>

                {/* Q5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q5"
                    >
                      Can freshers apply for jobs?
                    </button>
                  </h2>
                  <div
                    id="q5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, we provide job opportunities for both freshers and
                      experienced candidates.
                    </div>
                  </div>
                </div>

                {/* Q6 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q6"
                    >
                      How can I track my applications?
                    </button>
                  </h2>
                  <div
                    id="q6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can track your applications in real-time from your
                      dashboard.
                    </div>
                  </div>
                </div>

                {/* Q7 */}
                <div className="accordion-item rounded-5">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#q7"
                    >
                      How do recruiters contact candidates?
                    </button>
                  </h2>
                  <div
                    id="q7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Recruiters can contact candidates directly through their
                      profiles or provided contact details.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* Testimonials Section */}

        {/* Footer */}
        <footer style={{ backgroundColor: "#072258", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={6} className="mb-4">
            <div className="mb-3">
              <img src={logo} alt="CareerSetu Logo" width="180" />
            </div>
            <p className="fw-semibold">Follow us on social media</p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com/careersetu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-white hover-btn"/>
              </a>
              <a href="https://linkedin.com/company/careersetu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className=" text-white hover-btn"/>
              </a>
              <a href="https://twitter.com/careersetu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter  className="text-white hover-btn"/>
          
              </a>
              <a href="https://instagram.com/careersetu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={FaInstagram}  className=" text-white hover-btn"/>
              </a>
              <a href="https://youtube.com/careersetu" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube  className="text-white hover-btn" />
              </a>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6} className="text-md-end mb-4">
            <p className="fw-bold mb-1">Apply on the go</p>
            <p className="small">Get real-time job updates on our WebApp</p>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        {/* Bottom Section */}
        <div className="text-center small">
          © 2026 CareerSetu Team | All rights reserved
          <a href="/privacy" className="text-white ms-3 hover-btn">Privacy Policy</a>
          <a href="/terms" className="text-white ms-3 hover-btn">Terms & Conditions</a>
        </div>
      </Container>
    </footer>
        {/* <footer className="py-4 footer text-white text-center">
          <p className="mb-0 text-center">
            © 2026 CareerSetu — Connecting Talent to Opportunities
          </p>
        </footer> */}
      </div>
    </>
  );
}

export default Home;
