import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchReports,
  fetchProfile,
  fetchRequests,
} from "../../store/reducers/userData";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import { formateTimeStamp } from "../../helpers";

import "../../styles/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userType = useSelector((state) => state.auth.userType);
  const token = useSelector((state) => state.auth.accessToken);
  const reports = useSelector((state) => state.userData.reports);
  const requestsUnfiltered = useSelector((state) => state.userData.requests);
  const requests = requestsUnfiltered.filter(
    (requestsUnfiltered) => requestsUnfiltered.status !== "yes"
  );
  const profile = useSelector((state) => state.userData.profile);

  useEffect(() => {
    if (reports.length === 0) {
      dispatch(fetchReports(token));
    }
    if (profile.name === null) {
      dispatch(fetchProfile(token));
    }
    if (requests.length === 0) {
      dispatch(fetchRequests(token));
    }
  }, []);

  const generateRows = (reports) => {
    const rows = [];
    const reportsArr = [...reports];
    let reportsArrR = reportsArr.reverse();
    reportsArrR.forEach((report, index) => {
      if (index < 3) {
        let row = (
          <tr
            className="reportRow"
            key={report.id}
            onClick={() => {
              history.push({ pathname: "/showReport", data: report });
            }}
          >
            <td>{report.id}</td>
            <td>{formateTimeStamp(report.createdTs)}</td>
            <td>{report.status}</td>
            <td>
              {report.doctor !== null ? (
                <span>{report.doctor.name}</span>
              ) : (
                <span style={{ color: "#808080" }}>Not Assigned</span>
              )}
            </td>
          </tr>
        );
        rows.push(row);
      }
    });
    return rows;
  };

  const reportsTable = () => {
    if (reports.length === 0) {
      return <div> You have no reports at the moment... </div>;
    }
    return (
      <div>
        <div style={{ marginBottom: "15px" }}>Your most recent reports</div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Created</th>
              <th>Status</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>{generateRows(reports)}</tbody>
        </Table>
        <div
          className="centerText"
          style={{ marginTop: "25px", fontSize: "1.2rem", color: "#3E95E1" }}
        >
          <NavLink to={{ pathname: "/reports" }}>See all &gt;</NavLink>
        </div>
      </div>
    );
  };

  const generateRequestRows = (reports) => {
    const rows = [];
    const reportsArr = [...reports];
    let reportsArrR = reportsArr.reverse();
    reportsArrR.forEach((report, index) => {
      if (index < 3) {
        let row = (
          <tr className="reportRow" key={report.id}>
            <td>{index + 1}</td>
            <td>{formateTimeStamp(report.createdTs)}</td>
            <td>{report.patient_id}</td>
            <td>{report.status}</td>
            {/* <td>{report.modelFeedback===true ? 
                            <span>Positive</span> : 
                            <span>Negative</span>}
                        </td> */}
          </tr>
        );
        rows.push(row);
      }
    });
    return rows;
  };

  const requestsTable = () => {
    if (requests.length === 0) {
      return <div> You have no requests at the moment... </div>;
    }
    return (
      <div>
        <div style={{ marginBottom: "15px" }}>Your most recent reports</div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Created</th>
              <th>Patient</th>
              <th>Status</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{generateRequestRows(requests)}</tbody>
        </Table>
        <div
          className="centerText"
          style={{ marginTop: "25px", fontSize: "1.2rem", color: "#3E95E1" }}
        >
          <NavLink to={{ pathname: "/doctor-requests" }}>See all &gt;</NavLink>
        </div>
      </div>
    );
  };

  const homeProfileCard = () => {
    return (
      <div className="centerDiv1">
        <img
          className="homeProfileImg"
          src="./images/woman.png"
          alt="profile"
        />
        <div className="homeProfileContent">{profile.name}</div>
        <div style={{ marginTop: "5px", fontSize: "1.2rem", color: "#3E95E1" }}>
          <NavLink to={{ pathname: "/profile" }}>Go to profile &gt;</NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="bigGridBox homeGridBox">
              <div className="homeCardTitle">Reports</div>
              {reportsTable()}
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="bigGridBox homeGridBox">
              <div className="homeCardTitle">Profile</div>
              {homeProfileCard()}
            </div>
          </Grid>

          {userType === "doctor" ? (
            <Grid item xs={12} md={6}>
              <div className="bigGridBox homeGridBox">
                <div className="homeCardTitle">Requests</div>
                {requestsTable()}
              </div>
            </Grid>
          ) : null}
        </Grid>
      </div>
    </div>
  );
}
