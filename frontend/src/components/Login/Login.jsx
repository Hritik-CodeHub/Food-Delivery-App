import React, { useState , useContext} from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../context/UserContext";


const Login = () => {
  const { login } = useContext(UserContext);
  const navigation=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        email,
        password,
      });

      const { success, message, _id, name ,token } = res.data;
      if (success) {
        login({name,_id},token);
        toast.success("Login successful:");
        navigation("/");
      } else {
        toast.error(message);
        console.error("Login failed:", message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "internal server error");
      console.log(error);
    }
    
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Login to continue ordering your favorite meals</p>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
          <p className="login-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;