import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { BsFillStarFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import Footer from '../Footer/Footer';
import { useSelector,useDispatch} from 'react-redux';
import { removeFavorite } from '../../redux/actions';
import styles from "./Favorite.module.css"

export default function Favorite(props){
    const favorites = useSelector((state)=>state.favorite)

    const dispatch= useDispatch()
  
    function handleClick(e){
        dispatch(removeFavorite(e))
    }
return(
    <div >
        <Navbar/>
        <div className={styles.general}>
        <Link to="/home">
                <button className={styles.botonR} >Go Back</button>
        </Link>
        <div>
            <h1 className={styles.titulo}>{BsFillStarFill()}Your favorite NFT collection</h1>
        </div>
        {favorites.length === 0 ? 
          <div className={styles.box}>
            <p className={styles.noFav}> You dont have any favorites NFT yet </p>
          </div>
        :
          <div className={styles.box}>
          <div className={styles.nftA}>
            <h2 className={styles.imgA}>Image</h2>
            <h2 className={styles.nameA}>Name</h2>
            <h2 className={styles.botonA}>Delete</h2>
          </div>
          {favorites?.map((e)=>{
            return(
                <div>
                <div  className={styles.nft}>
                  <img className={styles.img} src={e.image} alt="image"/>
                  <div className={styles.name}>{e.name}</div>
                  <button
                    className={styles.boton}
                    onClick={() => handleClick(e)}
                  >
                    {IoMdCloseCircle()}
                  </button>
                </div>
              </div>
            )
          })}
          </div>
        }

        </div>
          <Footer />
    </div>

)
}
