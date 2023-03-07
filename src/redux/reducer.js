import { ADD_CARD, DELETE_CARD, FILTER, ORDER } from "./action";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CARD:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case DELETE_CARD:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(card => card.id !== payload)
            }
        case FILTER:
            var { allCharacters } = state;
            const filteredFavorites = action.payload === 'all'
                ? allCharacters
                : allCharacters.filter((character) => character.gender === action.payload);
            return {
                ...state,
                myFavorites: [...filteredFavorites],
            };
        case ORDER:
            var { allCharacters } = state;
            const orderedFavorites = [...allCharacters].sort((a, b) => {
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
        default:
            return state
    }
}

export default reducer;