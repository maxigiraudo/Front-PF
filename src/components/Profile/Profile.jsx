import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getProfileGoogle } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Profile() {
  //console.log(props)
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.userData.email);
  // const emailGoogle = useSelector((state)=> state.useGoogle)

  var paraContraseña = "";

  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));
  console.log("ESTE ES EL USEE GOOGLE", userrrGoogle);
  console.log("ESTE ES EL USER COMUN", userrr);

  useEffect(() => {
    dispatch(getProfile(userrr));
  }, []);

  useEffect(() => {
    dispatch(getProfileGoogle(userrrGoogle));
  }, []);

  const profile = useSelector((state) => state.profile);
  const profileGoogle = useSelector((state) => state.profileGoogle);
  console.log(profile);
  console.log(profileGoogle);

  // const profiles = useSelector((state) => state.profile);
  //console.log(profile)

  // console.log(profiles);
  const back = () => {
    window.history.back();
  };

  // function cambioC() {
  //   paraContraseña = token;
  // }
  console.log("EN UN PRIMER MOMENTO", paraContraseña);
  console.log("EN UN SEGUNDO MOMENTO", paraContraseña);

  console.log("ESTO HAY EN PROFILE", profileGoogle);

  return (
    <div className={styles.containerPadre}>
      <Navbar />

      <button onClick={back} className={styles.botonR}>
        Go Back
      </button>

      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>Hi .</h1>

          <div className={styles.two}>
            <div className={styles.nameEnviar}>
              {profile.length > 0 ? (
                <div>
                  <h1 className={styles.name}>
                    {" "}
                    User name: {profile[0].nombre}{" "}
                  </h1>
                  <br />
                  <h1 className={styles.name}> Email: {profile[0].email}</h1>
                  <br />
                </div>
              ) : (
                <div>
                  <h1 className={styles.name}> User from Google </h1>
                  <br />
                  <h1 className={styles.name}> Email: {profileGoogle.email}</h1>
                  <br />
                </div>
              )}
              {/* <button onClick={() => cambioC()}>Modifica tu contraseña</button> */}
              <Link to="/favorite">
                <button className={styles.inputEnviar}>
                  Go to my favorite NFTs!
                </button>
              </Link>

              <Link to="/cart">
                <button className={styles.inputEnviar}>Go to my cart!</button>
              </Link>
              <Link to="/mycollections">
                <button className={styles.inputEnviar}>
                  Go to my collection!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
