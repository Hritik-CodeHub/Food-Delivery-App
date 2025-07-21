import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";

import SignupPage from "./components/SignUp/SignupPage";
import Carousel1 from "./components/Carousel/Carousel1";

import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/carousel1" element={<Carousel1 />} />



        </Routes>
      </Router>
    </>
  );

};

export default App;
