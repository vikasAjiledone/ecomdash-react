// src/App.jsx
import React from "react";
import Sidebar from "./Components/Sidebar";
// import Header from './Components/Header';
import MainContent from "./pages/MainContent/MainContent";
// import Footer from './Components/Footer';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlogin from "./pages/Login/Mainlogin";
import LoginAccess from "./pages/Login/LoginAccess";
import Reporting from "./pages/Reporting/Reporting";
import ReportingApply from "./pages/Reporting/ReportingApply";
import MyAccount from "./pages/Account/MyAccount";
import AddOn from "./pages/Add_ons/AddOn";

const App = () => {
  let pathName = window.location.pathname;

  console.log(pathName === "/login" || pathName === "/access");
  return (
    <div>
      <Router>
        <div className="app">
          {!(pathName === "/login" || pathName === "/access") && <Sidebar />}
          <div className="content">
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<Mainlogin />} />
              <Route path="/access" element={<LoginAccess />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/reportingDetails" element={<ReportingApply />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/addon" element={<AddOn />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
