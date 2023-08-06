import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from "../../utils/constants.js"; 

let id = 0;
const getNextId = () => {
  return ++id;
}

export function addIngredient(ingredientData) { 
  return function (dispatch) {
    dispatch({ type: ADD_INGREDIENT,
      ingredient: {...ingredientData, _localId: getNextId()} });
  }
}
  
export function deleteIngredient(ingredientData) {
  return function (dispatch) {
    dispatch({ type: DELETE_INGREDIENT,
      ingredient: ingredientData });
  }
}

export function updateIngredient(dragIngredientId, dropIngredientId) {
  return function (dispatch) {
    dispatch({ type: UPDATE_INGREDIENT,
      dragIngredientId: dragIngredientId,
      dropIngredientId: dropIngredientId });
  }
}