import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../Login/Login.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validateForm from "../Login/validation.js";
import { Link, useNavigate } from "react-router-dom";

import imgLogin from "./imgLogin.png";
import { cambioPassword, estaPorCambiarContraseña, postLogin } from "../../redux/actions/index.js";

// import { useEffect } from "react";
// import GoogleLogin from 'react-google-login';
// import {gapi} from 'gapi-script';
import GoogleBtn from "../Google";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [email,setEmail] = useState("")

  const logginAut = useSelector((state)=> state.userIsAuthenticated)

  const olvideContraseña = useSelector((state)=> state.olvidoContraseña)

  console.log("EN UN PRIMER MOMENTO OLVIDE MI CONTRASEÑA ES:", olvideContraseña)

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

  console.log("este es login", logginAut)

  function alHome(){
    return navigate("/home")
  }

  function olvidoLaContraseña(){
    dispatch(cambioPassword(true))
  }

  function handleInput(e){
    e.preventDefault();
    setEmail(e.target.value)
  }

  function handleClick(){
    dispatch(estaPorCambiarContraseña(email))
    navigate('/home')
  }

  console.log(email)

  console.log("EN UN SEGUNDO MOMENTO OLVIDE MI CONTRASEÑA ES:", olvideContraseña)


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
    {logginAut === true? alHome() :
    (
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
          <div>
            <button onClick={()=> olvidoLaContraseña()} >Olvide mi contraseña</button>
            {olvideContraseña === true ?(
              <>
              <label>Ingrese mail de confirmacion:</label>
              <input
                type='text'
                onChange={(e)=>handleInput(e)}
              />
              <input
                type='submit'
                onClick={()=>handleClick()}
              />
              </>
              ): null
            }
          </div>

          <div className={styles.register}>
            <p className={styles.loginText}>Not a member yet? {"  "}</p>
            <Link className="login-link" to="/formRegister">
              <p className="login-text">{"  "} Register! </p>
            </Link>
          </div>
          <br />
          <div className={styles.section}>
            <h4> Or sign in with</h4>
            <br />
            <GoogleBtn />
          </div>

          <div className={styles.section}></div>
        </div>
      </div>

      <Footer />
    </div>)}
    </div>
  );
}
