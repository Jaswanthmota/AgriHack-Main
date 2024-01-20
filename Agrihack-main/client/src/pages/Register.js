import React, { useState } from "react";
import "../Styles/Login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import login from "../Assests/Images/login.avif";
import log from "../Assests/Images/log1.jpg";
import register from "../Assests/Images/register.png"
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register1 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };

  const login1 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        navigate("/home");
        // setLoginStatus(response.data[0].email);
      }
    });
  };

  return (
    <div>
      <div class="col-md mb-5 px-5" data-aos="fade-right"data-aos-duration="1500"></div>
      <section>
        <Container>
          <Row>
            <Col sm="3" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={login} alt="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={log} alt="" />
                  </div>
                  <h2>Login</h2>
                  <Form>
                    <FormGroup>
                      <input
                        type="username"
                        placeholder="Enter your username"
                        required
                        id="email"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Enter your passcode"
                        required
                        id="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="Submit"
                      onClick={login1}
                    >
                      Login
                    </Button>
                  </Form>
                  {loginStatus}
                  <p>
                    Don't have account<Link to="/register">Create</Link>
                  </p>
                </div>
              </div>
            </Col>

            <Col sm="3" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={register} alt="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={log} alt="" />
                  </div>
                  <h2>Register</h2>
                  <Form>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Enter username"
                        required
                        id="username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Enter your mailId"
                        required
                        id="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Enter your passcode"
                        required
                        id="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="Submit"
                      onClick={register1}
                    >
                      Create Account
                    </Button>
                  </Form>
                  <p>
                    Already have an account<Link to="/login">Login</Link>
                  </p>
                  {registerStatus}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Register;
