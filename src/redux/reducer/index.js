const initialState = {
  cards: [],
  allCards: [],
  detail: [],
  category: [],
  carrito: [],
  cartProducts: [],
  loading: false,
  error: false,
  cursor:"",
  contador: 0,

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NAME_NFT":  
    const sinC=action.payload
    const sinCurs= sinC.filter((e)=> e.name)   
      return {
        ...state,
        cards: sinCurs
      };

    case "GET_SLIDER_NFT":
      const sinCu=action.payload
    const sinCurso= sinCu.filter((e)=> e.name)   
      return {
        ...state,
        cards: sinCurso,
      };

    // case "ORDER_BY_NAME":
    //   if (action.payload === "desc") {
    //     return {
    //       ...state,
    //       cards: [...state.cards].sort((a, b) =>
    //         a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       cards: [...state.cards].sort((a, b) =>
    //         a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    //       ),
    //     };
    //   };

    // case "ORDER_BY_PRICE":
    //   if (action.payload === "low") {
    //     return {
    //       ...state,
    //       cards: [...state.cards].sort((a, b) => {
    //         if (a.price > b.price) return 1;
    //         if (a.price < b.price) return -1;
    //         else return 0;
    //       }),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       cards: [...state.cards].sort((a, b) => {
    //         if (a.price < b.price) return 1;
    //         if (a.price > b.price) return -1;
    //         else return 0;
    //       }),
    //     };
    //   };
    case "GET_NFT":
      // const getInfo = action.payload
      // const getInfoRenderizar = getInfo.filter((e)=> e.name)
      // const getFinal = getInfoRenderizar.filter((e)=> e.name != "Brave CAT" && e.name != "Farmer Cat" && !e.image.includes("catsworld"))
      // console.log("soy", getFinal)
      const getInfo = action.payload
      const cursor = getInfo[0].cursor
      const getInfoF = getInfo.filter((e)=> e.name)
      console.log("ESTE ES EL CURSOR 1:",cursor)
      return {
        ...state,
        cursor:cursor ,
        allCards: getInfoF,
        cards: getInfoF
      };
    case "GET_NFT_ALL20":
      const getInfo2 = action.payload
      const cursor2 = getInfo2[0].cursor
      const getInfoFinal = getInfo2.filter((e)=> !e.cursor)
      console.log("ESTE ES EL CURSOR 2:",cursor2)
      return{
        ...state,
        cursor:cursor2,
        allCards:[...state.allCards,...getInfoFinal],
        cards:[...state.cards,...getInfoFinal]
      };
      // case "GET_NFT_ALL2":
      //   console.log("ESTA EN EL REDUCER 2", action.payload)
      //   return{
      //     ...state,
      //     allCards:[...state.allCards,...action.payload],
      //     cards:[...state.cards,...action.payload]
      //   };
      //   case "GET_NFT_ALL3":
      //     console.log("ESTA EN EL REDUCER 2", action.payload)
      //     return{
      //       ...state,
      //       allCards:[...state.allCards,...action.payload],
      //       cards:[...state.cards,...action.payload]
      //     };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
    case "CREATE_NFT_SUCCESS":
      return {
        ...state,
        allCards: [action.payload, ...state.cards],
        cards: [action.payload, ...state.cards],
        loading: false,
        error: false,
      };
    case "CREATE_NFT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_NFT_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "RES_STATE":
      return {
        ...state,
        detail: [],
      };
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case "REMOVE_ONE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter((e) => e !== action.payload),
      };
    case "CLEAN_CART":
      return {
        ...state,
        cartProducts: [],
      };
    case "CONTADOR":
      return {
        ...state,
        contador: action.payload,
      };

      case 'LOGIN_SUCCESS':
        return {
          ...state,
          userIsAuthenticated: action.payload,
        }

    default:
      return state;
  }
}
