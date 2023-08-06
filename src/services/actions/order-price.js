import { ADD_PRICE, DELETE_PRICE } from "../../utils/constants.js";

export function addPrice(ingredientData, oldIngredientData) { 
  return function (dispatch) {
    dispatch({ type: ADD_PRICE,
      ingredient: ingredientData,
      oldIngredient: oldIngredientData });
  }
}

export function deletePrice(ingredientData) { 
  return function (dispatch) {
    dispatch({ type: DELETE_PRICE,
      ingredient: ingredientData, });
  }
}