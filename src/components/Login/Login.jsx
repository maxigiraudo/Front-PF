import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../Login/Login.module.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import validateForm from '../Login/validation.js';
import { Link } from "react-router-dom";
import imgLogin from "./imgLogin.png"
import {postLogin} from "../../redux/actions/index.js";

export default function Login() {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [formErrors, setFormErrors] = useState({ 
        error: "" ,
        email: "",
        password: "",
    })


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleInputOnBlur = (e) => {
        setFormErrors({
            ...formErrors,
            [e.target.name]: validateForm(formData)[e.target.name],
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(postLogin(formData))
        setFormData({
            email: "",
            password: ""
        })
        document.getElementById("form").reset()
    }

    return(
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
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleInputOnBlur}
                        />
                        {formErrors.email && <p className={styles.formErrors}>{formErrors.email}</p>}
                        <input
                            className={styles.loginInput}
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleInputChange}
                            onBlur={handleInputOnBlur}
                        />
                        {formErrors.password && <p className={styles.formErrors}>{formErrors.password}</p>}
                        <button className={styles.button} onClick={(e) => handleLogin(e)}> LOGIN </button>
                    </div>

                    <div className={styles.section}>
                        <h4> Or sign in with</h4>
                        <img src={imgLogin} className={styles.imgLogin} alt="imagen login" width="60" />
                    </div>

                    <div className={styles.register}>
                        <p className="login-text">Not a member yet? </p>
                        <Link className="login-link" to='/formRegister'>
                            <p className='login-text'> Register! </p>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

