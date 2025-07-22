import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2>Create an Account</h2>
          <p>Sign up to start ordering your favorite meals</p>
          <form className="signup-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>

          <p className="signup-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;