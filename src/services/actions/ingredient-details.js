import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from "../constants.js";

export function openIngredientData(ingredientData) { 
  return function (dispatch) {
    dispatch({ type: OPEN_INGREDIENT,
    ingredient: ingredientData });
  }
}

export function closeIngredientData() { 
    return function (dispatch) {
      dispatch({ type: CLOSE_INGREDIENT });
    }
}