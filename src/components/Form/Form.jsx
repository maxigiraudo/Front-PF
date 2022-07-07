import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Form.module.css";

export default function Form() {
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
          <h1 className={styles.colorh1}>Create your NFT</h1>
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
                  placeholder="Write the name of the NFT... "
                />
                <label className={styles.label}>Description</label>
                <p htmlFor="Description"> </p>
                <textarea
                  name="description"
                  id="description"
                  type="text"
                  className={styles.input}
                  placeholder="Write a description of the NFT..."
                />

                <br />

                <input
                  value="CREATE"
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
