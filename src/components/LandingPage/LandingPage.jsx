import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";




export default function LandingPage() {
    return(
        <div className={styles.contenedorLanding}>
            <div className={styles.LandingPage}>
                <p className="titulo-landingP">Wallaby</p>
                <Link to = "/Home">
                    <button className="botonLanding">Explore</button>
                </Link>
            </div>
        </div>
    )
};