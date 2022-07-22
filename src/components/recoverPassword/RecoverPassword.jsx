import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { estaSeraLaContraseña } from "../../redux/actions";
import styles from "./RecoverPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RecoverPassword() {
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [passwordConfir, setPasswordConfir] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    passwordConfir: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({
    error: "You must enter an mail",
  });

  const { passwordConfir, email, password } = user;

  function validationForm(value) {
    let errors = {};
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
      errors.email = "*You must enter an email";
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        value.password
      )
    ) {
      errors.password =
        "*It should have 8 characters, 1 capital letter, and a number";
    }
    if (value.passwordConfir !== value.password) {
      errors.passwordConfir = "*The passwords do not match";
    }
    return errors;
  }

  const onChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });
    setError(
      validationForm({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  console.log("ESTE ES EL EMAIL", email);
  console.log("ESTA ES LA NUEVA CONTRASEÑA", password);
  console.log("ESTA ES LA CONFIRMACION DE LA CONTRASEÑA", passwordConfir);

  function handleClick() {
    dispatch(
      estaSeraLaContraseña({
        email: email,
        password: password,
        passwordConfir: passwordConfir,
      })
    );
    navigate("/home");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Password changed",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      <Navbar />
      <Link to="/home">
        <button className={styles.botonR}>Go Home</button>
      </Link>
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.title}>CHANGE YOUR PASSWORD.</h1>
          <input
            className={styles.input}
            name="email"
            value={email}
            placeholder="Enter your email"
            type="text"
            onChange={(e) => onChange(e)}
          />
          {error.email ? <p style={{ color: "red" }}> {error.email} </p> : null}

          <input
            className={styles.input}
            name="password"
            value={password}
            placeholder="Enter your new password"
            type="password"
            onChange={(e) => onChange(e)}
          />
          {error.password ? (
            <p style={{ color: "red" }}> {error.password} </p>
          ) : null}

          <input
            className={styles.input}
            name="passwordConfir"
            value={passwordConfir}
            placeholder="Confirm your password"
            type="password"
            onChange={(e) => onChange(e)}
          />
          {error.passwordConfir ? (
            <p style={{ color: "red" }}> {error.passwordConfir} </p>
          ) : null}
          <input
            disabled={Object.keys(error).length === 0 ? false : true}
            className={styles.button}
            value="Change"
            type="submit"
            onClick={() => handleClick()}
          />
          {Object.keys(error).length === 0 ? null : (
            <p style={{ color: "red", textAlign: "center" }}>
              To change the password you must not have errors.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
