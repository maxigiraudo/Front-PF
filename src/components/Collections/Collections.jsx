import React from 'react'
import { useSelector } from 'react-redux'
import { MdVerified } from "react-icons/md";
import style from './Collections.module.css'
import {useNFTTokenIds} from  "../../hooks/useNFTTokenIds"

export default function Collections({image,name,address}){

    const { NFTTokenIds,fetchSuccess} = useNFTTokenIds()

    console.log(NFTTokenIds)
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
                                    />
                        </div>
                        <div className={style.divH}></div>
                                <h1 className={style.nameC}>{name}</h1>
                                <p className={style.veri}>{MdVerified()}</p>
                        </div>): null}
                    </div>
                </div>
           
    )
}