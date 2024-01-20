import React, { useState } from "react";
import '../Styles/Login.css';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import login from "../Assests/Images/login.avif";
import log from "../Assests/Images/log1.jpg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function Login() {
  const nav1 = useNavigate();
//   const [logName, setLog] = useState({
//     email: undefined,
//     password: undefined,
//   });
//   const handleChange = (e) => {
//     setLog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     nav1("/home");
//   };

// const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [loginStatus, setLoginStatus] = useState("");
// const [registerStatus, setRegisterStatus] = useState("");




  const login1 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        nav1("/home");
        // setLoginStatus(response.data[0].email);
      }
    });
  };
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
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
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Login;
