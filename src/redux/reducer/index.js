const initialState = {
  cards: [],
  allCards: [],
  detail: [],
  category: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DETAILS":
      const all = state.allCards;
      const filtered = all.filter((m) => action.payload == m.token_id)
      return {
        ...state,
        detail: filtered,
      };

    case "GET_NAME_NFT":
      return {
        ...state,
        cards: action.payload,
      };
    case "GET_SLIDER_NFT":
      return{
        ...state,
        cards: action.payload
      }
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
    case "CREATE_NFT":
      return {
        ...state,
        allCards: [...state.allCards].push(action.payload),
        cards: [...state.cards].push(action.payload),
      };
    default:
      return state;
  }
}
