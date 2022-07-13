const initialState = {
  cards: [],
  allCards: [],
  detail: [],
  category: [],
  carrito: [],
  cartProducts: [],
  loading: false,
  error: false,
  contador: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NAME_NFT":
      return {
        ...state,
        cards: action.payload,
      };
    case "GET_SLIDER_NFT":
      return {
        ...state,
        cards: action.payload,
      };
    case "ORDER_BY_NAME":
      if (action.payload === "desc") {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ),
        };
      }

    case "ORDER_BY_PRICE":
      if (action.payload === "low") {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            else return 0;
          }),
        };
      } else {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            else return 0;
          }),
        };
      }
    case "GET_NFT":
      return {
        ...state,
        allCards: action.payload,
        cards: action.payload,
      };
    case "GET_DETAILS":
      const all = state.cards;
      console.log("action", all);

      const filtered = all.filter(
        (m) => action.payload == m.token_id || action.payload == m._id
      );
      return {
        ...state,
        detail: filtered,
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
      console.log(action.payload);
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
}
