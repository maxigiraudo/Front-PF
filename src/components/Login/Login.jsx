import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../Login/Login.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validateForm from "../Login/validation.js";
import { Link } from "react-router-dom";

import imgLogin from "./imgLogin.png";
import { postLogin } from "../../redux/actions/index.js";

// import { useEffect } from "react";
// import GoogleLogin from 'react-google-login';
// import {gapi} from 'gapi-script';
import GoogleBtn from "../Google";

export default function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    error: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputOnBlur = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: validateForm(formData)[e.target.name],
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(formData));
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  // const responseGoogle = (response) => {
  //     dispatch(postLoginGoogle(response))
  //   }

  //   useEffect(()=> {
  //     function start() {
  //         gapi.client.init({
  //             clientId: clientId,
  //             scope: ""
  //         })
  //     }
  //     gapi.load('client:auth2', start);
  //   })

  return (
    <div>
      <Navbar />
      <Link to="/home">
        <button className={styles.botonR}>Go Back</button>
      </Link>
      <div className={styles.containerLogin}>
        <div className={styles.login}>
          <h1 className={styles.title}> WELCOME! </h1>
          <div className={styles.input} id="form">
            <input
              className={styles.loginInput}
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputOnBlur}
            />
            {formErrors.email && (
              <p className={styles.formErrors}>{formErrors.email}</p>
            )}
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleInputOnBlur}
            />
            {formErrors.password && (
              <p className={styles.formErrors}>{formErrors.password}</p>
            )}
            <button className={styles.button} onClick={(e) => handleLogin(e)}>
              {" "}
              LOGIN{" "}
            </button>
          </div>

          <div className={styles.section}>
            <h4> Or sign in with</h4>
            <br />
            <GoogleBtn />
          </div>

          <div className={styles.section}>
            <br />
            {/* <GoogleLogin
              clientId="316483334585-mtc1sb8li7atn1ktu80si56gqf5bupc0.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
          </div>

          <div className={styles.register}>
            <p className="login-text">Not a member yet? </p>
            <Link className="login-link" to="/formRegister">
              <p className="login-text"> Register! </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
