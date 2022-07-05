import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import logo from "./Imagenes/logowallaby.png";
import cubos from "./Imagenes/cubos.png";




export default function LandingPage() {
    return(
        <div className={styles.contenedorLanding}>
            <div className={styles.Landingtop}>
                <div className={styles.Landingcubo}>
                    <img src={cubos} className={styles.cubo} alt="cubos" />
                </div>

                <div className={styles.LandingPage}>
                    <img src= {logo} className= {styles.logoLanding} alt="logo"/>
                    <span className={styles.textLanding}> Welcome to your favorite NFT platform! </span>
                    <div className={styles.botonesLanding}>
                        <Link to = "/home">
                            <button className={styles.botonLanding}>EXPLORE THE MARKETPLACE</button>
                        </Link>
                        <Link to = "/register">
                            <button className={styles.botonLanding}>CREATE</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.Landingcubo}>
                    <img src={cubos} className={styles.cubo} alt="cubos" />
                </div>
            </div>
            <div className={styles.Landingbottom}>
                <h2 className={styles.Title}> What is WALLAby? </h2>
                <p className={styles.parrafoLanding}> The platform not only allows you to buy or sell NTF, you can also create and obtain your own token through a guided process for those who are not specialists in the field.</p>
            </div>
           
        </div>
    )
};

