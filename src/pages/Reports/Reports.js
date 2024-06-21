import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { fetchReports } from "../../store/reducers/userData";
import "../../styles/Reports.css";
import { formateTimeStamp } from "../../helpers";
import { Button } from "@mui/material";

export default function Reports(props) {
  const [data, setData] = useState(null);
  const from = props.location.from;
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const userType = useSelector((state) => state.auth.userType);
  const reports = useSelector((state) => state.userData.reports);

  useEffect(() => {
    if (reports.length === 0 || from === "generated") {
      dispatch(fetchReports(accessToken));
    }
  }, []);
  useEffect(() => {
    if (props.location.data === undefined) {
    } else {
      setData(props.location.data);
      // setOtherData(JSON.parse(props.location.data.other_data))
    }
    console.log(data);
  }, [data]);

  const renderVerifyButton = () => {
    if (localStorage.getItem("userType") === "doctor") {
      return (
        <Button variant="contained">
          <NavLink to={"/doctor-requests"}>Doctor Reqests</NavLink>
        </Button>
      );
    } else {
      return <></>;
    }
  };

  const generateRows = (reports) => {
    const rows = [];
    const reportsArr = [...reports];
    let reportsArrR = reportsArr.reverse();
    reportsArrR.forEach((report) => {
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
          <td>{formateTimeStamp(report.updatedTs)}</td>
          <td>{report.status}</td>
          <td>
            {userType === "doctor" ? (
              <span>{report.patient.name}</span>
            ) : (
              <>
                {report.doctor === null ? (
                  <span>Not Assigned</span>
                ) : (
                  <span>{report.doctor.name}</span>
                )}
              </>
            )}
          </td>
          <td>
            {report.test_type === "0" ? (
              <span>Negative</span>
            ) : (
              <span>{report.modelFeedback}</span>
            )}
          </td>
        </tr>
      );
      rows.push(row);
    });
    return rows;
  };

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Status</th>
            <th>
              {userType === "patient" ? (
                <span>Doctor</span>
              ) : (
                <span>Patient</span>
              )}
            </th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{generateRows(reports)}</tbody>
      </Table>
      {renderVerifyButton()}
    </div>
  );
}
