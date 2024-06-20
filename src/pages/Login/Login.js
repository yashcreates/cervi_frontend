import React, { useState, useEffect } from "react";
import { getToken } from "../../api/auth";
import { Container, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logIn } from "../../store/reducers/authReducer";
import "../../styles/LoginAndUserSelect.css";

export default function Login(props) {
  const history = useHistory();
  if (props.location.userType === undefined) {
    history.push("/userSelect");
  }

  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    getToken(email, password).then((result) => {
      console.log(result);
      if (result.error) {
        console.log(result.error);
        setError("Error: " + result.error);
        return;
      }
      localStorage.setItem("accessToken", result.access);
      localStorage.setItem("userType", result.user_type);
      dispatch(
        logIn({ accessToken: result.access, userType: result.user_type })
      );
      history.push("/profile");
    });
  };

  return (
    <div className="">
      {/* <Container>
                <div className="loginFormParent">
                    <div className="centerText" 
                        style={{textTransform: "capitalize", marginBottom: "20px", 
                        fontSize: "2.5rem", fontWeight:600}}
                    >
                        {props.location.userType} Login
                    </div>
                    {error === null ? null : (
                        <div className='authFormErrorSection'>
                            {error}
                        </div>
                    )}
                    <div className="centerDiv loginFormFields">
                        <TextField
                        onChange={(e)=>{setEmail(e.target.value)}}
                        id="outlined-basic" label="Email ID" variant="outlined" fullWidth/>
                    </div>
                    <div className="centerDiv loginFormFields">
                        <TextField
                        type={"password"}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                    </div>
                    <div className="centerDiv loginButton">
                        <Button variant="contained" className="loginButton" onClick={()=>{login(email, password)}}>
                            Login
                        </Button>
                    </div>
                    <NavLink to={{pathname: "/register", userType: props.location.userType}}>
                        <div className="centerText" style={{marginTop:"5px", color: "darkblue"}}>
                            Don't have an account? Register
                        </div>
                    </NavLink>
                </div>
            </Container> */}
      {/* <nav>
        <div>
          <h5>
            <a href="#" class="nav-link">
              <span class="text-light"> Cervi Tester </span>{" "}
            </a>
          </h5>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <h6>
                  <a href="src\pages\Register\Register.js" class="nav-link">
                    <span class="text-light"> Don't have an account ?</span>{" "}
                    <span class="text-warning"> Sign Up</span>{" "}
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container ">
          <h5>
            <a href="#" className="nav-link">
              <span className="text-light"> CerviTester </span>{" "}
            </a>
          </h5>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item">
                <h6>
                  <a href="#" class="nav-link">
                    <span class="text-light"> Don't have an account ?</span>{" "}
                    <span class="text-warning">
                      <NavLink to={"/register"}>Sign Up</NavLink>
                    </span>{" "}
                  </a>
                </h6>
              </li>
              {/* <li className="nav-item ">
                <h4>
                  <a href="loginas.html" className="nav-link">
                    <span className="text-warning"> | </span>{" "}
                  </a>
                </h4>
              </li>
              <li className="nav-item">
                <h4>
                  <a href="signup/signupas.html" className="nav-link">
                    <span className="text-warning"> Sign Up </span>{" "}
                  </a>
                </h4>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <section class="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5 mt-5 ">
              <img src="/images/img30.png" class="img-fluid"></img>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
              <h4>
                <p class=" mt-3 me-3  text-success text-center">
                  {props.location.userType} Login
                </p>
              </h4>
              {error === null ? null : (
                <div className="authFormErrorSection">{error}</div>
              )}
              <form class="login_form mt-5 mb-5" method="post">
                <div class="form-outline mt-0 mb-5 text-dark ">
                  <h6>
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </h6>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Eg: querty@gmail.com"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div class="form-outline mb-5 text-dark">
                  <h6>
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </h6>
                  <TextField
                    type={"password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Enter password"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center text-dark mb-2">
                  <div class="form-check mb-2 text-dark">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Remember Me
                    </label>
                  </div>
                  <a href="#!" class="text-body">
                    Forgot password?
                  </a>
                </div>
                <div class="text-center  mt-4 pt-2 align-items-center">
                  <button
                    type="submit"
                    class="btn btn-success btn-lg "
                    onClick={() => {
                      login(email, password);
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
