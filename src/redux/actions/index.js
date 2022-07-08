import axios from "axios";

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: "ORDER_BY_PRICE",
    payload,
  };
}

export function getNft() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:4000/api/nfts/monkey");

    console.log(json.data);
    return dispatch({
      type: "GET_NFT",
      payload: json.data,
    });
  };
}
