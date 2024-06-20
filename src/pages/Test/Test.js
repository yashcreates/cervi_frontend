import { Biotech, ColorizeOutlined, InfoOutlined } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Test.css";

export default function Test() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="testHeader pageHeader">
        <h1>Cervical Cancer Prediction</h1>
      </div>
      <div className="testTopInfo" style={{ fontSize: "small" }}>
        <div style={{ borderRadius: "10px" }}>
          <InfoOutlined fontSize="smaller" style={{ marginRight: "5px" }} />
          An image based AI tool to assess the risk and probability of having
          Cervical Cancer. Capture or upload images to proceed with the
          prediction.
        </div>
      </div>
      <div
        className="centerText"
        style={{ margin: "25px 0", fontSize: "1.2rem" }}
      >
        Select Test Type
      </div>
      <div className="testBoxesContainer">
        <Grid container spacing={2} className="centerDiv">
          <Grid item xs={6} sm={6}>
            <NavLink
              to={{ pathname: "/testSteps", testType: "Pap Smear" }}
              exact
            >
              <div className="bigGridBox centerDiv1">
                <div className="testBoxText">Pap-Smear Test</div>
                <Biotech className="testBoxIcon" />
              </div>
            </NavLink>
          </Grid>

          <Grid item xs={6} sm={6}>
            <NavLink
              to={{ pathname: "/testSteps", testType: "Colposcopy" }}
              exact
            >
              <div className="bigGridBox centerDiv1">
                <div className="testBoxText">Colposcopy Test</div>
                <ColorizeOutlined className="testBoxIcon" />
              </div>
            </NavLink>
          </Grid>
        </Grid>
      </div>

      {/* <div className="pTestCaution">
               <div style={{color: 'grey', fontSize: "small"}}>
                <ReportProblemOutlined fontSize="smaller" style={{marginRight: "5px"}}/>
                Note: You will receive a prediction from an Artificial Intelligence model based on the image you upload of the
                affected area. The purpose of this tool is to aid in detection and early diagnosis of cervical cancer.
                This is not a replacement for professional medical consultancy.
                </div>
           </div>
           <div style={{height: "200vw"}}></div> */}
    </div>
  );
}
