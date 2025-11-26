import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {UserContext} from "../../context/UserContext";

const SignUp = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confPassword } = signupData;
    
      console.log(signupData)
    if (!name || !email || !password || !confPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
        name:signupData.name,
        email,
        password,
      });

      const { success, message, _id, name , token  } = res.data;
      if (success) {
        login({name, _id}, token);
        toast.success("Sign up successful!");
        navigate("/");
      } else {
        toast.error(message || "Sign up failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message ||"Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <p>Sign up to start ordering your favorite meals</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required name="name" onChange={handleChange} />
          <input type="email" placeholder="Email Address" required name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" required name="password" onChange={handleChange} />
          <input type="password" placeholder="Confirm Password" required name="confPassword" onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
