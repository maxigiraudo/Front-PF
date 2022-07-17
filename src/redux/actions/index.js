import axios, { AxiosError } from "axios";
import Moralis from "moralis";
import { MdCallToAction } from "react-icons/md";
import Swal from "sweetalert2";

export function orderByPrice(payload) {
  return {
    type: "ORDER_BY_PRICE",
    payload,
  };
}

export function getNft() {
  return async function (dispatch) {
    let json = await axios.get(
      "https://henry-proyecto-nft.herokuapp.com/api/tests"
    );
    console.log(json);
    // let jsonB = await axios.get ("http://localhost:4000/api/tests/" + json.data.cursor)
    return dispatch({
      type: "GET_NFT",
      payload: json.data,
    });
  };
}
export function getNftAll(cursor) {
  return async function (dispatch) {
    let json = await axios.get(
      `https://henry-proyecto-nft.herokuapp.com/api/tests?cursor=${cursor}`
    );
    console.log("QUE ME TRAE CON EL CURSOR", json);
    return dispatch({
      type: "GET_NFT_ALL20",
      payload: json.data,
    });
  };
}
// export function getNftAll2() {
//   return async function (dispatch) {
//     let json = await axios.get("http://localhost:4000/api/tests?cursor=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxIjoiY2F0IiwiZGVzY3JpcHRpb24iOmZhbHNlLCJhdHRyaWJ1dGVzIjpmYWxzZSwibmFtZSI6ZmFsc2UsImdsb2JhbCI6dHJ1ZSwibGltaXQiOiIxMDAiLCJ0b2tlbl9hZGRyZXNzZXMiOm51bGwsIndoZXJlIjp7fSwicGFnZSI6Mywib2Zmc2V0IjowLCJrZXkiOiJmZmE1MDJhNzg2ZTc2YTA1MDAxMWE2YjdkYTIyYzEyYSIsInRvdGFsIjoyMjIyMDksImlhdCI6MTY1NzYzODk2OH0.dbLZGhrkLXVZklTpmAHFyHzZ26BWDUESmjkuztMvtfs");
//     let jsonB = await axios.get("http://localhost:4000/api/tests?cursor=" + json.data[0].cursor)
//     console.log("que hay aca2",jsonB.data)
//     return dispatch({
//       type: "GET_NFT_ALL2",
//       payload: jsonB.data
//     })
//   };
// }
// export function getNftAll3() {
//   return async function (dispatch) {
//     let json = await axios.get("http://localhost:4000/api/tests?cursor=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxIjoiY2F0IiwiZGVzY3JpcHRpb24iOmZhbHNlLCJhdHRyaWJ1dGVzIjpmYWxzZSwibmFtZSI6ZmFsc2UsImdsb2JhbCI6dHJ1ZSwibGltaXQiOiIxMDAiLCJ0b2tlbl9hZGRyZXNzZXMiOm51bGwsIndoZXJlIjp7fSwicGFnZSI6Miwib2Zmc2V0IjowLCJrZXkiOiJmZmM3MjdmYjI0YTdmNGZiZTlkNWYzZmVjYmQzOWNiYSIsInRvdGFsIjoyMjIyOTAsImlhdCI6MTY1NzYzODk2OH0.SRdQbnHRnUpO8LULD2JUUNYL9djwGE6PM_IYFjI_OAM");
//     let jsonB = await axios.get("http://localhost:4000/api/tests?cursor=" + json.data[0].cursor)
//     console.log("que hay aca3",jsonB.data)
//     return dispatch({
//       type: "GET_NFT_ALL3",
//       payload: jsonB.data
//     })
//   };
// }

export function getDetail(_id, token_adress) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `https://henry-proyecto-nft.herokuapp.com/api/nftid?id=${_id}&token_address=${token_adress}`
      );
      console.log("ES EL DETALLE", json);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameNft(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "https://henry-proyecto-nft.herokuapp.com/api/nfts?name=" + name
      );
      return dispatch({
        type: "GET_NAME_NFT",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createNft({ name, description, file }) {
  return async function (dispatch) {
    dispatch({
      type: "CREATE_NFT",
      payload: true,
    });
    try {
      console.log("ESTO ES FILE", file);
      const image = await uploadFile(file);
      const body = {
        image,
        name,
        description,
      };
      const json = await axios.post(
        "https://henry-proyecto-nft.herokuapp.com/api/nft",
        body
      );
      console.log(json.data);
      dispatch({
        type: "CREATE_NFT_SUCCESS",
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: "CREATE_NFT_ERROR",
        payload: true,
      });
    }
  };
}

export function createAcount({ nombre, email, password }) {
  return async function (dispatch) {
    dispatch({
      type: "CREATE_ACOUNT",
      payload: true,
    });
    try {
      const body = {
        nombre,
        email,
        password,
      };
      const json = await axios.post(
        "https://henry-proyecto-nft.herokuapp.com/api/registro",
        body
      );
      dispatch({
        type: "CREATE_ACOUNT_SUCCESS",
        payload: json.data,
      });
      window.location.href = "https://wallaby-neon.vercel.app/login";
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Email existent",
        showConfirmButton: true,
      });
      console.log("ESTE ES EL ERROR", error);
    }
  };
}

