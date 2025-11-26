import React, { useContext, useState } from 'react';
import RestaurantRegisterForm from './RestaurantRegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../../../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setLoginForm }) => {
  const navigation=useNavigate();
  const { adminLogin } = useContext(AdminContext);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (adminData.password !== adminData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/login-admin`,
        {
          email: adminData.email.trim(),
          password: adminData.password,
        }
      );
      console.log("email:", adminData.email.trim(),
          "password:" ,adminData.password,)
      const { success, message, _id, name, restaurantExists, restaurantId, authToken } = res.data;
      if (success) {
        adminLogin({ name, _id, restaurantId }, authToken);
        toast.success('login successful!');
        if(restaurantExists){
          navigation("/admin-dashboard")
        }
          setSubmitted(true);
      } else {
        toast.error(message || 'login  failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <RestaurantRegisterForm />;
  }

  const {email, password, confirmPassword } = adminData;

  return (
    <div
      className="bg-white text-dark shadow rounded p-4 w-100"
      style={{ maxWidth: '450px' }}
    >
      <h4 className="mb-3 fw-semibold">Log in</h4>
      <form onSubmit={handleSubmit}>
    
        <input
          type="email"
          name="email"
          value={email}
          className="form-control mb-3"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          className="form-control mb-3"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
          disabled={loading}
        >
          {loading ? 'Login...' : 'Login'}
        </button>
        <p className="mt-2 text-center">
          Already have an account?{' '}
         <span style={{color:"blue", cursor:"pointer"}}
            onClick={() => setLoginForm(false)} >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
