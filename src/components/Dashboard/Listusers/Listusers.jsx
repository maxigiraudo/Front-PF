import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { usersDashboard } from "../../../redux/actions/index";
import Usercard from "../Userscard.jsx";
import NavBar from "../../Navbar/Navbar.jsx"
import Footer from "../../Footer/Footer.jsx"
import styles from "../Listusers/Listusers.module.css"


//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}


export default function Listusers () {

    const users = useSelector((state) => state.usersDashboard);
    const user = useSelector((state) => state.userDashboard);


    const dispatch = useDispatch();
    
     useEffect(() => {
     dispatch(usersDashboard());
    }, [dispatch]);


    return(
        <div>
            <NavBar/>
            <div className={styles.container}>
            {users.map((e, index) => (
                <Usercard
                name={e.nombre}
                email={e.email}
                />
            ))} 
            </div>
            <Footer/>
        </div>
       
    )

}