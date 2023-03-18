import { ADD_CARD, DELETE_CARD, FILTER, ORDER, GET_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES } from "./action";
  
  const initialState = {
    myFavorites: [],
    allCharacters: [],
  };
  
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_CARD:
        return {
          ...state,
          allCharacters: [...state.allCharacters, payload],
        };
      case DELETE_CARD:
        return {
          ...state,
          allCharacters: state.allCharacters.filter(
            (card) => card.id !== payload
          ),
        };
      case FILTER:
        const filteredFavorites =
          action.payload === "all"
            ? state.allCharacters
            : state.allCharacters.filter(
                (character) => character.gender === action.payload
              );
        return {
          ...state,
          myFavorites: [...filteredFavorites],
        };
      case ORDER:
        const orderedFavorites = [...state.allCharacters].sort((a, b) => {
          if (action.payload === "Ascendente") {
            return a.id - b.id;
          } else if (action.payload === "Descendente") {
            return b.id - a.id;
          }
          return 0;
        });
        return {
          ...state,
          myFavorites: orderedFavorites,
        };
      case GET_FAVORITES:
        return {
          ...state,
          myFavorites: payload,
        };
      case ADD_FAVORITES:
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
        };
      case DELETE_FAVORITES:
        return {
          ...state,
          myFavorites: state.myFavorites.filter((card) => card.id !== payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;