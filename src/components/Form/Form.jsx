import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { createNft } from "../../redux/actions";
import { useMoralis, useMoralisFile } from "react-moralis";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [card, setCard] = useState({ name: "", description: "" });
  const [image, setimages] = useState("");
  const { saveFile, moralisFile } = useMoralisFile();
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState({
    error: "Debe ingresar un nombre",
  });
  const { authenticate, isAuthenticated, user } = useMoralis();
  const navigate = useNavigate();
  useEffect(() => {
    const login = async () => {
      if (!isAuthenticated) {
        await authenticate()
          .then(function (user) {
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };
    login();
  }, []);

  function validationForm(value) {
    let errors = {};
    if (!value.name) errors.name = "Debe ingresar un nombre";
    else if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(value.name)) {
      errors.name = "Los nombres propios empiezan con mayúscula";
    }
    if (value.description.length < 20) {
      errors.description = "Debe contener al menos 20 caracteres";
    }

    console.log(value);
    return errors;
  }

  const dispatch = useDispatch();

  const { name, description } = card;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || description === "" || file === "") return;

    console.log(file);
    dispatch(createNft({ name, description, file }));
    navigate("/home");
  };

  console.log(image);

  const onChange = (e) => {
    e.preventDefault();
    setCard({
      ...card,

      [e.target.name]: e.target.value,
    });

    setError(
      validationForm({
        ...card,

        [e.target.name]: e.target.value,
      })
    );
    console.log(error);
  };

  const changeInput = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);

    setFiles(file);
    let indexImg;

    if (files.length > 0) {
      indexImg = file[file.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...files, ...newImgsToState];
    setFiles(newImgsState);

    setError(
      validationForm({
        ...card,
        ...file,
        [e.target.name]: e.target.value,
      })
    );
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
    const newImgs = files.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setFiles(newImgs);
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
                      multiple
                      name="image"
                      hidden
                      type="file"
                      onChange={(e) => changeInput(e)}
                    ></input>
                    {error.image ? (
                      <p style={{ color: "red" }}> {error.image} </p>
                    ) : null}
                  </label>
                  <div className={styles.jpg}>
                    <p className={styles.colorp}>JPG, PNG, GIF</p>
                    <p className={styles.colorp}>Max 100 mb</p>
                  </div>
                </div>
                <div>
                  {files.map((imagen) => (
                    <div key={imagen.index}>
                      {console.log(imagen)}
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
                </div>
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
                {error.name ? (
                  <p style={{ color: "red" }}> {error.name} </p>
                ) : null}
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
                {error.description ? (
                  <p style={{ color: "red" }}> {error.description} </p>
                ) : null}

                <br />

                <input
                  disabled={Object.keys(error).length === 0 ? false : true}
                  value="CREATE"
                  type="submit"
                  className={styles.inputEnviar}
                />
                <br />
                {Object.keys(error).length === 0 ? null : (
                  <p style={{ color: "red", textAlign: "center" }}>
                    Para crear debes completar todos los campos sin errores.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
