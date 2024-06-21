import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
export default function ReadMore() {
  return (
    <div>
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
              <a href="#symptoms">Symptoms</a>
            </Button>
            <Button color="inherit">
              <a href="#risk">Risk Factor</a>
            </Button>

            <Button color="inherit">
              <a href="#test">Testing & Prevention</a>
            </Button>

            <Button color="inherit">
              <a href="#stages">Stages</a>
            </Button>

            <Button color="inherit">
              <a href="#treatment">Treatment</a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <section className="bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div className="container pb-3">
          <div className="d-sm-flex align-items-center justify-content-between gap-3">
            <div className="p-3 m-3 py-3 px-3 mt-3">
              <h1>
                {" "}
                <span className="text-dark">Be your</span>{" "}
                <span className="text-warning"> Own Doctor</span>
              </h1>
              <br />
              <h4>
                <span className="text-dark">
                  Get Tested for Cervical Cancer Now!
                </span>
              </h4>
              <p align="justify" className="lead my-5">
                <span className="text-dark">
                  {" "}
                  A platform which provides you the facility to get tested for
                  Cervical Cancer and also receive a detailed report which will
                  provide information about your cervix health, in the comfort
                  of your home.
                </span>
              </p>
              <a>
                {" "}
                <Button class="btn btn-success btn-lg mt-3">
                  <NavLink to={{ pathname: "/login" }}>Login Now</NavLink>
                </Button>{" "}
              </a>
              <a>
                {" "}
                <Button class="btn btn-success btn-lg mt-3 me-2">
                  <NavLink to={{ pathname: "/learnMore" }}>Learn More</NavLink>
                </Button>{" "}
              </a>
            </div>
            <img
              className="img-fluid w-50 h-25 d-none d-sm-block my-5 pt-4 "
              src="/images/cancer.png"
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
                src="/images/rab.png"
                alt=""
              />
            </div>
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
              <h2>About </h2>
              <p align="justify" className="lead p-2">
                A type of cancer that affects the cervix cells in the bottom
                region of the uterus. Before the faulty cells become obvious in
                this type of cancer, the cells undergo progressive alterations.
                As a result, early detection is critical for cervical cancer
                prevention.
              </p>
              <p align="justify" className="lead p-2">
                Women over the age of 25&nbsp;are more likely to develop this
                cancer, hence it is suggested that they get vaccinated against
                the Human Papilomavirus (HPV) and examined for Cervical Cancer
                every 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Symptoms*/}
      <section id="symptoms" className=" bg-light text-dark m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
              <h2>Symptoms </h2>
              <h3 className="lead p-2">
                <ul>
                  <li>Vaginal Bleeding </li>
                  <br />
                  <li>Watery Vaginal Discharge </li>
                  <br />
                  <li>Pelvic pain </li>
                  <br />
                </ul>
              </h3>
            </div>
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/sys.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/*risk factor section */}
      <section id="risk" className=" bg-success text-light m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/img22.png"
                alt=""
              />
            </div>
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2 mb-2">
              <h2>Risk Factors </h2>
              <br />
              <h3 className="lead p-2">
                <ul>
                  <li>Early Sexual Activity </li>
                  <br />
                  <li>Sexually Transmitted Infections (STIs) </li>
                  <br />
                  <li>A weakened immune system </li>
                  <br />
                  <li>Smoking </li>
                  <br />
                  <li>Exposure to miscarriage prevention drug </li>
                  <br />
                  <li>Many sexual partners </li>
                  <br />
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Testing & Prevention section */}
      <section id="test" className=" bg-light text-dark m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
              <h2>Testing </h2>
              <h3 className="lead p-2">
                <ul>
                  <li>Pap Smear Test </li>
                  <br />
                  <li>Colposcopy </li>
                  <br />
                  <li>Human Papillomavirus Test </li>
                  <br />
                  <li>Biopsy </li>
                  <br />
                  <li>
                    Bimanual pelvic examination and sterile speculum examination{" "}
                  </li>
                  <br />
                </ul>
              </h3>
              <h2>Prevention </h2>
              <p align="justify" className="lead p-2">
                One must get immunised against HPV, have frequent screening
                tests, avoid smoking, and practise safe intercourse.
              </p>
            </div>
            <div className="col-md m-3 mt-5 pt-5 pb-5 ">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/prev.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* stage
<section id="diag" class=" bg-success text-light m-0">
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-md m-3 mt-5 pt-5 pb-5 py-5" >
        <img 
        class="img-fluid w-100 d-none d-sm-block rounded pt-2"
        src="img/img22.png" class="img-fluid" alt="" />
      </div>
      <div class="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
        <h2>Stages </h2>
        <p align="justify" class="lead p-2">
          Cervical cancer stages describe the disease's evolution. 
          It explains the cancer's location, severity, and where it has spread.
        </p>
        <h3 class="lead p-2">
          <ol>
            <li>Cancer is contained within the Uterus.</li>
            <li>It has spread beyond the uterus to nearby areas.</li>
            <li>It completely involves the vagina, causes swelling of 
              the kidney and affects regional lymph nodes</li>
            <li>It has spread to the bladder and eventually to other parts of the body.</li>
          </ol>
        </h3>
      </div>
    </div>
  </div>
</section> */}
      {/* stages*/}
      <section id="stages" className=" bg-success text-light m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
              <h2>Stages </h2>
              <p align="justify" className="lead p-2">
                Cervical cancer stages describe the disease's evolution. It
                explains the cancer's location, severity, and where it has
                spread.
              </p>
              <h3 className="lead p-2">
                <ol>
                  <li>Cancer is contained within the Uterus.</li>
                  <br />
                  <li>It has spread beyond the uterus to nearby areas.</li>
                  <br />
                  <li>
                    It completely involves the vagina, causes swelling of the
                    kidney and affects regional lymph nodes
                  </li>
                  <br />
                  <li>
                    It has spread to the bladder and eventually to other parts
                    of the body.
                  </li>
                  <br />
                </ol>
              </h3>
            </div>
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2"
                src="/images/stages.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* treatment*/}
      <section id="treatment" className=" bg-light text-dark m-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md m-3 mt-5 pt-5 pb-5 py-5">
              <img
                className="img-fluid w-100 d-none d-sm-block rounded pt-2 h-50"
                src="/images/img31.png"
                alt=""
              />
            </div>
            <div className="col-md p-5 mb-2 mt-0 ms-5 px-5 mt-2">
              <h2>Treatment </h2>
              <p align="justify" className="lead p-2">
                Depending upon the stage of cancer, the age and health factors
                of the patient, the treatment is adviced.
              </p>
              <h3 align="justify" className="lead p-2">
                <dl>
                  <dt>Surgery</dt>
                  <dd>
                    Tumor is removed along with some surrounding healthy tissue
                    during an operation.
                  </dd>
                  <br />
                  <dt>Radiation Therapy</dt>
                  <dd>
                    High-energy x-rays are used to destroy cancer cells.It may
                    be given alone, before surgery, or instead of surgery to
                    shrink the tumor.
                  </dd>
                  <br />
                  <dt>Chemotherapy</dt>
                  <dd>
                    It is the use of medications to eradicate cancer cells,
                    typically by preventing cancer from developing, dividing,
                    and spreading.
                  </dd>
                  <br />
                  <dt>Targeted Therapy</dt>
                  <dd>
                    A treatment that targets the cancer’s specific genes,
                    proteins, or the tissue environment that contributes to
                    cancer growth and survival.
                  </dd>
                  <br />
                </dl>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
