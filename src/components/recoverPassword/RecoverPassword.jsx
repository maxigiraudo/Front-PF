import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { estaSeraLaContraseña } from '../../redux/actions'

export default function RecoverPassword(){

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [passwordConfir,setPasswordConfir] = useState("")
    const dispatch = useDispatch()

    function handleInputPassword(e){
        e.preventDefault();
        setPassword(e.target.value)
    }
    function handleInputEmail(e){
        e.preventDefault();
        setEmail(e.target.value)
    }

    function handleInputConfirmar(e){
        e.preventDefault()
        setPasswordConfir(e.target.value)
    }

    console.log("ESTE ES EL EMAIL", email)
    console.log("ESTA ES LA NUEVA CONTRASEÑA", password)
    console.log("ESTA ES LA CONFIRMACION DE LA CONTRASEÑA", passwordConfir)

    function handleClick(){
        dispatch(estaSeraLaContraseña({email : email,password:password, passwordConfir:passwordConfir}))
    }

    return(
        <div>
            <Navbar/>
            <label>Ingrese su email:</label>
            <input
                type='text'
                onChange={(e)=> handleInputEmail(e)}
            />
            <label>Ingrese su nueva contraseña:</label>
            <input
                type='password'
                onChange={(e)=> handleInputPassword(e)}
            />
            <label>Confirme su contraseña:</label>
            <input
                type='password'
                onChange={(e)=> handleInputConfirmar(e)}
            />
            <input
                type='submit'
                onClick={()=> handleClick()}
            />
            <Footer/>
        </div>
    )
}