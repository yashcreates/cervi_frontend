import React from "react";
import "../styles/styles.css";
import { BottomNavigation } from "@mui/material";
// let footerStyle = {
//   position: "absolute",
// };

export const Footer = () => {
  return (
    // <footer
    //   className="p-3 bg-dark text-white text-center position-relative"
    //   style={{ position: "absolute;" }}
    // >
    //   <div class="container">
    //     <h2>
    //       <p class="lead">Copyright &copy; 2023 Cervi Tester</p>
    //     </h2>
    //   </div>
    // </footer>
    // <BottomNavigation
    //   className="p-3 bg-dark text-white text-center position-relative"
    //   style={{ position: "fixed", left: "0", bottom: "0", width: "100%" }}
    // >
    //   <div class="container">
    //     <h2>
    //       <p class="lead">Copyright &copy; 2023 Cervi Tester</p>
    //     </h2>
    //   </div>
    // </BottomNavigation>
    <div
      className="p-3  text-black text-center footer"
      style={{ position: "fixed", left: "0", bottom: "0", width: "100%" }}
    >
      <p>Copyright &copy; 2023 Cervi Tester</p>
    </div>
  );
};

export default Footer;
