import React, { useState } from "react";
import "./AdminRegistration.css";
import AdminRegisterForm from "../../components/admin/Forms/AdminRegisterForm";
import LoginForm from "../../components/admin/Forms/LoginForm"
const AdminRegistration = () => {
  const [loginForm, setLoginForm] = useState(false);
  return (
    <div className="container-fluid p-0">
      {/* Top Section */}
      <div className="position-relative bg-dark text-white py-5">
        <div className="row g-0">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="p-5">
              <h4 className="text-warning  fw-bold">
                Partner with Order.india!
              </h4>
              <h1 className="display-4 fw-bold mt-3">
                Reach customers far <br /> away from you
              </h1>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            {loginForm ? <LoginForm setLoginForm={setLoginForm} /> : <AdminRegisterForm setLoginForm={setLoginForm} />}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Steps + Documents */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div>
              <h2 className="fw-bold mb-4">
                In just 3 easy steps <br />
                <span className="text-warning">Get your restaurant delivery-ready in 24hrs!</span>
              </h2>
              <ul className="list-unstyled">

                <li className="d-flex align-items-center mb-3">
                  <span className="badge bg-primary rounded-pill me-3 px-3 py-2">
                    1
                  </span>
                  <span className="fs-5">Login/Register as admin using emial id</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span className="badge bg-primary rounded-pill me-3 px-3 py-2">
                    2
                  </span>
                  <span className="fs-5">Register your restaurant using your registered admin emial id</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <span className="badge bg-primary rounded-pill me-3 px-3 py-2">
                    3
                  </span>
                  <span className="fs-5">Enter restaurant details and submit</span>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light border rounded">
              <h5 className="fw-semibold mb-3">
                For an easy form filling process, <br />
                you can keep these documents handy.
              </h5>
              <ul className="list-unstyled">

                <li className="mb-2 text-danger fw-semibold">
                  Your Restaurant menu
                </li>
                <li className="mb-2 text-danger fw-semibold">
                  Bank details
                </li>
                <li className="mb-2 text-danger fw-semibold">
                  GSTIN
                </li>
                <li className="mb-2 text-danger fw-semibold">
                  PAN card copy
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
