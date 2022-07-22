import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer";
import { MdSupervisedUserCircle, MdWork, MdInsertChart } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom'



//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}


export default function Dashboard () {




    return (

       
       
        <div className={styles.adminContainer}>
             <Navbar/>
            
            <div>
                <div className={styles.arriba}>
                    <RiAdminFill className={styles.iconAdmin} />
                    <h2 className='title-admin-home'>ADMINISTRATOR</h2>
                </div>

                <div className={styles.featuresCont}>
                    <div className={styles.Box1}>
                        <MdSupervisedUserCircle className={styles.iconAdmin1} />
                        <Link className={styles.title} to='/Dashboard/Listusers'>
                            <h5 className={styles.titleAdmin}>list of users</h5>
                        </Link>
                    </div>

                    <div className={styles.featuresBox}>
                        <MdWork className={styles.iconAdmin2} />
                        <Link className='link-home-admin' to='/Dashboard/listNFT'  >
                            <h5 className='title-feature-admin'>NFT list created</h5>
                        </Link>
                    </div>
                   
                    <div className={styles.Box2}>
                        <MdInsertChart className={styles.iconAdmin3} />
                        <Link className='link-home-admin' to="/Dashboard/stats">
                            <h5 className='title-feature-admin'>Statistics</h5>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}


