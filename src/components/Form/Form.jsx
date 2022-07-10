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

  const dispatch = useDispatch();
  // let history = useHistory();

  const { name, description } = card;

  const onSubmit = async (e) => {
    e.preventDefault();

    // console.log("ESTO ES FILE", file);
    // const respuesta = await uploadFile(file);
    // setimages(respuesta);
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
  };

  const changeInput = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);

    setFiles(file);
    let indexImg;

    if (file.length > 0) {
      indexImg = file[file.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...file, ...newImgsToState];
    setFiles(newImgsState);
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
    const newImgs = image.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setFile(newImgs);
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
                      name="image"
                      hidden
                      type="file"
                      onChange={(e) => changeInput(e)}
                    ></input>
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
