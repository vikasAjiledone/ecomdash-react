// src/App.jsx
import React from 'react';
import Sidebar from './Components/Sidebar';
// import Header from './Components/Header';
import MainContent from './pages/MainContent/MainContent';
// import Footer from './Components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlogin from './pages/Login/Mainlogin';
import LoginAccess from './pages/Login/LoginAccess';
import Setting from './pages/Settings/Setting';
import Products from './pages/Products/Products';

const App = () => {
  let pathName = window.location.pathname

  console.log((pathName === '/login' || pathName === '/access'))
  return (
    <div >
      <Router>
        <div className="app">
          {!(pathName === '/login' || pathName === '/access') && <Sidebar />}
          <div className="content">
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<Mainlogin />} />
              <Route path="/access" element={<LoginAccess />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
