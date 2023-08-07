import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT } from "../../utils/constants.js"; 

let id = 0;
const getNextId = () => {
  return ++id;
}

export function addIngredient(ingredientData) { 
  return ({ type: ADD_INGREDIENT,
    ingredient: {...ingredientData, _localId: getNextId()} }
  );
}
  
export function deleteIngredient(ingredientData) {
  return ({ type: DELETE_INGREDIENT,
    ingredient: ingredientData }
  );
}

export function moveIngredient(dragIngredientId, dropIngredientId) {
  return ({ type: MOVE_INGREDIENT,
    dragIngredientId: dragIngredientId,
    dropIngredientId: dropIngredientId }
  );
}