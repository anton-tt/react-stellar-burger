import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../../utils/constants.js";

export function addIngredientData(ingredientData) { 
  return ({ type: ADD_INGREDIENT_DETAILS,
    ingredient: ingredientData }
  );
}

export function removeIngredientData() { 
  return ({ type: REMOVE_INGREDIENT_DETAILS });
}