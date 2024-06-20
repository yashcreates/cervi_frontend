import React from "react";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
export default function LearnMore() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
          <h5>
            <a href="#" class="nav-link">
              <span class="text-light"> Cervi Tester </span>
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
                  <a href="#about" class="nav-link">
                    <span class="text-warning"> About Us </span>
                  </a>
                </h6>
              </li>

              <li class="nav-item">
                <h6>
                  <a href="#questions" class="nav-link">
                    <span class="text-warning"> Question</span>
                  </a>
                </h6>
              </li>
              <li class="nav-item">
                <h6>
                  <a href="#contact" class="nav-link">
                    <span class="text-warning"> Contact </span>
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-dark navbar-dark">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CerviTester
            </Typography>
            {/* <NavLink>
              <Button color="inherit">About Us</Button>
            </NavLink> */}

            <Button color="inherit">
              <a href="#about">About Us</a>
            </Button>
            <Button color="inherit">
              <a href="#services">Our Services</a>
            </Button>

            <Button color="inherit">
              <a href="#community">Community</a>
            </Button>

            <Button color="inherit">
              <a href="#questions">FAQs</a>
            </Button>

            <Button color="inherit">
              <a href="#contact">Contact</a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <section className="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div className="container pb-3">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div className="p-3 m-3 py-3">
              <h1>
                {" "}
                <span class="text-dark">Get tested for </span>{" "}
                <span class="text-warning"> Cervical Cancer </span>
              </h1>
              <p align="justify" class="lead my-5">
                <span class="text-dark">
                  {" "}
                  A platform which provides you the facility to get tested for
                  Cervical Cancer and also receive a detailed report which will
                  provide information about your cervix health, in the comfort
                  of your home.
                </span>
              </p>
              <button
                className="btn btn-success btn-lg  mt-3 "
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                <NavLink to={{ pathname: "/login" }}>Login Now</NavLink>
              </button>
            </div>
            <img
              className="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-4 "
              src="/images/img19.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/*About US section*/}
      <section id="about" className=" bg-success text-light m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/img22.png"
                alt=""
              />
            </div>
            <div className="col-md p-5 mb-2 mt-2 pt-2">
              <h2>About Us </h2>
              <p align="justify" class="lead p-2">
                We are a non profit organization who seek to solve the issue of
                cervical cancer spread the awareness about time to time testing
                of the cancer to reduce chances of acquiring it.
              </p>
              <p align="justify" class="lead p-2">
                This is a platform using which you can get tested for Cervical
                Cancer from the comfort of your home, and also receive a
                detailed report which will be offer sufficient proof of the
                cancer and will come handy in the future.
              </p>
              <a href="" className="btn btn-light mt-5">
                <i className="bi bi-chevron-right" style={{ color: "black" }} />{" "}
                <NavLink to="/readMore">Read More</NavLink>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section id="services" class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <h2 class="text-center text-dark pt-5 mt-4 mb-4">Our Services</h2>
            <p class="lead text-center text-success  mt-2 mb-4">
              These are the services we provide through this platform.
            </p>
            <div class="col-md mb-5 pb-5">
              <div class="card bg-success text-light pb-3 mb-5">
                <div class="card-body text-center">
                  <div class="h1 mb-3 ">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3">Detection</h3>
                  <p class="card-text">
                    What more would anyone want if they will be able to detect a
                    disease like Cervical Cancer without any hassle and also get
                    accurate results?
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light pb-3 mb-5">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3">Report</h3>
                  <p align="center" class="card-text">
                    Along with the detection, users will also be able to
                    download a foolproof AI generated report with detailed
                    information
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-success text-light pb-3 mb-5">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3">Doctor Assistance</h3>
                  <p align="center" class="card-text">
                    If the results are positive then each patient will be given
                    a list of specialists in their locality. Users can then
                    shoose from this list according to their choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Sections */}
      <section id="community" class="p-5 bg-success p-5">
        <div class="container pt-5">
          <h2 class="text-center text-white  mt-2 mb-3">Community</h2>
          <p class="lead text-center text-white mb-3">
            Hear more about us form some of our users.
          </p>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Joongi Son</h3>
                  <p align="jsutify" class="card-text">
                    Last year I tried this platform for my wife. At first we
                    doubted the result, but when we took a second opinion from a
                    gynaecologist, she confirmed the results. We were happy to
                    not make countless trips to the hospital for the results.
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Juliet Sanchez</h3>
                  <p align="jsutify" class="card-text">
                    Last year, I wanted to get tested for Cervical Cancer. Due
                    to the Covid situation, I couldn't go to the clinic
                    physically, so my friend recommended this CerviTester. I was
                    very happy with it's functioning and usability.
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Sara Felton</h3>
                  <p align="jsutify" class="card-text">
                    Recently I tried this platform, I was very happy with the
                    overall experience. I really liked the feature of Doctor
                    Assistance, as I was not at all aware of any Doctor in this
                    field but CerviTester simplified the entire process.
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">Anderson Park</h3>
                  <p align="jsutify" class="card-text">
                    Recently, I was very doubtful about my mother's health,
                    which is why I tried CerviTester. It is easy to use and
                    understand and most importantly, it prodeuces the accurate
                    results, so it is trustworthy.
                  </p>
                  <a href="#">
                    <i class="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Question Accordion */}
      <section class="bg-dark text-light p-5">
        <div class="container mb-2">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Share Your Story</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Write your story ..."
              />
              <button class="btn btn-success btn-lg" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="questions" class="p-5 mt-3 mb-4">
        <div class="container">
          <h2 class="text-center mt-5 mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Is the test free of cost?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Yes, using Cervitester, you can get tested for Cervical Cancer
                  for free.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  How will it work?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  It is very simple, all you have to do is sign up, choose a
                  test of your choice, Pap-smear or Colposcopy, on proceeding
                  with one, you will be prompted to upload a test image based on
                  which cervical cancer will be detected and a report will be
                  generated in order to give more information.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  To know more about Cervical Cancer, please click on Read More.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact & Map */}
      <section id="contact" class="p-5  bg-success mt-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center text-light mb-4">Contact Info</h2>
              <ul class="list-group list-group-flush lead bg-success text-light">
                <li class="list-group-item bg-success text-light">
                  <span class="fw-bold">Main Location:</span> 50 Main st Boston
                  MA
                </li>
                <li class="list-group-item bg-success text-light">
                  <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
                </li>
                <li class="list-group-item bg-success text-light">
                  <span class="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li class="list-group-item bg-success text-light">
                  <span class="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li class="list-group-item bg-success text-light">
                  <span class="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div class="col-md">
              <div id="map">
                <img src="img/img1.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright © 2021 Frontend Bootcamp</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1" />
          </a>
        </div>
      </footer> */}
      {/* Modal */}

      {/* Right */}
      <div>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      {/* Right */}
    </div>
  );
}
