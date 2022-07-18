
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


    useEffect(()=>{
        dispatch(getProfile(token));
    },[dispatch,token])
    

    const profile = useSelector((state)=>state.profile)
    const profileGoogle = useSelector((state)=> state.profileGoogle)
    console.log(profile)
    console.log(profileGoogle)


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
                <div>
                <h1 className={styles.name} > User name: {profile.nombre} </h1>
                <br/>
                <h1 className={styles.name} > Email: {profile.email}</h1>
                <br/>
                </div> 
        
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
