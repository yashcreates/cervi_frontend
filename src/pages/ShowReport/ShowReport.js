import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import "../../styles/ShowReport.css";
//import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { formateTimeStamp } from "../../helpers";
import { getDoctors } from "../../api/helpers";
import ReportChat from "../../components/ReportChat/ReportChat";
import SelectDoctor from "../../components/SelectDoctor/SelectDoctor";
import { Link } from "@mui/material";
import { div } from "@tensorflow/tfjs";
//import html2canvas from "html2canvas";
//import { useReactToPrint } from "react-to-print";
//import { PDFDownloadLink } from "@react-pdf/renderer";

export default function ShowReport(props) {
  const [data, setData] = useState(null);
  const [windowOpen, setWindowOpen] = useState(false);
  const [doctorModal, setDoctorModal] = useState(false);
  const [doctorsList, setDoctorsList] = useState([]);
  const [otherData, setOtherData] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const history = useHistory();

  const token = useSelector((state) => state.auth.accessToken);
  const userType = useSelector((state) => state.auth.userType);
  // const [stage, setStage] = useState(0);
  // const [percentage, setPercentage] = useState(0);

  const fetchDoctors = (token) => {
    getDoctors(token)
      .then((response) => {
        setDoctorsList(response);
      })
      .then(setDoctorModal(true));
  };

  useEffect(() => {
    if (props.location.data === undefined) {
      history.push("/reports");
    } else {
      setData(props.location.data);
      // setOtherData(JSON.parse(props.location.data.other_data))
      //setConfidence(randomNumber(65, 96).toFixed(2));
    }
    console.log(data);
    console.log(otherData);
    console.log(doctorsList);
  }, [data]);

  // useEffect(() => {
  //   setPercentage(data.roundedRatio * 100);
  //   if (percentage >= 80) {
  //     setStage(4);
  //   } else if (percentage >= 60 && percentage < 80) {
  //     setStage(3);
  //   } else if (percentage >= 40 && percentage < 70) {
  //     setStage(2);
  //   } else {
  //     setStage(1);
  //   }
  // }, []);

  const openChatWindow = () => {
    setWindowOpen(true);
  };

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const closeChatWindow = () => setWindowOpen(false);
  const closeDoctorModal = () => setDoctorModal(false);

  // var doc = new jsPDF("p", "pt");
  // let doctor = "Not Assigned";
  // let result = null;
  // if (data.doctor !== null) {
  //   doctor = data.doctor.name;
  // }
  // if (data.modelFeedback === true) result = "Positive";
  // if (data.modelFeedback === false) result = "Negative";
  // doc.addFont("helvetica", "normal");
  // doc.text(20, 60, "Patient: " + data.patient.name);
  // doc.text(20, 90, "Report ID: " + data.id);
  // doc.text(20, 120, "Created On: " + formateTimeStamp(data.createdTs));
  // doc.text(20, 150, "Last Updated On: " + formateTimeStamp(data.updatedTs));
  // doc.text(20, 180, "Status: " + data.status);
  // doc.text(20, 210, "Doctor: " + doctor);
  // doc.text(20, 240, "Result: " + result);
  // doc.save("demo.pdf");

  // const componentRef = useRef();

  // const downloadFileDocument = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  // const input = document.getElementById(rootElementId);
  // html2canvas(input).then((canvas) => {
  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "pt", "a4");
  //   pdf.addImage(imgData, "JPEG", 10, 50);
  //   pdf.save(`${downloadFileName}`);
  // });
  // const downloadPDF = () => {
  //   var html_to_pdf = require("html-pdf-node");
  //   let options = { format: "A4" };
  //   let file = { content: "<h1>Welcome to html-pdf-node</h1>" };
  //   html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  //     console.log("PDF Buffer:-", pdfBuffer);
  //   });
  // };

  if (data === null) return null;
  if (data.modelFeedback == null) {
    return (
      <div style={{ paddingBottom: "30px" }}>
        <section id="header" className="p-5">
          <div className="container">
            <div className="card-group">
              <div className="card">
                <div className="card-body ">
                  <h6 className="card-title">Patient Info</h6>
                  <p className="card-text"></p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {data.patient.name}</li>
                    <li className="list-group-item">RID No: {data.id}</li>
                  </ul>
                  <p />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Doctor </h6>
                  <p className="card-text">
                    {data.doctor !== null ? (
                      <span>{data.doctor.name}</span>
                    ) : (
                      <span>Not Assigned</span>
                    )}{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Registered On:</li>
                    <li className="list-group-item">
                      {formateTimeStamp(data.createdTs)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <h4 className="card-title py-3 mt-2 me-2 m-5 text-success">
              <bold> PAP SMEAR EXAMINATION </bold>
            </h4>

            <div className="col-lg-8 mt-4 me-5 m-3">
              <div className="card mb-5 ">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Case No .</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data.id}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Specimen</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        PAP SMEAR – LIQUID BASED CYTOLOGY
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">DIAGNOSIS/Result</p>
                    </div>
                    <div className="col-sm-9">
                      {data.roundedRatio * 100 === 100 ? (
                        <p className="text-muted mb-0">Result : Negative</p>
                      ) : (
                        <p>Result: Positive</p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Advice/Comment</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Take Another Test </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>

              <section style={{ backgroundColor: "#ffffff" }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            src={data.photoUri}
                            alt="Test Input Loading.."
                            className="img-fluid"
                            style={{ width: "500px", height: "300px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">No . of normal Cell</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.normalCount}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">
                                Ratio of normal cells to total cells{" "}
                              </p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.roundedRatio}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Normal Percentage</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.roundedRatio * 100}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">No. of abnoral cells :</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.abnormalCount}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Stage</p>
                            </div>
                            <div className="col-sm-7">
                              {data.roundedRatio * 100 >= 80 ? (
                                <p className="text-muted mb-0">4</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 60 &&
                              data.roundedRatio * 100 < 80 ? (
                                <p className="text-muted mb-0">3</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 40 &&
                              data.roundedRatio * 100 < 60 ? (
                                <p className="text-muted mb-0">2</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 < 40 ? (
                                <p className="text-muted mb-0">1</p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Conclusion</p>
                            </div>
                            <div className="col-sm-7">
                              {data.roundedRatio * 100 >= 80 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Chemotherapy: Often the primary treatment
                                      option for Stage IV cervical cancer.{" "}
                                    </li>
                                    <li>
                                      Targeted therapy: Medications that
                                      specifically target cancer cells.
                                    </li>
                                    <li>
                                      Immunotherapy: Uses the body's immune
                                      system to fight cancer.{" "}
                                    </li>
                                    <li>
                                      Palliative care: Aimed at symptom
                                      management and improving comfort.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 60 &&
                              data.roundedRatio * 100 < 80 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Chemoradiation therapy: Combining
                                      chemotherapy and radiation therapy.
                                    </li>
                                    <li>
                                      Surgery: In some cases, removal of lymph
                                      nodes or other affected tissues may be
                                      recommended.
                                    </li>
                                    <li>
                                      Palliative care: Focused on managing
                                      symptoms and improving quality of life.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 40 &&
                              data.roundedRatio * 100 < 60 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Surgery: Radical hysterectomy or pelvic
                                      exenteration (removal of the uterus,
                                      cervix, and nearby affected tissues).
                                    </li>
                                    <li>
                                      Radiation therapy: External beam radiation
                                      and/or brachytherapy.
                                    </li>
                                    <li>
                                      Chemotherapy: Often given in combination
                                      with radiation therapy.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 < 40 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Surgery: Options include a radical
                                      hysterectomy (removal of the cervix,
                                      uterus, and nearby tissues) or a
                                      trachelectomy (removal of the cervix and
                                      upper vagina while preserving fertility).
                                    </li>
                                    <li>
                                      Radiation therapy: External beam radiation
                                      or brachytherapy (internal radiation) to
                                      target the cancerous cells.
                                    </li>
                                    <li>
                                      Chemotherapy: May be used in combination
                                      with radiation therapy (chemoradiation) to
                                      enhance its effectiveness.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Extra info*/}
              <div className="containre mb-4">
                <p>
                  <b>Note :</b>
                  "Cervical cytology is a screening test and has associated
                  false negative and false positive results. Regular sampling
                  and follow up is recommended".
                  <br />
                  <br />
                  <b>Processing Method :</b> ThinPrepTM 2000 System. Staining :
                  Papanicolaou method
                </p>
                <h5 className="text-success mt-5">
                  <bold>Clinical Application :</bold>
                </h5>
                1. The smears are reported using the Bethesda System for
                Reporting Cervical Cytology (2014)
                <br />
                <br />
                2. Nayar R, Wilbur DC (Eds). The Bethesda System for Reporting
                Cervical Cytology. Definitions,Criteria, and Explanatory Notes.
                Springer, 2015
                <br />
                <br />
                3. Fontham ET, Wolf AM, Church TR, Etzioni R, Flowers CR, Herzig
                A, et al. Cervical cancer screening for individuals at average
                risk: 2020 guideline update from the American Cancer Society. CA
                Cancer J Clin 2020;70:321–46. Available at:
                https://acsjournals.onlinelibrary.wiley.com/doi/10.3322/caac.21628.
                <br />
                <br />
                4. Melnikow J, Henderson JT, Burda BU, Senger CA, Durbin S,
                Weyrich MS. Screening for cervical cancer with high-risk human
                papillomavirus testing: updated evidence report and systematic
                review for the US Preventive Services Task Force. JAMA
                2018;320:687–705.
                <br />
                <br />
              </div>
              <div className="contaier mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-success">
                      <th scope="col  " />
                      <th scope="col ">USPSTF</th>
                      <th scope="col">ACS/ASCCP/ASCP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Younger than 21 years: recommends against screening
                        Grade D recommendation
                      </td>
                      <td>
                        Younger than 25 years: recommends against screening
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        21 to 65 years: Recommends screening for cervical cancer
                        every 3 years with cervical cytology alone in women aged
                        21 to 29 years. For women aged 30 to 65 years, the
                        USPSTF recommends screening every 3 years with cervical
                        cytology alone, every 5 years with high-risk human
                        papillomavirus (hrHPV) testing alone, or every 5 years
                        with hrHPV testing in combination with cytology
                        (cotesting). Grade A recommendation
                      </td>
                      <td>
                        25 to 65 years: Primary HPV testing every 5 years
                        (preferred). If primary HPV testing is not available,
                        should be screened with co-testing (HPV testing in
                        combination with cytology) every 5 years or cytology
                        alone every 3 years (acceptable)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Older than 65 years: Recommends against screening for
                        cervical cancer in women older than 65 years who have
                        had adequate prior screening and are not otherwise at
                        high risk for cervical cancer. Grade D recommendation
                      </td>
                      <td>
                        Older than 65 years: Women who have no history of
                        cervical intraepithelial neoplasia grade 2 or a more
                        severe diagnosis within the past 25 years, and who have
                        documented adequate negative prior screening in the 10-y
                        period before age 65 years discontinue cervical cancer
                        screening with any modality, Individuals older than age
                        65 y without conditions limiting life expectancy for
                        whom sufficient documentation of prior screening is not
                        available should be screened until criteria for
                        screening cessation are met
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        After hysterectomy: Recommends against screening for
                        cervical cancer in women who have had a hysterectomy
                        with removal of the cervix and do not have a history of
                        a high-grade precancerous lesion (ie, cervical
                        intraepithelial neoplasia [CIN] grade 2 or 3) or
                        cervical cancer .
                      </td>
                      <td>
                        After hysterectomy: Recommends against screening for
                        cervical cancer in women who have had a hysterectomy
                        with removal of the cervix and do not have a history of
                        a high-grade precancerous lesion (ie, cervical
                        intraepithelial neoplasia [CIN] grade 2 or 3) or
                        cervical cancer. "
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>
                        HPV vaccinated: Recommended screening practices should
                        not change on the basis of HPV vaccination status .
                      </td>
                      <td>
                        HPV vaccinated: Recommended screening practices should
                        not change on the basis of HPV vaccination status
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="showReportBottomButtons">
          <Link
            href={`https://cervi-test-pccoe.herokuapp.com/detection/report?id=${data.id}`}
          >
            <Button variant="contained">Download PDF</Button>
          </Link>
          {userType === "doctor" ? null : data.doctor === null ? (
            <Button
              variant="contained"
              onClick={() => {
                fetchDoctors(token);
              }}
            >
              Assign Doctor
            </Button>
          ) : null}
          {data.doctor === null ? null : (
            <Button variant="contained" onClick={openChatWindow}>
              Chat
            </Button>
          )}
        </div>
        {data.doctor === null ? null : (
          <span>
            <ReportChat
              windowOpen={windowOpen}
              closeChatWindow={closeChatWindow}
              token={token}
              reportID={data.chat}
              userType={userType}
            />
          </span>
        )}
        <SelectDoctor
          openDoctorModal={doctorModal}
          closeDoctorModal={closeDoctorModal}
          token={token}
          doctors={doctorsList}
          reportData={data}
        />
      </div>
    );
  }
  if (data.modelFeedback !== null) {
    return (
      // <div>
      //   <div className="reportWrapper">
      //     <div className="reportHeader">
      //       <img src="./images/logo.png" alt="" className="reportLogo" />
      //       <div className="reportTitle">Cervi-Test Report</div>
      //     </div>
      //     <hr />
      //     <div className="reportHeaderInfo">
      //       <Grid container>
      //         <Grid className="reportHeaderItem" item xs={12} md={6}>
      //           <div>
      //             <strong>Patient:</strong> {data.patient.name}
      //           </div>
      //           <div>
      //             <strong>Report ID: </strong> {data.id}
      //           </div>
      //           <div>
      //             <strong>Created:</strong> {formateTimeStamp(data.createdTs)}
      //           </div>
      //           <div>
      //             <strong>Last Update On:</strong>{" "}
      //             {formateTimeStamp(data.updatedTs)}
      //           </div>
      //         </Grid>
      //         <Grid className="reportHeaderItem" item xs={12} md={6}>
      //           <div>
      //             <strong>Status:</strong> {data.status}
      //           </div>
      //           <div>
      //             <strong>Doctor: </strong>
      //             {data.doctor !== null ? (
      //               <span>{data.doctor.name}</span>
      //             ) : (
      //               <span>Not Assigned</span>
      //             )}
      //           </div>
      //           <div>
      //             <strong>Model Version: </strong>
      //             {data.modelVersion}
      //           </div>
      //           <div>
      //             <strong>Test Type: </strong>
      //             {data.test_type}
      //             {data.test_type === "0" ? (
      //               <span>Pap Smear</span>
      //             ) : (
      //               <span>Colposcopy</span>
      //             )}
      //           </div>
      //         </Grid>
      //       </Grid>
      //     </div>
      //     <hr />
      //     <div className="cervicalCytologyReport">Cervical Cytology Report</div>
      //     <hr />
      //     <div className="reportResultSection">
      //       <Grid container>
      //         <Grid style={{ marginBottom: "20px" }} item xs={12} md={6}>
      //           <div style={{ fontWeight: "600", fontSize: "1.rem" }}>
      //             {data.modelFeedback === true ? (
      //               <span>Result : Positive</span>
      //             ) : (
      //               <span>Result: Negative</span>
      //             )}
      //           </div>
      //           <div>Confidence: {confidence} %</div>
      //           <div>
      //             {/* <div>
      //                                     <div>Morphological Features:</div>
      //                                     <div>Nucleus Area: {otherData.nucleus_area}</div>
      //                                     <div>Cell Area: {otherData.cell_area}</div>
      //                                     <div>Image Quality: {otherData.image_quality.toFixed(3)}</div>
      //                                 </div> */}
      //           </div>
      //         </Grid>
      //         <Grid item xs={12} md={6}>
      //           <div>
      //             Test Image: &nbsp;
      //             <img
      //               src={data.photoUri}
      //               alt="Test Input Loading.."
      //               className="reportImage"
      //             />
      //           </div>
      //         </Grid>
      //       </Grid>
      //     </div>
      //   </div>
      //   <div className="showReportBottomButtons">
      //     <Link
      //       href={`https://cervi-test-pccoe.herokuapp.com/detection/report?id=${data.id}`}
      //     >
      //       <Button variant="contained">Download PDF</Button>
      //     </Link>
      //     {userType === "doctor" ? null : data.doctor === null ? (
      //       <Button
      //         variant="contained"
      //         onClick={() => {
      //           fetchDoctors(token);
      //         }}
      //       >
      //         Assign Doctor
      //       </Button>
      //     ) : null}
      //     {data.doctor === null ? null : (
      //       <Button variant="contained" onClick={openChatWindow}>
      //         Chat
      //       </Button>
      //     )}
      //   </div>
      //   {data.doctor === null ? null : (
      //     <span>
      //       <ReportChat
      //         windowOpen={windowOpen}
      //         closeChatWindow={closeChatWindow}
      //         token={token}
      //         reportID={data.chat}
      //         userType={userType}
      //       />
      //     </span>
      //   )}
      //   <SelectDoctor
      //     openDoctorModal={doctorModal}
      //     closeDoctorModal={closeDoctorModal}
      //     token={token}
      //     doctors={doctorsList}
      //     reportData={data}
      //   />
      // </div>

      <div style={{ paddingBottom: "30px" }}>
        <section id="header" className="p-5">
          <div className="container">
            <div className="card-group">
              <div className="card">
                <div className="card-body ">
                  <h6 className="card-title">Patient Info</h6>
                  <p className="card-text"></p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {data.patient.name}</li>
                    <li className="list-group-item">RID No: {data.id}</li>
                  </ul>
                  <p />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Doctor </h6>
                  <p className="card-text">
                    {data.doctor !== null ? (
                      <span>{data.doctor.name}</span>
                    ) : (
                      <span>Not Assigned</span>
                    )}{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Registered On:</li>
                    <li className="list-group-item">
                      {formateTimeStamp(data.createdTs)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <h4 className="card-title py-3 mt-2 me-2 m-5 text-success">
              <bold> PAP SMEAR EXAMINATION </bold>
            </h4>

            <div className="col-lg-8 mt-4 me-5 m-3">
              <div className="card mb-5 ">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Case No .</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data.id}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Specimen</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">COLPOSCOPY</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">DIAGNOSIS/Result</p>
                    </div>
                    <div className="col-sm-9">
                      {data.modelFeedback === true ? (
                        <p className="text-muted mb-0">Result : Positive</p>
                      ) : (
                        <p>Result: Negative</p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Advice/Comment</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Take Another Test </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>

              <section style={{ backgroundColor: "#ffffff" }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            src={data.photoUri}
                            alt="Test Input Loading.."
                            className="img-fluid"
                            style={{ width: "500px", height: "300px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body">
                          {/* <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">No . of normal Cell</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.normalCount}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">
                                Ratio of normal cells to total cells{" "}
                              </p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.roundedRatio}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Normal Percentage</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.roundedRatio * 100}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">No. of abnoral cells :</p>
                            </div>
                            <div className="col-sm-7">
                              <p className="text-muted mb-0">
                                {data.abnormalCount}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Stage</p>
                            </div>
                            <div className="col-sm-7">
                              {data.roundedRatio * 100 >= 80 ? (
                                <p className="text-muted mb-0">4</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 60 &&
                              data.roundedRatio * 100 < 80 ? (
                                <p className="text-muted mb-0">3</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 40 &&
                              data.roundedRatio * 100 < 60 ? (
                                <p className="text-muted mb-0">2</p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 < 40 ? (
                                <p className="text-muted mb-0">1</p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                          <hr /> */}
                          <div className="row">
                            <div className="col-sm-5">
                              <p className="mb-0">Conclusion</p>
                            </div>
                            <div className="col-sm-7">
                              {data.modelFeedback === true ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Chemotherapy: Often the primary treatment
                                      option for Stage IV cervical cancer.{" "}
                                    </li>
                                    <li>
                                      Targeted therapy: Medications that
                                      specifically target cancer cells.
                                    </li>
                                    <li>
                                      Immunotherapy: Uses the body's immune
                                      system to fight cancer.{" "}
                                    </li>
                                    <li>
                                      Palliative care: Aimed at symptom
                                      management and improving comfort.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {/* {data.roundedRatio * 100 >= 60 &&
                              data.roundedRatio * 100 < 80 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Chemoradiation therapy: Combining
                                      chemotherapy and radiation therapy.
                                    </li>
                                    <li>
                                      Surgery: In some cases, removal of lymph
                                      nodes or other affected tissues may be
                                      recommended.
                                    </li>
                                    <li>
                                      Palliative care: Focused on managing
                                      symptoms and improving quality of life.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 >= 40 &&
                              data.roundedRatio * 100 < 60 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Surgery: Radical hysterectomy or pelvic
                                      exenteration (removal of the uterus,
                                      cervix, and nearby affected tissues).
                                    </li>
                                    <li>
                                      Radiation therapy: External beam radiation
                                      and/or brachytherapy.
                                    </li>
                                    <li>
                                      Chemotherapy: Often given in combination
                                      with radiation therapy.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )}
                              {data.roundedRatio * 100 < 40 ? (
                                <p className="text-muted mb-0">
                                  Treatment options may include:{" "}
                                  <ul>
                                    <li>
                                      Surgery: Options include a radical
                                      hysterectomy (removal of the cervix,
                                      uterus, and nearby tissues) or a
                                      trachelectomy (removal of the cervix and
                                      upper vagina while preserving fertility).
                                    </li>
                                    <li>
                                      Radiation therapy: External beam radiation
                                      or brachytherapy (internal radiation) to
                                      target the cancerous cells.
                                    </li>
                                    <li>
                                      Chemotherapy: May be used in combination
                                      with radiation therapy (chemoradiation) to
                                      enhance its effectiveness.
                                    </li>
                                  </ul>
                                </p>
                              ) : (
                                <></>
                              )} */}
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Extra info*/}
              <div className="containre mb-4">
                <p>
                  <b>Note :</b>
                  "Cervical cytology is a screening test and has associated
                  false negative and false positive results. Regular sampling
                  and follow up is recommended".
                  <br />
                  <br />
                  <b>Processing Method :</b> ThinPrepTM 2000 System. Staining :
                  Papanicolaou method
                </p>
                <h5 className="text-success mt-5">
                  <bold>Clinical Application :</bold>
                </h5>
                1. The smears are reported using the Bethesda System for
                Reporting Cervical Cytology (2014)
                <br />
                <br />
                2. Nayar R, Wilbur DC (Eds). The Bethesda System for Reporting
                Cervical Cytology. Definitions,Criteria, and Explanatory Notes.
                Springer, 2015
                <br />
                <br />
                3. Fontham ET, Wolf AM, Church TR, Etzioni R, Flowers CR, Herzig
                A, et al. Cervical cancer screening for individuals at average
                risk: 2020 guideline update from the American Cancer Society. CA
                Cancer J Clin 2020;70:321–46. Available at:
                https://acsjournals.onlinelibrary.wiley.com/doi/10.3322/caac.21628.
                <br />
                <br />
                4. Melnikow J, Henderson JT, Burda BU, Senger CA, Durbin S,
                Weyrich MS. Screening for cervical cancer with high-risk human
                papillomavirus testing: updated evidence report and systematic
                review for the US Preventive Services Task Force. JAMA
                2018;320:687–705.
                <br />
                <br />
              </div>
              <div className="contaier mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-success">
                      <th scope="col  " />
                      <th scope="col ">USPSTF</th>
                      <th scope="col">ACS/ASCCP/ASCP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Younger than 21 years: recommends against screening
                        Grade D recommendation
                      </td>
                      <td>
                        Younger than 25 years: recommends against screening
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        21 to 65 years: Recommends screening for cervical cancer
                        every 3 years with cervical cytology alone in women aged
                        21 to 29 years. For women aged 30 to 65 years, the
                        USPSTF recommends screening every 3 years with cervical
                        cytology alone, every 5 years with high-risk human
                        papillomavirus (hrHPV) testing alone, or every 5 years
                        with hrHPV testing in combination with cytology
                        (cotesting). Grade A recommendation
                      </td>
                      <td>
                        25 to 65 years: Primary HPV testing every 5 years
                        (preferred). If primary HPV testing is not available,
                        should be screened with co-testing (HPV testing in
                        combination with cytology) every 5 years or cytology
                        alone every 3 years (acceptable)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Older than 65 years: Recommends against screening for
                        cervical cancer in women older than 65 years who have
                        had adequate prior screening and are not otherwise at
                        high risk for cervical cancer. Grade D recommendation
                      </td>
                      <td>
                        Older than 65 years: Women who have no history of
                        cervical intraepithelial neoplasia grade 2 or a more
                        severe diagnosis within the past 25 years, and who have
                        documented adequate negative prior screening in the 10-y
                        period before age 65 years discontinue cervical cancer
                        screening with any modality, Individuals older than age
                        65 y without conditions limiting life expectancy for
                        whom sufficient documentation of prior screening is not
                        available should be screened until criteria for
                        screening cessation are met
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        After hysterectomy: Recommends against screening for
                        cervical cancer in women who have had a hysterectomy
                        with removal of the cervix and do not have a history of
                        a high-grade precancerous lesion (ie, cervical
                        intraepithelial neoplasia [CIN] grade 2 or 3) or
                        cervical cancer .
                      </td>
                      <td>
                        After hysterectomy: Recommends against screening for
                        cervical cancer in women who have had a hysterectomy
                        with removal of the cervix and do not have a history of
                        a high-grade precancerous lesion (ie, cervical
                        intraepithelial neoplasia [CIN] grade 2 or 3) or
                        cervical cancer. "
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>
                        HPV vaccinated: Recommended screening practices should
                        not change on the basis of HPV vaccination status .
                      </td>
                      <td>
                        HPV vaccinated: Recommended screening practices should
                        not change on the basis of HPV vaccination status
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="showReportBottomButtons">
          <Link
            href={`https://cervi-test-pccoe.herokuapp.com/detection/report?id=${data.id}`}
          >
            <Button variant="contained">Download PDF</Button>
          </Link>
          {userType === "doctor" ? null : data.doctor === null ? (
            <Button
              variant="contained"
              onClick={() => {
                fetchDoctors(token);
              }}
            >
              Assign Doctor
            </Button>
          ) : null}
          {data.doctor === null ? null : (
            <Button variant="contained" onClick={openChatWindow}>
              Chat
            </Button>
          )}
        </div>
        {data.doctor === null ? null : (
          <span>
            <ReportChat
              windowOpen={windowOpen}
              closeChatWindow={closeChatWindow}
              token={token}
              reportID={data.chat}
              userType={userType}
            />
          </span>
        )}
        <SelectDoctor
          openDoctorModal={doctorModal}
          closeDoctorModal={closeDoctorModal}
          token={token}
          doctors={doctorsList}
          reportData={data}
        />
      </div>
    );
  }
}
