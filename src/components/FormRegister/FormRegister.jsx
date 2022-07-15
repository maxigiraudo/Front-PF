import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAcount } from "../../redux/actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./FormRegister.module.css";
import { Link } from "react-router-dom";
import logG from "../Login/imgLogin.png";

export default function FormRegister() {
  const [user, setUser] = useState({ nombre: "", email: "", password: "" });
  const [error, setError] = useState({
    error: "You must select a name",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nombre, email, password } = user;
  console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAcount({ nombre, email, password }));
  };

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

  function validationForm(value) {
    let errors = {};
    if (!value.nombre) errors.nombre = "You must select a name";
    else if (value.nombre.length < 4) {
      errors.nombre = "*It must contain at least 4 characters";
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        value.password
      )
    ) {
      errors.password =
        "*It should have 8 characters, 1 capital letter, and a number";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
      errors.email = "*You must enter an email";
    }
    console.log(value);
    return errors;
  }

  return (
    <div className={styles.containerPadre}>
      <Navbar />
      <Link to="/home">
        <button className={styles.botonR}>Go Back</button>
      </Link>
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>CREATE YOUR ACOUNT.</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.two}>
              <div className={styles.nameEnviar}>
                {/* <label className={styles.label}>Name</label> */}
                <p htmlFor="name"> </p>
                <input
                  name="nombre"
                  id="nombre"
                  type="text"
                  className={styles.input}
                  placeholder="Write your name... "
                  value={user.nombre}
                  onChange={(e) => onChange(e)}
                />
                {error.nombre ? (
                  <p style={{ color: "red" }}> {error.nombre} </p>
                ) : null}

                {/* <label className={styles.label}>Email</label> */}
                <p htmlFor="Email"> </p>
                <input
                  name="email"
                  id="email"
                  type="text"
                  className={styles.input}
                  placeholder="Write a valid email address... "
                  value={user.email}
                  onChange={(e) => onChange(e)}
                />
                {error.email ? (
                  <p style={{ color: "red" }}> {error.email} </p>
                ) : null}

                {/* <label className={styles.label}>Password</label> */}
                <p htmlFor="Password"> </p>
                <input
                  name="password"
                  id="password"
                  type="text"
                  className={styles.input}
                  placeholder="Write a valid Password... "
                  value={user.password}
                  onChange={(e) => onChange(e)}
                />
                {error.password ? (
                  <p style={{ color: "red" }}> {error.password} </p>
                ) : null}

                <br />

                <input
                  disabled={Object.keys(error).length === 0 ? false : true}
                  value="CREATE YOUR ACCOUNT"
                  type="submit"
                  className={styles.inputEnviar}
                />

                {Object.keys(error).length === 0 ? null : (
                  <p style={{ color: "red", textAlign: "center" }}>
                    To create your acount you must fill in all the fields
                    without errors.
                  </p>
                )}
                <br />
                <div className={styles.divGoogle}>
                  <p>Or Login whith </p>
                  <img className={styles.google} src={logG} alt="google" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
