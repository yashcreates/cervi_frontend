/* eslint-disable no-undef */
import {
  FileUploadOutlined,
  LinkedCamera,
  ReportProblemOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as tf from "@tensorflow/tfjs";
import * as React from "react";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

import { getPatientFromPhone, uploadForPrediction } from "../../api/helpers";

import "../../styles/Test.css";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";

export default function TestSteps(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [testType, setTestType] = React.useState(props.location.testType);
  const [model, setModel] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [prediction, setPred] = React.useState(null);
  const [steps, setSteps] = React.useState([]);
  const [patient, setPatient] = React.useState(null);
  const [patientMessage, setPatientMessage] = React.useState(null);
  const [webcamModal, setWebcamModal] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const [xs, setXS] = React.useState(0);
  const [sm, setSM] = React.useState(0);

  const userType = useSelector((state) => state.auth.userType);
  const token = useSelector((state) => state.auth.accessToken);

  let labels = ["Colposcopy", "Pap Smear"];

  const uploadImage = (image, userType, patientID = null, token) => {
    console.log(userType, patientID, token);
    // uploadForPrediction(image,userType,patientID,token)
  };

  const closeWebcamModal = () => {
    setWebcamModal(false);
  };

  const history = useHistory();

  const getPatient = (token, phone) => {
    getPatientFromPhone(token, phone).then((result) => {
      console.log(result);
      if (result.patient[0] !== undefined) {
        setPatient(result.patient[0]);
        setPatientMessage("Link to Patient: " + result.patient[0].name);
      } else {
        setPatientMessage("No patient found!");
        setPatient(null);
      }
    });
  };

  const loadModel = async () => {
    console.log("Loading Verification Model...");
    await tf
      .loadLayersModel("./verificationModel/model.json")
      .then((res) => setModel(res));
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const setLayout = (testType, image) => {
    let xs = 6;
    let sm = 6;
    if (testType === "Colposcopy" && image !== null) {
      xs = 6;
      sm = 4;
    }
    setXS(xs);
    setSM(sm);
  };

  if (testType == null) {
    history.push("/test");
  }

  useEffect(() => {
    console.log(activeStep);
    //console.log(model)
    setLayout(testType, image);
    //console.log(prediction)
    if (userType === "patient") {
      setSteps(["Import Image", "Verify Image", "Upload Image"]);
    } else if (userType === "doctor") {
      setSteps([
        "Select Patient",
        "Import Image",
        "Verify Image",
        "Upload Image",
      ]);
    }
    console.log(webcamModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const handleImgSelect = (file) => {
    fileToDataUri(file).then((dataUri) => {
      // console.log(dataUri)
      setImage(dataUri);
      setVerified(false);
      loadModel();
    });
  };

  function predictClass(vm) {
    console.log(vm);
    // Make a prediction through the model on our image.
    const imgEl = tf.browser.fromPixels(document.getElementById("thisIMG"));
    let final_image = tf.image.resizeBilinear(imgEl, [200, 200]);
    let axis = 0;
    final_image = tf.expandDims(final_image, axis);
    let result = vm.predict(final_image);
    let pred = result.dataSync()[0];
    console.log(labels[pred]);
    console.log(props.location.testType);
    setPred(labels[pred]);
    setVerified(true);
  }

  function FileUpload(props) {
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
      useDropzone({ maxFiles: 1 });

    const acceptedFile = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    const rejectedFiles = fileRejections.map(({ file, errors }) => {
      return (
        <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map((e) => (
              <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      );
    });

    return (
      <div {...getRootProps({ className: "dropzone bigGridBox centerDiv1" })}>
        <input
          {...getInputProps()}
          id="imgUpload"
          onChange={(event) => handleImgSelect(event.target.files[0])}
        />
        <div className="testBoxText">Upload Image</div>
        <FileUploadOutlined className="testBoxIcon" />
      </div>
    );
  }

  const selectPatientStep = () => {
    return (
      <div className="testPatientPhoneContainer">
        <TextField
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          id="outlined-basic"
          label="Patient Phone Number"
          variant="outlined"
          fullWidth
        />
        <Button
          className="linkPatientButton"
          variant="contained"
          onClick={() => {
            getPatient(token, phone);
          }}
        >
          Link Patient
        </Button>
        <div className="testPatientSelectMessage">{patientMessage}</div>
      </div>
    );
  };

  const importImageStep = () => {
    return (
      <div className="testBoxesContainer">
        <Grid container spacing={2} className="centerDiv">
          <Grid item xs={xs} sm={sm}>
            <FileUpload />
          </Grid>
          {testType === "Pap Smear" ? null : (
            <Grid
              item
              xs={xs}
              sm={sm}
              onClick={() => {
                setWebcamModal(true);
              }}
            >
              <div className="bigGridBox centerDiv1">
                <div className="testBoxText">Capture Image</div>
                <LinkedCamera className="testBoxIcon" />
              </div>
            </Grid>
          )}
          {image !== null ? (
            <Grid item xs={xs} sm={sm}>
              <div className="pTestBigBox">
                <div className="pTestBoxText">Your Image :</div>
                <img
                  src={image}
                  id="testImage"
                  alt=""
                  className="uploadedImage"
                />
              </div>
            </Grid>
          ) : null}
          <WebcamCapture
            open={webcamModal}
            handleClose={closeWebcamModal}
            setWebcamImage={setImage}
          />
        </Grid>
      </div>
    );
  };

  const verifyImageStep = () => {
    return (
      <div className="centerDiv" style={{ flexDirection: "column" }}>
        <div className="centerDiv">
          <img
            src={image}
            height="250px"
            alt=""
            style={{ display: "flex" }}
            id="thisIMG"
          />
        </div>
        {verified === true ? null : (
          <div>
            <Button
              variant="contained"
              onClick={() => {
                predictClass(model);
              }}
              style={{ textTransform: "none", marginTop: "15px" }}
            >
              Verify Image
            </Button>
          </div>
        )}
        {verifyImage(prediction, testType)}
      </div>
    );
  };

  const verifyImage = (prediction, testType) => {
    if (verified === true) {
      if (prediction !== testType) {
        return (
          <div
            className="pTestCaution"
            style={{ margin: "20px auto 40px auto" }}
          >
            <div>
              <ReportProblemOutlined
                fontSize="smaller"
                style={{ marginRight: "5px" }}
              />
              Note: This seems to be a <strong>{prediction}</strong> test image,
              but you have selected <strong>{testType}</strong> test.
              <br />
              Please make sure you have uploaded the right image. If you think
              this is a mistake, you can proceed further.
            </div>
          </div>
        );
      } else {
        return (
          <div className="successBox" style={{ margin: "20px auto 40px auto" }}>
            Successfully Verified!
          </div>
        );
      }
    }
  };

  const lastStep = () => {
    return (
      <div className="centerText">
        <h2>Processing Your Report ...</h2>
        <span>
          You will find your report in the <b>Reports</b> tab shortly.
        </span>

        <div style={{ marginTop: "50px", display: "block" }}>
          <NavLink to={{ pathname: "/test" }}>
            <Button variant="contained" className="uploadStepsButton">
              Run Another Test
            </Button>
          </NavLink>
          <div style={{ margin: "15px 0" }}>or</div>
          <NavLink to={{ pathname: "/reports", from: "generated" }}>
            <Button variant="contained" className="uploadStepsButton">
              Go to Reports
            </Button>
          </NavLink>
        </div>
      </div>
    );
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    if (userType === "patient" && activeStep === 1) {
      uploadForPrediction(image, userType, null, token, testType);
    }
    if (userType === "doctor" && activeStep === 2) {
      uploadForPrediction(image, userType, patient.user_id, token, testType);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (activeStep === 0) {
      window.history.back();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const setButtonDisabled = (activeStep, userType) => {
    if (activeStep === 0) {
      if (userType === "doctor") return patient === null;
      if (userType === "patient") return image === null;
    }
    if (activeStep === 1) {
      if (userType === "doctor") return image === null;
      if (userType === "patient") return !verified;
    }
    if (activeStep === 2) {
      if (userType === "doctor") return !verified;
    }
  };

  const displayStepsforPatient = (step) => {
    switch (step) {
      case 0:
        return importImageStep();
      case 1:
        return verifyImageStep();
      case 2:
        return lastStep();
      default:
        return <div></div>;
    }
  };

  const displayStepsforDoctor = (step) => {
    switch (step) {
      case 0:
        return selectPatientStep();
      case 1:
        return importImageStep();
      case 2:
        return verifyImageStep();
      case 3:
        return lastStep();
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel className="testStepperLabel" {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="testStepsContent">
        {userType === "patient" ? displayStepsforPatient(activeStep) : null}
        {userType === "doctor" ? displayStepsforDoctor(activeStep) : null}
      </div>
      {activeStep === steps.length - 1 ? null : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Button
            color="inherit"
            variant="outlined"
            onClick={handleBack}
            className="uploadStepsButton"
          >
            &lt; Back
          </Button>

          <Button
            onClick={handleNext}
            variant="contained"
            className="uploadStepsButton"
            disabled={setButtonDisabled(activeStep, userType)}
          >
            Next &gt;
          </Button>
        </div>
      )}
    </div>
  );
}
