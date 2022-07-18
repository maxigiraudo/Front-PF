
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile,getProfileGoogle } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


export default function Profile(){
    //console.log(props)
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.userData.email)
    const emailGoogle= useSelector((state)=> state.userInfo)
    console.log(emailGoogle)

    useEffect(()=>{
        dispatch(getProfile(token));
    },[dispatch,token])
    useEffect(()=>{
      dispatch(getProfileGoogle(emailGoogle))
    })


    const profile = useSelector((state)=>state.profile)
    const profileGoogle = useSelector((state)=> state.profileGoogle)
    console.log(profile)


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

          <h1 className={styles.colorh1}>Hi .</h1>

            <div className={styles.two}>
              <div className={styles.nameEnviar}>
            {profile ? 
                <div>
                <h1 className={styles.name} > User name: {profile.nombre} </h1>
                <br/>
                <h1 className={styles.name} > Email: {profile.email}</h1>
                <br/>
                </div> :null
            }
            {profileGoogle?
              <div>
                <h1 className={styles.name} > User name: {profileGoogle.nombre} </h1>
                <br/>
                <h1 className={styles.name} > Email: {profileGoogle.email}</h1>
                <br/>
                </div> :null
            }
                <Link to="/favorite">
                <button className={styles.inputEnviar}>Go to my favorite NFTs!</button>
                </Link>

                <Link to="/cart">
                <button className={styles.inputEnviar}>Go to my cart!</button>
                </Link>
                <Link to="/mycollections" >
                <button className={styles.inputEnviar}>Go to my collection!</button>
                </Link>          
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
