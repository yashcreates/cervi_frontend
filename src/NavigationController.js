import React, { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ScrollToTop from "./helperComponents/ScrollToTop";
import ProtectedRoute from "./helperComponents/ProtectedRoute";
import UnprotectedRoute from "./helperComponents/UnprotectedRoute";

import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import BottomNav from "./components/BottomNav/BottomNav";
import UserIdentifierBar from "./components/UserIdentifierBar/UserIdentifierBar";

import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import TestSteps from "./pages/TestSteps/TestSteps";
import Reports from "./pages/Reports/Reports";
import ShowReport from "./pages/ShowReport/ShowReport";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Welcome from "./pages/LandingPage/landingPage";
import learnMore from "./pages/LearnMore/LearnMore";
import readMore from "./pages/ReadMore/ReadMore";

import UserSelect from "./pages/UserSelect/UserSelect";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DoctorRequests from "./pages/DoctorRequests/DoctorRequests";
import Footer from "./components/Footer.js";

export default function NavigationController() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const userType = useSelector((state) => state.auth.userType);

  return (
    <div>
      <ScrollToTop>
        <Switch>
          <UnprotectedRoute path="/" exact component={Welcome} />
          <UnprotectedRoute path="/readMore" exact component={readMore} />
          <UnprotectedRoute path="/learnMore" exact component={learnMore} />
          <UnprotectedRoute path="/welcome" exact component={Welcome} />
          <UnprotectedRoute path="/userSelect" exact component={UserSelect} />
          <UnprotectedRoute path="/login" exact component={Login} />
          <UnprotectedRoute path="/register" exact component={Register} />
        </Switch>

        {isAuth ? (
          <div>
            {/* <UserIdentifierBar userType={userType} /> */}
            {/* <SideBar /> */}
            <NavBar />
            {/* <BottomNav /> */}
          </div>
        ) : null}

        <div className="contentsWrapper">
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/testSteps" exact component={TestSteps} />
            <ProtectedRoute path="/test" exact component={Test} />
            <ProtectedRoute path="/reports" exact component={Reports} />
            <ProtectedRoute path="/showReport" exact component={ShowReport} />
            <ProtectedRoute
              path="/doctor-requests"
              exact
              component={DoctorRequests}
            />
            <ProtectedRoute path="/profile" exact component={Profile} />
            <ProtectedRoute path="/profile" exact component={Profile} />
            <ProtectedRoute path="/about" exact component={About} />
          </Switch>
        </div>
      </ScrollToTop>
      <Footer></Footer>
    </div>
  );
}
