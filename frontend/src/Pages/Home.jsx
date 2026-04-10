import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'
import MySwiper from '../Components/MySwiper';

function Home() {
    const [darkMode, setDarkMode] = useState(false);

    // Theme Apply
    useEffect(() => {
        document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <>
            <div className="container-fluid min-vh-100 p-0 overflow-hidden">

                <section className="position-relative w-100 overflow-hidden" style={{ minHeight: "90vh" }}>
                    <video autoPlay loop muted className="position-absolute top-0 h-100" style={{ objectFit: "cover", zIndex: -1, width: "100vw"}}>
                    <source src="src/assets/bgvdo.mp4" type="video/mp4" />
                    </video>

                    {/* OVERLAY */}
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(181, 185, 191, 0.48)", zIndex: -1 }}></div>
              
                    {/* Hero Section */}
                    <div className="row text-center py-5" style={{zIndex: "100", marginTop: "15rem"}}>
                        <div className="col-md-12">
                            <h1 className="fw-bold display-5 hero-title">
                                Find Your Dream Job with <span style={{ color: "var(--primary)" }}>Career</span><span style={{ color: "var(--soft)" }}>Setu</span>
                            </h1>
                            <p className="lead text-muted fw-normal hero-subtitle">
                                Connect with top employers and grow your career 🚀
                            </p>

                            {/* SEARCH */}
                            <div className="input-group w-75 mx-auto mt-4">
                                <input type="text" className="form-control rounded-start-pill" placeholder="Job title..." />
                                <input type="text" className="form-control" placeholder="Location" />
                                <button className="btn btn-primary-custom rounded-end-pill px-4">
                                    Search
                                </button>
                            </div>


                            {/* Company Logo Marquee */}
                            <div className="company-marquee d-flex align-items-center justify-content-center mt-4">
                                <div className="marquee-inner d-flex align-items-center">
                                    <img src="src/assets/google.png" alt="Google" className="company-logo mx-4" />
                                    <img src="src/assets/ms.jpg" alt="Microsoft" className="company-logo mx-4" />
                                    <img src="src/assets/adobe.png" alt="Adobe" className="company-logo mx-4" />
                                    <img src="src/assets/inf.png" alt="Infosys" className="company-logo mx-4" />
                                    <img src="src/assets/tcs.png" alt="TCS" className="company-logo mx-4" />
                                    <img src="src/assets/amazon.png" alt="Amazon" className="company-logo mx-4" />
                                    <img src="src/assets/meta.png" alt="Meta" className="company-logo mx-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* navbar */}
                    <div className="row fixed-top">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    {/* Logo always left */}
                                    <a className="navbar-brand fw-bold" href="#">
                                        <img src={logo} alt="Logo" height="70" className="me-2" />
                                    </a>

                                    {/* Toggle button for offcanvas */}
                                    <button className="navbar-toggler border-0 order-sm-3 ms-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    {/* Offcanvas menu (right side slide) */}
                                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav mx-auto mb-2 ps-3 mb-lg-0 ">
                                                <li className="nav-item"><a className="nav-link active  " href="#">Home</a></li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle  " href="#" role="button" data-bs-toggle="dropdown">Jobs</a>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#">Software Engineer</a></li>
                                                        <li><a className="dropdown-item" href="#">Data Analyst</a></li>
                                                        <li><a className="dropdown-item" href="#">Sales Executive</a></li>
                                                        <li><a className="dropdown-item" href="#">Graphic Designer</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle  " href="#" role="button" data-bs-toggle="dropdown">Companies</a>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#">Adobe</a></li>
                                                        <li><a className="dropdown-item" href="#">Microsoft</a></li>
                                                        <li><a className="dropdown-item" href="#">Google</a></li>
                                                        <li><a className="dropdown-item" href="#">Infosys</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link  " href="#">About</a></li>
                                                <li className="nav-item"><a className="nav-link  " href="#">Contact</a></li>
                                            </ul>

                                        </div>
                                    </div>

                                    {/* Buttons always right end (desktop + mobile both) */}
                                    <div className="d-flex ms-auto mt-lg-0 order-sm-2">
                                        <button className="btn btn-outline-success mx-3">Login</button>
                                        <button className="btn btn-warning text-dark fw-bold">Register</button>
                                    </div>

                                    <div className="nav-actions d-flex align-items-center ms-3">
                                        <div
                                            className="theme-toggle rounded-pill"
                                            onClick={() => setDarkMode(!darkMode)}
                                        >
                                            <div className="toggle-track">
                                                <span className="toggle-icon moon">🌙</span>
                                                <span className="toggle-icon sun">☀️</span>

                                                <div className={`toggle-thumb ${darkMode ? "thumb-dark" : "thumb-light"}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                {/* Achievements Cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center py-5">
                    <div className="col">
                        <div className="card py-3 shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">1,500+ Jobs Posted</h5>
                                <p className="card-text">Explore thousands of job opportunities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-3 shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">300+ Companies</h5>
                                <p className="card-text">Partnering with top companies for your success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card py-3 shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title">Simplified Process</h5>
                                <p className="card-text">Easy applications and quick updates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trending Jobs */}
                <section className="py-5">
                    <h3 className="fw-bold mb-4 text-center">Trending Jobs</h3>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/se.png" className="card-img-top img-fluid h-75" alt="Software Engineer" />
                                <div className="card-body">
                                    <h5 className="card-title">Software Engineer</h5>
                                    <p className="card-text">Tech Solutions Inc. | Bangalore</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">3+ Yrs Exp</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/msp.png" className="card-img-top img-fluid h-75" alt="Marketing Specialist" />
                                <div className="card-body">
                                    <h5 className="card-title">Marketing Specialist</h5>
                                    <p className="card-text">Bright Media Pvt. Ltd. | Mumbai</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">Mid-Senior Level</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/da.png" className="card-img-top img-fluid h-75" alt="Data Analyst" />
                                <div className="card-body">
                                    <h5 className="card-title">Data Analyst</h5>
                                    <p className="card-text">Analytics Hub | Delhi</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">2+ Yrs Exp</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/uiux.png" className="card-img-top img-fluid h-75" alt="UI/UX Designer" />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Designer</h5>
                                    <p className="card-text">Creative Labs | Pune</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">Fresher Friendly</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/hr.png" className="card-img-top img-fluid h-75" alt="HR Manager" />
                                <div className="card-body">
                                    <h5 className="card-title">HR Manager</h5>
                                    <p className="card-text">PeopleFirst Ltd. | Hyderabad</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">5+ Yrs Exp</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src="src/assets/pm.png" className="card-img-top img-fluid h-75" alt="Project Manager" />
                                <div className="card-body">
                                    <h5 className="card-title">Project Manager</h5>
                                    <p className="card-text">GlobalTech | Noida</p>
                                    <span className="badge bg-success me-2">Full-Time</span>
                                    <span className="badge bg-secondary">7+ Yrs Exp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-5 row">
                    <h3 className="fw-bold mb-4 text-center">Frequently Asked Questions</h3>
                    <div className="accordion w-75 mx-auto" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    How can I apply for a job?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show">
                                <div className="accordion-body">You can apply directly through the job listing by clicking “Apply Now”.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    How do I contact employers?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse">
                                <div className="accordion-body">Employers can be contacted via the message option after applying.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <MySwiper />

                {/* About Section */}
                <section className="py-5 row text-center">
                    <h3 className="fw-bold mb-3">About CareerSetu</h3>
                    <p className="w-75 mx-auto">
                        CareerSetu connects talented professionals with top employers across India. Our mission is to simplify job search and hiring through technology and trust.
                    </p>
                </section>

                {/* Team / Contact Section */}
                <section className="py-5">
                    <h3 className="fw-bold mb-4 text-center">Meet Our Team</h3>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <img src="src/assets/jeeya.jpeg" className="rounded-circle mb-3 img-fluid" alt="Team Member" />
                            <h6 className="fw-bold">Jeeya Agrawal</h6>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="col-md-3">
                            <img src="src/assets/diksha.jpeg" className="rounded-circle mb-3 img-fluid" alt="Team Member" />
                            <h6 className="fw-bold">Diksha Kushwaha</h6>
                            <p>Backend Engineer</p>
                        </div>
                        <div className="col-md-3">
                            <img src="src/assets/megha.jpeg" className="rounded-circle mb-3 img-fluid" alt="Team Member" />
                            <h6 className="fw-bold">Megha</h6>
                            <p>UI/UX Designer</p>
                        </div>
                        <div className="col-md-3">
                            <img src="src/assets/shagun.jpeg" className="rounded-circle mb-3 img-fluid" alt="Team Member" />
                            <h6 className="fw-bold">Shagun</h6>
                            <p>Designer</p>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <h5>Contact Us</h5>
                        <p>Email: support@careersetu.com | Phone: +91 9876543210</p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-4 row bg-dark text-white text-center">
                    <p className="mb-0">© 2026 CareerSetu — Connecting Talent to Opportunities</p>
                </footer>

            
            </div>  
        </>
    )
}

export default Home