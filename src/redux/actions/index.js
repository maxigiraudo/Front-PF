import axios from "axios";


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
      let json = await axios.get("http://localhost:4000/api/nfts/" + id);
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

export function createNft(nft) {
  console.log(nft);
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:4000/api/nft", nft);
      return dispatch({
        type: "CREATE_NFT",
        payload: json.data
      })
    } catch(error) {
      console.log(error)
    }
  }
}

export function getSliderNft(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:4000/api/nfts/" + name);
      console.log(json)
      return dispatch({
        type: "GET_SLIDER_NFT",

        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
