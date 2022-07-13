import axios from "axios";
import Moralis from "moralis";

export function orderByPrice(payload) {
  return {
    type: "ORDER_BY_PRICE",
    payload,
  };
}

export function getNft() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:4000/api/tests");
    // let jsonB = await axios.get ("http://localhost:4000/api/tests/" + json.data.cursor)
    return dispatch({
      type: "GET_NFT",
      payload: json.data,
    });
  };
}
export function getNftAll(cursor) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:4000/api/tests?cursor=${cursor}`);
    console.log("QUE ME TRAE CON EL CURSOR",json)
    return dispatch({
      type: "GET_NFT_ALL20",
      payload: json.data
    })
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

export function getDetail(_id,token_adress){
  return async function (dispatch) {
    try {
    let json= await axios.get(`http://localhost:4000/api/tests/nftid?id=${_id}&token_address=${token_adress}`)
      console.log("ES EL DETALLE",json)
      return dispatch({
        type:"GET_DETAILS",
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameNft(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:4000/api/nfts?name=" + name);
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
      const json = await axios.post("http://localhost:4000/api/nft", body);
      console.log(json.data);
      dispatch({
        type: "CREATE_NFT_SUCCESS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "CREATE_NFT_ERROR",
        payload: true,
      });
    }
  };
}
const uploadFile = async (file) => {
  const imageFile = new Moralis.File(file.name, file);
  await imageFile.saveIPFS();
  const imageURI = imageFile.ipfs();
  return imageURI;
};

export function getSliderNft(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:4000/api/nfts/" + name);
      console.log(json);
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
  return async function (dispatch) {
    await axios.post("http://localhost:4000/login", payload)
    .then(response => {
      if (response === 400) {
        alert('Sorry, Error Login 🤦🏽‍♂️')
        return 
      } 
      else {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response,
        })    
      }
    })
  }
}

