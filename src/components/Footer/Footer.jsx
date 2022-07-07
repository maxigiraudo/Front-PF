import React from 'react';
import style from "./Footer.module.css"
import logo from "./logowallaby.png"

export default function Footer () {

  return (
    <section className={style.footer}>
      <hr className={style.footerseperator} />
      <section className={style.footersocialmedia}>
        <img className={style.logo} src={logo} alt='logo' ></img>
      </section>
      <section className={style.footerinfo}>
        <section className={style.footerinfoleft}>
          <section className={style.footerinfo__name}>
            <a href='/' >Welcome</a>
          </section> 
          <section className={style.footerinfo__name}>
            <a href='/home'>Home</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href='/form'>Create NFT</a>
          </section>        
        </section>
        <section className={style.footerinfoleft}>
          <section className={style.footerinfo__name}>
            <a href='/singup' >Sing Up</a>
          </section> 
          <section className={style.footerinfo__name}>
            <a href='/login'>Login</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href='/wallet'>Connect Wallet</a>
          </section>        
        </section>
        <section className={style.footerinfocenter}>
          <h1 className={style.u}>WEB DEVELOPERS:</h1>
          <ul className={style.hola}>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Jonathan Caliva</a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Sol Olmos</a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Matias Schmidt</a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Maximilioano Giraudo</a></li>
          </ul>
          <ul className={style.chau}>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Cristian Lair</a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Matias Ballesta</a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Florencia Aguirre </a></li>
            <li><a className={style.enlace} href='https://www.linkedin.com/in/jonathan-andres-caliva-891328172/'>Ivan Koch</a></li>
          </ul>
        </section>
      </section>
      <hr className={style.footerseperator} />
    </section>
  )

}

