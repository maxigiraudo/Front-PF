const initialState = {
  cards: [],
  allCards: [],
  detail: [],
  category: [],
  loading: false,
  error: false,
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

    default:
      return state;
  }
}
