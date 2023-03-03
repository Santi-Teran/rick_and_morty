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
            const { genre } = action.payload;
            const allCharacters = state.allCharacters.filter((character) => character.gender === genre)
            const myFavorites = state.myFavorites.filter((character) => character.gender === genre)
            return {
                ...state,
                myFavorites,
                allCharacters,    
            }
        case ORDER:
            const { order } = action.payload;
            const allCharactersCopy = [...state.allCharacters];
            const myFavoritesCopy = [...state.myFavorites];

            if (order === "Ascendente") {
                allCharactersCopy.sort((a, b) => a.id - b.id);
                myFavoritesCopy.sort((a, b) => a.id - b.id);
            } else if (order === "Descendente") {
                allCharactersCopy.sort((a, b) => b.id - a.id);
                myFavoritesCopy.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: myFavoritesCopy,
                allCharacters: allCharactersCopy,
            };
        default:
            return state
    }
}

export default reducer;