import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./store/reducers/authReducer";
import NavigationController from "./NavigationController";
import { createTheme, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  var token = localStorage.getItem("accessToken");
  var userType = localStorage.getItem("userType");
  if (token !== null && userType !== null) {
    dispatch(logIn({ accessToken: token, userType: userType }));
  } else {
    dispatch(logOut());
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  const theme = createTheme({
    typography: {
      button: {
        fontFamily: "Bitter",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <NavigationController />
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}
