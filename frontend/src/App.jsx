import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import SignupPage from "./components/SignUp/SignupPage";
import Carousel1 from "./components/Carousel/Carousel1";
import MenuList from "./components/MenuList/MenuList";

import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/carousel1" element={<Carousel1 />} />

          <Route path="/menu" element={<MenuList />} />



        </Routes>
      </Router>
    </>
  );

};

export default App;
