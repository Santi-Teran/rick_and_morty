export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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