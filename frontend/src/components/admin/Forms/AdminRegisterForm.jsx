import React, { useContext, useState } from 'react';
import RestaurantRegisterForm from './RestaurantRegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../../../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const AdminRegisterForm = ({ setLoginForm }) => {
  const { adminLogin } = useContext(AdminContext);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation=useNavigate();
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
        `${import.meta.env.VITE_BACKEND_URL}/admin/register`,
        {
          name: adminData.name.trim(),
          email: adminData.email.trim(),
          password: adminData.password,
        }
      );

      const { success, message, adminId, restaurantId: _id, name, token } = res.data;
      if (success) {
        adminLogin({ name, _id:adminId, restaurantId}, token);
        toast.success('Sign up successful!');
        setSubmitted(true); // Go to restaurant form
        navigation("/admin-dashboard")
      } else {
        toast.error(message || 'Sign up failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <RestaurantRegisterForm adminEmail={adminData.email} />;
  }

  const { name, email, password, confirmPassword } = adminData;

  return (
    <div
      className="bg-white text-dark shadow rounded p-4 w-100"
      style={{ maxWidth: '450px' }}
    >
      <h4 className="mb-3 fw-semibold">Get Started</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control mb-3"
          placeholder="Name"
          onChange={handleChange}
          required
        />
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
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p className="mt-2 text-center">
          Already have an account?{' '}
          <span style={{color:"blue", cursor:"pointer"}}
            onClick={() => setLoginForm(true)} >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default AdminRegisterForm;
