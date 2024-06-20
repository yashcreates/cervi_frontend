import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { registerPatientURL } from "../../constants";
import { logIn } from "../../store/reducers/authReducer";
import { register } from "../../api/auth";

import "../../styles/LoginAndUserSelect.css";
import { set } from "date-fns";

export default function Register(props) {
  // const history = useHistory();
  // let userType;
  // if (props.location.userType === undefined) {
  //   //history.push('/userSelect')
  //   props.location.userType = "patient";
  // } else {
  //   userType = props.location.userType;
  // }
  const history = useHistory();
  let userType;

  const dispatch = useDispatch();

  const isNumeric = (value) => {
    return /^-?\d+$/.test(value);
  };

  const formValidation = (userType, phone, dob, email, name, password) => {
    const errors = [];
    var emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailFormat)) {
      errors.push("email");
    }
    if (phone.length === 0 || phone.length > 10 || !isNumeric(phone)) {
      errors.push("phone");
    }
    if (dob.length === 0) {
      errors.push("date of birth");
    }
    if (password.length === 0) {
      errors.push("password");
    }
    if (name.length < 4) {
      errors.push("name");
    }
    console.log(errors);
    if (errors.length > 0) {
      let errorString = errors.join("\r\n");
      setError(null);
      setFormErrors(errorString);
    }
    if (errors.length === 0) {
      setFormErrors(null);
      register(userType, phone, dob, email, name, password).then(
        (result) => {
          console.log(result);
          if (result.error) {
            setError(result.error);
            setMessage(null);
            return;
          }
          // if (userType === "doctor") {
          //   setError(null);
          //   setMessage(
          //     "You will be able to login to your account once your account has been vefiried by the admin!"
          //   );
          //   return;
          // }
          if (result.token) {
            setError(null);
            localStorage.setItem("accessToken", result.token);
            localStorage.setItem("userType", userType);
            dispatch(logIn({ accessToken: result.token, userType: userType }));
            history.push("/");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = React.useState("");
  const [formErrors, setFormErrors] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleDob = (date) => {
    if (date === null) {
      return;
    }
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    var dateString = year + "-" + month + "-" + day;
    setDob(dateString);
  };

  useEffect(() => {}, [name, email, password, dob, phone, error]);

  return (
    <div>
      <Container>
        <div className="loginFormParent">
          <div
            className="centerText"
            style={{
              textTransform: "capitalize",
              marginBottom: "20px",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            {localStorage.getItem("userType")} Registration
          </div>
          {error === null ? null : (
            <div className="authFormErrorSection">
              <span>Error - {error}!</span>
            </div>
          )}
          {formErrors === null ? null : (
            <div className="authFormErrorSection" style={{ textAlign: "left" }}>
              <span>
                Please enter valid <br />
                {formErrors}
              </span>
            </div>
          )}
          {message === null ? null : (
            <div className="authFormMessageSection">{message}</div>
          )}
          <div className="centerDiv loginFormFields">
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="centerDiv loginFormFields">
            <TextField
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="outlined-basic"
              label="Enter Phone Number"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="centerDiv loginFormFields">
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="centerDiv loginFormFields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={date}
                inputFormat="dd/MM/yyyy"
                onChange={(date) => {
                  handleDob(date);
                  setDate(date);
                }}
                renderInput={(params) => (
                  <TextField {...params} style={{ width: "100%" }} />
                )}
              />
            </LocalizationProvider>
          </div>

          <div className="centerDiv loginFormFields">
            <TextField
              type={"password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="outlined-basic"
              label="Set Password"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="centerDiv loginButton">
            <Button
              variant="contained"
              className="loginButton"
              onClick={() => {
                formValidation(
                  localStorage.getItem("userType"),
                  phone,
                  dob,
                  email,
                  name,
                  password
                );
              }}
            >
              Register
            </Button>
          </div>
          <NavLink to={"/login"}>
            <div
              className="centerText"
              style={{ marginTop: "5px", color: "darkblue" }}
            >
              Already have an account? Login
            </div>
          </NavLink>
        </div>
      </Container>
    </div>
  );
}
