import styles from "./About.module.css";
import Navbar from "../Navbar/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.padre}>
        <div className={styles.container}>
          <h2>Web Developers</h2>
          <br />
          <div className={styles.card}>
            <div>
              <img src="imagen" alt="img" />
            </div>
            <div>
              <h3>Maximiliano Giraudo</h3>
              <p>Team Frontend</p>
            </div>
            <div>
              <img src="linkedin" alt="linkedin" />
              <img src="github" alt="github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
