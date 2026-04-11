import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loginImg from "../assets/Job_portal2.jpeg";
import axios from "axios";
import { toast } from "react-toastify";

import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const loginCode = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    const response = await axios.post("http://localhost:8002/api/login", user);
    if (response.data.msg == "Success") {
      toast.success("Login Success");
      console.log(response);
      localStorage.setItem(response.data.role, response.data.id);
      setEmail("");
      setPassword("");
      if (response.data.role === "jobSeeker") {
        nevigate("/jobseeker");
      }
    } else {
      toast.error(response.data.msg);
      setPassword("");
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Container
        fluid
        className="vh-100"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <Row>
          <Col>
            <Container>
              <Row className="mt-4 px-5 d-flex justify-content-center">
                <Col
                  sm={6}
                  className="bg-light d-flex justify-content-center align-items-center formStyle"
                >
                  <div className="login_page w-100 px-5 pt-4 h-75">
                    <h1 className="m-0">
                      <strong style={{ color: "#13357b" }}>Login</strong>
                    </h1>
                    <p
                      className="m-0 fw-semibold"
                      style={{ fontSize: "1.09rem", color: "#679ab6" }}
                    >
                      Enter your Login details
                    </p>

                    <form onSubmit={loginCode} className="mt-2 pt-2">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label mt-3"
                        >
                          <h6 className="m-0" style={{ color: "#13357b" }}>
                            Email address
                          </h6>
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your Email"
                          className="form-control mb-2  text-secondary"
                          id="exampleInputEmail1"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          <h6 style={{ color: "#13357b" }}>Password</h6>
                        </label>
                        <input
                          type="password"
                          placeholder="Enter Password"
                          className="form-control "
                          id="exampleInputPassword1"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">
                          Forgot Password
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn form-control text-light mt-3 py-2 fw-semibold"
                        style={{ backgroundColor: "#13357b" }}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </Col>

                <Col sm={6} className="p-0" style={{ backgroundColor: "" }}>
                  <img
                    src={loginImg}
                    alt=""
                    className="img-fluid imageStyle"
                    style={{ height: "600px" }}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
