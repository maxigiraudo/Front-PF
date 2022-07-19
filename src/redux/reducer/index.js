const initialState = {
  cards: [],
  allCards: [],
  searchCards: [],
  detail: [],
  category: [],
  carrito: [],
  cartProducts: [],
  loading: false,
  error: false,
  cursor: "",
  contador: 0,
  favorite: [],
  user: [],

  profile: [],

  useGoogle: {},
  userIsAuthenticated: false,
  userData: {},
  nftCreados: [],
  userRegister: false,
  categoryArt: [],
  userInfo: {},
  isAuth: false,

  profileGoogle: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NAME_NFT":
      const sinC = action.payload;
      const sinCurs = sinC.filter((e) => e.name);
      return {
        ...state,
        cards: sinCurs,
      };

    case "GET_SLIDER_NFT":
      const sinCu = action.payload;
      const sinCurso = sinCu.filter((e) => e.name);
      const art = sinCurso.filter((e) => e.category === "art");
      console.log("ESTA ES MI ACTION DE ART", art);
      return {
        ...state,
        categoryArt: art,
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
      const getInfo = action.payload;
      const cursor = getInfo[0].cursor;
      const getInfoF = getInfo.filter((e) => e.name);
      console.log("ESTE ES EL CURSOR 1:", cursor);
      return {
        ...state,
        cursor: cursor,
        allCards: getInfoF,
        cards: getInfoF,
      };
    case "GET_NFT_ALL20":
      const getInfo2 = action.payload;
      const cursor2 = getInfo2[0].cursor;
      const getInfoFinal = getInfo2.filter((e) => !e.cursor);
      console.log("ESTE ES EL CURSOR 2:", cursor2);
      return {
        ...state,
        cursor: cursor2,
        allCards: [...state.allCards, ...getInfoFinal],
        cards: [...state.cards, ...getInfoFinal],
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
        nftCreados: [...state.nftCreados, action.payload],
        loading: false,
        error: false,
      };
    case "CREATE_ACOUNT_SUCCESS":
      console.log(
        "ESTO ES LO QUE ME LLEGA DE PAYLOAD DE LA CREACION DEL USUARIO",
        action.payload
      );
      return {
        ...state,
        user: [action.payload, ...state.user],
        userRegister: true,
        loading: false,
        error: false,
      };
    case "CREATE_NFT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_ACOUNT":
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
    case "CREATE_ACOUNT_ERROR":
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
        cartProducts: action.payload,
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
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userIsAuthenticated: true,
        error: false,
      };
    case "LOGIN_DATA":
      console.log("ESTE ES EL ACTION.PAYLOAD", action.payload);
      return {
        ...state,
        userData: action.payload,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        error: true,
      };

    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((e) => e !== action.payload),
      };

    case "GET_PROFILE":
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
      };

    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "GET_PROFILE_GOOGLE":
      return {
        ...state,
        profileGoogle: action.payload,
      };

    case "UPDATED_PROFILE_BY_ID":
      return {
        ...state,
        profile: action.payload,
      };

    case "REGISTER_USER_REQUEST": {
      return {
        ...state,
        useGoogle: {},
        userInfo: {},
        error: false,
        loading: true,
        userIsAuthenticated: true,
      };
    }
    case "REGISTER_USER_SUCCESS": {
      return {
        ...state,
        useGoogle: action.payload,
        userInfo: action.payload,
        loading: false,
        error: false,
      };
    }
    case "REGISTER_USER_ERROR": {
      return {
        ...state,
        useGoogle: {},
        loading: false,
        error: true,
      };
    }
    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        useGoogle: {},
        userInfo: action.payload,
        loading: false,
        error: false,
        // userIsAuthenticated: true,
        isAuth: true,
      };
    }
    case "SINGOUT_OK": {
      return {
        ...state,
        userIsAuthenticated: false,
      };
    }

    default:
      return state;
  }
}
