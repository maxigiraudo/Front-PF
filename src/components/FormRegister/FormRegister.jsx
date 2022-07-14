import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./FormRegister.module.css";

export default function FormRegister() {
  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }
  return (
    <div className={styles.containerPadre}>
      <Navbar />
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>Create your account</h1>
          <form>
            <div className={styles.two}>
              <div className={styles.selectJpg}>
                <div className={styles.selectJPGMAX}>
                  <label>
                    <span className={styles.selectFile}>Select image</span>

                    <input
                      hidden
                      type="file"
                      multiple
                      onChange={changeInput}
                    ></input>
                  </label>
                  <div className={styles.jpg}>
                    <p className={styles.colorp}>JPG, PNG, GIF</p>
                    <p className={styles.colorp}>Max 100 mb</p>
                  </div>
                </div>
                <div>
                  {images.map((imagen) => (
                    <div key={imagen.index}>
                      <div>
                        <button onClick={deleteImg.bind(this, imagen.index)}>
                          x
                        </button>
                        <img
                          className={styles.imagen}
                          alt="algo"
                          src={imagen.url}
                          data-toggle="modal"
                          data-target="#ModalPreViewImg"
                        ></img>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.nameEnviar}>
                <label className={styles.label}>Name</label>
                <p htmlFor="name"> </p>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Write your name... "
                />

                <label className={styles.label}>Lastname</label>
                <p htmlFor="Lastname"> </p>
                <input
                  name="Lastname"
                  id="Lastname"
                  type="text"
                  className={styles.input}
                  placeholder="Write your Lastname... "
                />

                <label className={styles.label}>Username</label>
                <p htmlFor="Username"> </p>
                <input
                  name="Username"
                  id="Username"
                  type="text"
                  className={styles.input}
                  placeholder="Write your Username... "

                /> 

              

                <label className={styles.label}>Email</label>
                <p htmlFor="Email"> </p>
                <input
                  name="Email"
                  id="Email"
                  type="text"
                  className={styles.input}
                  placeholder="Write a valid email address... "
                />

                <label className={styles.label}>Password</label>
                <p htmlFor="Password"> </p>
                <input
                  name="Password"
                  id="Password"
                  type="password"
                  className={styles.input}
                  placeholder="Write a valid Password... "
                />


            



                <label className={styles.label}>About you!</label>
                <p htmlFor="Aboutyou"> </p>
                <textarea
                  name="Aboutyou"
                  id="Aboutyou"
                  type="text"
                  className={styles.input}
                  placeholder="Write a little description about you..."
                />

                <br />

                <input
                  value="CREATE YOUR ACCOUNT"
                  type="submit"
                  className={styles.inputEnviar}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
