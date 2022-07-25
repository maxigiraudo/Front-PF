import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MdVerified } from "react-icons/md";
import style from './Collections.module.css'
import {useNFTTokenIds} from  "../../hooks/useNFTTokenIds"
import { getNameNft } from '../../redux/actions';

export default function Collections({image,name}){

    const { NFTTokenIds,fetchSuccess} = useNFTTokenIds("0x61097cc82C503Ff2d95ce11eDD93e0f0CAB30c59")

    const dispatch = useDispatch()

    function buscarNftColeccion(e){
        dispatch(getNameNft(e))
    }


    console.log("ESTA ES LA COLECCION ",NFTTokenIds)
    console.log(fetchSuccess)

    return(
        <div className={style.carousel} >
                <div className={style.tres}>
                {image?(
                    <div className={style.container23}>
                        <div className={style.divIm}>
                             <img
                                className={style.imageC}
                                src={image}
                                alt="*"
                                value="art"
                                onClick={()=>buscarNftColeccion(name)}
                                    />
                        </div>
                        <div className={style.divH}></div>
                                <h1 className={style.nameC}>{name}</h1>
                                <p className={style.veri}>{MdVerified()}</p>
                        </div>
                        ): null}
                    </div>
                </div>          
    )
}