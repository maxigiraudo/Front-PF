import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getProfileGoogle, newPassword, recoverPassword, updatePassword } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Profile() {
  //console.log(props)
  const dispatch = useDispatch();
  const recover = useSelector((state)=> state.recoverPassword)
  const token = useSelector((state) => state.userData.email);
  const emailGoogle = useSelector((state)=> state.useGoogle)
  console.log(emailGoogle)

  const emailData= useSelector((state)=> state.userData.email)
  const password= useSelector((state)=> state.passwordUpdate)

  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getProfileGoogle(emailGoogle));    
  }, [dispatch, emailGoogle]);

  const profile = useSelector((state) => state.profile);
  const profileGoogle = useSelector((state) => state.profileGoogle);
  console.log(profile);
  console.log(profileGoogle);

  const [newPass, setNewPass]= useState("")

  // const profiles = useSelector((state) => state.profile);
  //console.log(profile)

  // console.log(profiles);
  const back = () => {
    window.history.back();
  };

  function cambioC(){
    dispatch(recoverPassword())
  }

  function handleInput(e){
    e.preventDefault();
    setNewPass(e.target.value)
  }

  function handleClick(){
    dispatch((updatePassword({password:newPass,
    email:emailData})))
  }

  console.log(newPass)

  console.log("ESTO HAY EN PROFILE",profileGoogle)

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
            {profile !== null?
              <div>
                <h1 className={styles.name}> User name: {profile.nombre} </h1>
                <br />
                <h1 className={styles.name}> Email: {profile.email}</h1>
                <br />
              </div>
                      :

                (<div>
                <h1 className={styles.name}> User from Google </h1>
                <br />
                <h1 className={styles.name}> Email: {profileGoogle.email}</h1>
                <br />
              </div>) }
              <button onClick={()=> cambioC()} >Modifica tu contraseña</button>
              {recover === true && 
            <div>

              <input  
                type='password'
                onChange={(e)=>handleInput(e)}
              />
              <input
                type='submit'
                onClick={()=>handleClick()}
              />
            </div>

              }
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
