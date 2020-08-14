import React, { useState } from "react";
import { signup } from "./helper/auth";
import { Link } from "react-router-dom";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        console.log(data);
        if (data.email == email) {
          setValues({
            ...values,
            name: "",
            password: "",
            error: "",
            success: true,
          });
          console.log("signup success");
        } else {
          setValues({
            ...values,
            error: data.email,
            success: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-4 offset-sm-4 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully Please
            <Link to="/signin"> login now</Link>
          </div>
        </div>
      </div>
    );
  };
  const failureMessage = () => {
    return (
      <div className="row">
        <div className="col-md-4 offset-sm-4 text-left">
          <div
            className="alert alert-warning"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-center mt-4">Signup here</h1>
      {failureMessage()}
      {successMessage()}
      <div className="row">
        <div className="col-md-4 offset-sm-4 text-left">
          <form>
            <div className="form-group">
              <label htmlFor="" className="text-dark">
                Name
              </label>
              <input
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-dark">
                Email
              </label>
              <input
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-dark">
                Password
              </label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn-danger btn-block">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
