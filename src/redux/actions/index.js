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
    let json = await axios.get("http://localhost:4000/api/nfts/monkey");
    return dispatch({
      type: "GET_NFT",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:4000/api/nft/" + id);
      console.log(json.data);
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
