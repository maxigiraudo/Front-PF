//----------------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProfile } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Profile() {
  //console.log(props)
  const dispatch = useDispatch();
  const { name, username, lastname, aboutyou } = useParams();

  useEffect(() => {
    dispatch(getProfile(name, username, lastname, aboutyou));
  }, [name, username, lastname, aboutyou, dispatch]);

  const profiles = useSelector((state) => state.profile);
  //console.log(profile)

  console.log(profiles);
  return (
    <div className={styles.containerPadre}>
      <Navbar />
      <Link to="/home">
        <button className={styles.botonR}>Go Back</button>
      </Link>

      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>Hi {profiles.username}.</h1>

          <div className={styles.two}>
            <div className={styles.nameEnviar}>
              <p> My name is {profiles.name}</p>

              <br />

              <p> My lastname is {profiles.lastname}</p>

              <br />

              <p> My username is {profiles.username}</p>

              <br />
              <p> Anout me {profiles.aboutyou}</p>

              <br />

              <Link to="/FormEditProfile">
                <button className={styles.inputEnviar}>Edit my data!</button>
              </Link>

              <Link to="/favorite">
                <button className={styles.inputEnviar}>
                  Go to my favorite NFTs!
                </button>
              </Link>

              <Link to="/cart">
                <button className={styles.inputEnviar}>Go to my cart!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
