export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITE";
export const DELETE_FAVORITES = "DELETE_FAVORITE";

export const addCard = (character) => {
  return {
    type: ADD_CARD,
    payload: character,
  }
}

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  }
}

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  }
}

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/rickandmorty/fav");
      if (!response.ok) {
        throw new Error("Error al obtener personajes favoritos");
      }
      const favorites = await response.json();
      dispatch({
        type: GET_FAVORITES,
        payload: favorites,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
};

export const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};