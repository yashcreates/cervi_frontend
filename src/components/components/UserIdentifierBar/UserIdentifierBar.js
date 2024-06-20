import React from "react";
import { useState, useEffect } from "react";
import UserSelect from "../../pages/UserSelect/UserSelect";
import "../../styles/UserIdentifierBar.css";

export default function UserIdentifierBar(props) {
  const [userType, setUserType] = useState(null);
  const [color, setColor] = useState(null);
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (props.userType === "patient") {
      setUserType("Patient");
      setColor("green");
    }

    if (props.userType === "doctor") {
      setUserType("Doctor");
      setColor("red");
    }
  }, []);

  return (
    // <div className='userIdentifierParent' style={{backgroundColor: color}}>

    //     {userType}
    // </div>
    <></>
  );
}
