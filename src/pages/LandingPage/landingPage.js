import React from "react";
import { NavLink } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export default function landingPage() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <h5>
            <a href="#" className="nav-link">
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
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h5>
                  <a className="nav-link">
                    <span className="text-warning">
                      <NavLink to={{ pathname: "/login" }}>Login</NavLink>
                    </span>{" "}
                  </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-dark navbar-dark">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span className="text-light"> CerviTester </span>{" "}
            </Typography>
            <NavLink to={"/login"}>
              <Button color="inherit"> Login </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>

      <section className="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div className="container mb-5 ">
          <div className="d-sm-flex align-items-center justify-content-between mt-3">
            <img
              className="img-fluid w-33.33% d-none d-sm-block my-5 pt-3"
              src="/images/img12.png"
            />
            <div className="mx-auto">
              <div className="col-md p-5  m-3">
                <h2>
                  {" "}
                  <span class="text-success"> Welcome to CerviTest!</span>{" "}
                </h2>
                <p class="lead">
                  <span class="text-dark">
                    {" "}
                    <p class="lead">
                      <span class="text-dark">
                        {" "}
                        Get your Cervical Cancer test done right away
                      </span>
                    </p>
                  </span>
                </p>
                <p>
                  <span className="text-success">
                    {" "}
                    We at CerviTest provide real-time diagnosis services using a
                    Pap / Colposcopy image test, and a detailed report about
                    your diagnosis. Connect with your doctors online and get
                    yourself tested for Cervical Cancer now.
                  </span>
                </p>
                <a className="btn btn-dark mt-4">
                  <i className="bi bi-chevron-right" />{" "}
                  <NavLink to={{ pathname: "/learnMore" }}>Learn More</NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
