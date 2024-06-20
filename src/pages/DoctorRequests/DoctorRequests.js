import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { fetchRequests } from "../../store/reducers/userData";
import "../../styles/Reports.css";
import { formateTimeStamp } from "../../helpers";
import { getRequests, requestRespond } from "../../api/helpers";

export default function DoctorRequests(props) {
  const from = props.location.from;
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const requests = useSelector((state) => state.userData.requests);

  const respondToRequest = (request) => {
    if (
      window.confirm(
        "Do you want to accept the consultation request from patient #" +
          request.patient_id +
          " ?"
      )
    ) {
      console.log("YES");
      requestRespond(accessToken, request.id, 1)
        .then((response) => {
          console.log(response);
        })
        .then(
          window.alert(
            "Successfully accepted consultation request from patient #" +
              request.patient_id
          )
        )
        .then(window.location.reload());
    } else {
      console.log("NO");
    }
  };

  useEffect(() => {
    if (requests.length === 0 || from === "generated") {
      dispatch(fetchRequests(accessToken));
    }
  }, []);

  const generateRows = (requests) => {
    const rows = [];
    requests.forEach((request) => {
      if (request.status === "yes") {
        return;
      }
      let row = (
        <tr
          className="reportRow"
          key={request.id}
          onClick={() => {
            respondToRequest(request);
          }}
        >
          <td>{request.id}</td>
          <td>{formateTimeStamp(request.createdTs)}</td>
          <td>{formateTimeStamp(request.updatedTs)}</td>
          <td>{request.status}</td>
          <td>{request.patient_id}</td>
          <td>{request.note}</td>
          {/* <td>{request.modelFeedback===true ? 
              <span>Positive</span> : 
              <span>Negative</span>}
            </td> */}
        </tr>
      );
      rows.push(row);
    });
    return rows;
  };

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Status</th>
          <th>Patient ID</th>
          <th>Note</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>{generateRows(requests)}</tbody>
    </Table>
  );
}
