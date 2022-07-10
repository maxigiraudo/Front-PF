import styles from "./About.module.css";
import Navbar from "../Navbar/Navbar";
import maxi from "./imagenes/maxiPerfil.jpg";
import matiball from "./imagenes/matiballPerfil.jpg";
import matisch from "./imagenes/matischPerfil.jpg";
import sol from "./imagenes/solPerfil.jpg";
import linkedin from "./imagenes/linkedin.png";
import github from "./imagenes/github.png";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.padre}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>Web Developers</h1>
          </div>
          <div className={styles.dosColumnas}>
            <div className={styles.columnaUno}>
              <div className={styles.card}>
                <div>
                  <img className={styles.imagen} src={matiball} alt="img" />
                </div>
                <div className={styles.letras}>
                  <h3>Matías Ballestá</h3>
                  <p>Team Backend</p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/matias-ballest%C3%A1-207b9915a/">
                    <img
                      className={styles.imagenLogo}
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://github.com/maxigiraudo">
                    <img
                      className={styles.imagenLogog}
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img className={styles.imagen} src={matisch} alt="img" />
                </div>
                <div className={styles.letras}>
                  <h3>Matías Schmidt</h3>
                  <p>Team Frontend</p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/matias-schmidt-48486723a/">
                    <img
                      className={styles.imagenLogo}
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://github.com/mschmidt17">
                    <img
                      className={styles.imagenLogog}
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.card}>
                <div>
                  <img className={styles.imagen} src={sol} alt="img" />
                </div>
                <div className={styles.letras}>
                  <h3>Sol Olmos</h3>
                  <p>Team Frontend</p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/sol-olmos-15b166b8/">
                    <img
                      className={styles.imagenLogo}
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://github.com/sololmos">
                    <img
                      className={styles.imagenLogog}
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <img className={styles.imagen} src={maxi} alt="img" />
                </div>
                <div className={styles.letras}>
                  <h3>Maximiliano Giraudo</h3>
                  <p>Team Frontend</p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/maximiliano-giraudo-2a1933119/">
                    <img
                      className={styles.imagenLogo}
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://github.com/maxigiraudo">
                    <img
                      className={styles.imagenLogog}
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
