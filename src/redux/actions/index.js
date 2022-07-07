//import axios from "axios";

export function orderByName(payload) {  
    return {
      type: 'ORDER_BY_NAME',
      payload,
    }
}
  
export function orderByPrice(payload) {
    return {
      type: "ORDER_BY_PRICE",
      payload,
    }
}