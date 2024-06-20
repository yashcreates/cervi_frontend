import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Webcam from "react-webcam";
import { border } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function WebcamCapture(props) {
  const [image, setImage] = React.useState(null);

  const videoConstraints = {
    width: 600,
    height: 600,
    facingMode: "user",
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Webcam
                  style={{ display: "block", margin: "0 auto", width: "100%" }}
                  audio={false}
                  screenshotFormat="image/jpeg"
                >
                  {({ getScreenshot }) => (
                    <button
                      style={{
                        backgroundColor: "skyblue",
                        border: "none",
                        borderRadius: "5px",
                        width: "100%",
                        display: "block",
                        padding: "10px 0px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        setImage(getScreenshot());
                      }}
                    >
                      Capture photo
                    </button>
                  )}
                </Webcam>
              </Grid>
              <Grid item xs={12} sm={6}>
                {image === null ? null : (
                  <span>
                    <img
                      src={image}
                      alt="cam img"
                      style={{ display: "block" }}
                    />
                    <button
                      style={{
                        backgroundColor: "lightgreen",
                        border: "none",
                        borderRadius: "5px",
                        width: "100%",
                        display: "block",
                        padding: "10px 0px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        props.handleClose();
                        props.setWebcamImage(image);
                      }}
                    >
                      Accept Photo
                    </button>
                  </span>
                )}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
