const initialState = {
  cards: [],
  allCards: [],
  category: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
