import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { createNft } from "../../redux/actions";

import { useMoralis, useMoralisFile } from "react-moralis";
import { Moralis } from "moralis";

export default function Form() {
  const [card, setCard] = useState({ name: "", description: "" });
  const [images, setimages] = useState("");
  const { saveFile, moralisFile } = useMoralisFile();
  const [file, setFile] = useState("");

  const saveFileIPFS = async (f) => {
    console.log(f);
    console.log("FILE", f.name);
    const fileIpfs = await saveFile(f.name, f, { saveIPFS: true });
    console.log(fileIpfs);
  };

  const dispatch = useDispatch();
  // let history = useHistory();

  const { name, description } = card;

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "") return;
    saveFileIPFS(file);
    dispatch(createNft({ name, description, images }));

    console.log("nft creado correctamente");
  };

  const onChange = (e) => {
    e.preventDefault();
    setCard({
      ...card,

      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (images !== "") {
      saveFileIPFS(images);
    }
  }, [images]);

  const changeInput = (e) => {
    e.preventDefault();
    setimages(e.target.files[0]);
    console.log(images);

    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);
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
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.two}>
              <div className={styles.selectJpg}>
                <div className={styles.selectJPGMAX}>
                  <label>
                    <span className={styles.selectFile}>Select image</span>

                    <input
                      name="images"
                      hidden
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    ></input>
                  </label>
                  <div className={styles.jpg}>
                    <p className={styles.colorp}>JPG, PNG, GIF</p>
                    <p className={styles.colorp}>Max 100 mb</p>
                  </div>
                </div>
                {/* <div>
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
                          value={card.image}
                        ></img>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
              <div className={styles.nameEnviar}>
                <label className={styles.label}>Name</label>
                <p htmlFor="name"> </p>
                <input
                  onChange={(e) => onChange(e)}
                  name="name"
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Write the name of the NFT... "
                  value={card.name}
                />
                <label className={styles.label}>Description</label>
                <p htmlFor="Description"> </p>
                <textarea
                  onChange={(e) => onChange(e)}
                  name="description"
                  id="description"
                  type="text"
                  className={styles.input}
                  placeholder="Write a description of the NFT..."
                  value={card.description}
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