const uploadFile = async (file) => {
  const imageFile = new Moralis.File(file.name, file);
  await imageFile.saveIPFS();
  const imageURI = imageFile.ipfs();
  return imageURI;
};

export function getSliderNftArt() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:4000/api/nftcollection");
      console.log("ESTA ES LA COLECCION", json);
      return dispatch({
        type: "GET_SLIDER_NFT",

        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function resState() {
  return {
    type: "RES_STATE",
  };
}

export function addToCart(product) {
  console.log(product);
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}

export function removeOneFromCart(product) {
  console.log(product);
  return {
    type: "REMOVE_ONE_FROM_CART",
    payload: product,
  };
}

export function cleanCart(product) {
  return {
    type: "CLEAN_CART",
    payload: product,
  };
}

export function contador(contador) {
  return {
    type: "CONTADOR",
    payload: contador,
  };
}
export function postLogin(payload) {
  console.log("normla loguin f" + payload);
  return async function (dispatch) {
    axios
      .post("https://henry-proyecto-nft.herokuapp.com/api/login", payload)
      .then((response) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        // window.location.href = "http://localhost:3000/home";
        console.log("logueado");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Swal.fire({
            icon: "error",
            text: "Email or password incorrect or inexistent",
            showConfirmButton: true,
          });
        }

        console.log(err);
      });
  };
}

export const removeFavorite = (id) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: id,
  };
};
export const addFavorite = (info) => {
  console.log(info);
  return {
    type: "ADD_FAVORITE",
    payload: info,
  };
};

//-------------------------------------USER PROFILE------------------
export function getProfile(token){
  return async function(dispatch){
      try{
          var json= await axios.get(`https://henry-proyecto-nft.herokuapp.com/profile/${token}`);
         

                    
          return dispatch({
              type : 'GET_PROFILE',
              payload : json.data
          })
      }
      catch(error){console.log(error)}

  }

}




export function  updatedProfileById(token){
  return async function(dispatch){
      try{
          var json= await axios.put(`https://henry-proyecto-nft.herokuapp.com/profile/${token}`);
         

                    
          return dispatch({
              type : 'UPDATED_PROFILE_BY_ID',
              payload : json.data
          })
      }
      catch(error){console.log(error)}

  }

}
//------------------------------------------------------

export const register = (body) => async (dispatch) => {
  // try {
  const newbody = { email: body.email, password: body.password };
  console.log("este es el bodyyyyy", body);
  dispatch({
    type: "REGISTER_USER_REQUEST",
  });
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    const { data } = await axios.post(
      "https://henry-proyecto-nft.herokuapp.com/auth/api/signup",
      body,
      config
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (err) {
    const errorString = String(err).slice(0, 10);
    if (errorString === "AxiosError") {
      console.log("VAMOOOOOOOOOOOOO");
      body = newbody;
      console.log("nuevo bodyyy", body);
      const { data } = await axios.post(
        "https://henry-proyecto-nft.herokuapp.com/api/signin",
        body,
        config
      );
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: data,
      });
      console.log("LOGUEADO TITANN", data);
      // Swal("Registro Exitoso",{icon:"success"});
      // window.location.href = "/home";
    } else {
      return console.log(err);
    }
  }

  // console.log("esta es la dataaa",data)
  // if(data.user.email) {

  // } else{

  // }

  // } catch (error) {
  //   Swal("Credenciales Incorrectas", { icon: "warning" });
  //   dispatch({
  //     type: 'REGISTER_USER_ERROR',
  //     payload: error,
  //   });
  // }
};

export const login =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "USER_LOGIN_REQUEST",
      });

      const data = await axios.post(`http://localhost:4000/auth/api/signin`, {
        email,
        // password,
      });
      console.log("choclochoclo", data.request);
      switch (data.request.status) {
        case 200:
          dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: data.data,
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          window.location.href = "/home";
          break;
        case 401:
          dispatch({
            type: "USER_LOGIN_ERROR",
            payload: data.error,
          });
          Swal("Not allow", { icon: "warning" });
          break;
        case 500:
          dispatch({
            type: "USER_LOGIN_ERROR",
            payload: data.error,
          });
          Swal("Internal server error", { icon: "warning" });
          break;
        default:
          break;
      }
    } catch (error) {
      Swal("Credenciales Incorrectas", { icon: "warning" });
      dispatch({
        type: "USER_LOGIN_ERROR",
        payload: error,
      });
    }
  };

export function singoutOk() {
  return {
    type: "SINGOUT_OK",
  };
}

