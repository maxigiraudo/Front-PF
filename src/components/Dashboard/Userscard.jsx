import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { usersDashboard } from "../../redux/actions";


//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}


export default function Usercard ({name, email}) {

    const users = useSelector((state) => state.usersDashboard);
    const user = useSelector((state) => state.userDashboard);

    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(usersDashboard());
    //     // return() => {
    //     //     usersDashboard()
    //     // }
    //   });



    return(
        <div>
            
            <h1 className={styles.container}> Name: {name} </h1> 
            <h1 className={styles.container}> Email: {email} </h1>
            <br></br> 
        </div>
       
    )

}