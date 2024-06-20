//----------Import Dependencies-----------
import React from "react";
import { Container, Button } from "@mui/material";
//----------Import Components-------------
//----------Import Styles-----------------
import { NavLink } from "react-router-dom";
import "../../styles/LoginAndUserSelect.css";

export default function UserSelect() {
  return (
    // <Container>
    //     <div>
    //         <div className="centerText">
    //             {/* <span className='userSelectHeading'>Cervi Test</span> */}
    //             <img src="./images/logo.png" alt='logo' className='userSelectLogo'/>
    //         </div>

    //         <div className="centerText">
    //             <NavLink to={{pathname: "/login", userType: "patient"}}>
    //                 <Button variant="contained" className="loginPageButton">
    //                     I am a Patient
    //                 </Button>
    //             </NavLink>
    //             <br/>

    // <NavLink to={{pathname: "/login", userType: "doctor"}}>
    //     <Button variant="contained" className="loginPageButton">
    //         I am a Doctor
    //     </Button>
    // </NavLink>
    // <br/>

    // <Button variant="contained" className="loginPageButton">
    //     I am a Health Professional
    // </Button>
    //             <br/>
    //         </div>

    //     </div>
    // </Container>
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
          <h5>
            <a href="../leranmore.html" class="nav-link">
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
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <h5>
            <a href="../leranmore.html" className="nav-link">
              <span className="text-light"> CerviTester </span>{" "}
            </a>
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>

      <section class="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div class="container mb-5 ">
          <div class="d-sm-flex align-items-center justify-content-between mt-3">
            <img
              src="/images/more1.png"
              class="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-0 "
              alt=""
            />
            <div class="mx-auto">
              <h1>
                {" "}
                <span class="text-dark align-items-center mx-5 pt-0">
                  Login As
                </span>
              </h1>
              {/* <p class="lead my-4 mb-5 mt-2 pb-3">
                <span class="text-dark align-items-center ">
                  {" "}
                  Lorem ipsum dolor sit amet.
                </span>
              </p> */}
              <div class="d-grid gap-4 col-9 mx-auto">
                {/* <NavLink to={{ pathname: "/login", userType: "patient" }}>
                  <Button
                    class="btn btn-success btn-lg active" 
                    variant="contained"
                  >
                    Patient
                  </Button>
                </NavLink>
                <NavLink to={{ pathname: "/login", userType: "doctor" }}>
                  <Button
                    class="btn btn-success btn-lg active"
                    variant="contained"
                  >
                    Doctor
                  </Button>
                </NavLink> */}
                <button
                  class="btn btn-success btn-lg active"
                  aria-pressed="true"
                  onClick={() => {
                    localStorage.setItem("userType", "patient");
                  }}
                >
                  <NavLink to={{ pathname: "/Login", userType: "patient" }}>
                    Patient
                  </NavLink>
                </button>
                <button
                  class="btn btn-success btn-lg active"
                  aria-pressed="true"
                  onClick={() => {
                    localStorage.setItem("userType", "doctor");
                  }}
                >
                  <NavLink to={{ pathname: "/Login", userType: "doctor" }}>
                    Doctor
                  </NavLink>
                </button>
                {/* <a
                  href=""
                  class="btn btn-success btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  <NavLink to={{ pathname: "/Login", userType: "tester" }}>
                    Tester
                  </NavLink>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
{
  /* <section class="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
          <div class="container mb-5 ">
            <div class="d-sm-flex align-items-center justify-content-between mt-3">
              <img 
                      class="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-0 "
                      src="../img/more1.png" class="img-fluid" alt="" />
                      <div class="mx-auto">
                        <h1> <span class="text-dark align-items-center mx-5 pt-0">Login As</span></h1>
                        <p class="lead my-4 mb-5 mt-2 pb-3">
                            <span class="text-dark align-items-center "> Lorem ipsum dolor sit amet.</span>
                        </p>
                        <div class="d-grid gap-4 col-9 mx-auto">
                        <NavLink to={{pathname: "/login", userType: "patient"}}>
                            <Button variant="contained" className="loginPageButton">
                            I am a Patient
                            </Button>
                    </NavLink>
                    <NavLink to={{pathname: "/login", userType: "doctor"}}>
                            <Button variant="contained" className="loginPageButton">
                            I am a Doctor
                            </Button>
                    </NavLink>
                          
                          </div>
        
                        
                        
                      </div>
                      </div>
              </div>
            </div>
        
    
        </section> */
}
