import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_CONSTRUCTOR } from "../const"; 
import { TIngredientDataWithLocalId, IAddIngredientAction, IDeleteIngredientAction, IMoveIngredientAction,
  IClearConstructorAction } from "../types/burger-constructor";
import { TResponseIngredientData } from "../types/burger-ingredients";

let id: number = 0;
const getNextId = (): number => {
  return ++id;
}

export function addIngredient(ingredientData: TResponseIngredientData): IAddIngredientAction { 
  return ({ type: ADD_INGREDIENT,
    ingredient: {...ingredientData, _localId: getNextId()} }
  );
}
  
export function deleteIngredient(ingredientData: TIngredientDataWithLocalId): IDeleteIngredientAction {
  return ({ type: DELETE_INGREDIENT,
    ingredient: ingredientData }
  );
}

export function moveIngredient(dragIngredientId: number, dropIngredientId: number): IMoveIngredientAction {
  return ({ type: MOVE_INGREDIENT,
    dragIngredientId: dragIngredientId,
    dropIngredientId: dropIngredientId }
  );
}

export function clearConstructor(): IClearConstructorAction {
  return ({ type: CLEAR_CONSTRUCTOR });
}