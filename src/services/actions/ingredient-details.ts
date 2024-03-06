import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../const";
import { IAddDetailsAction, IRemoveDetailsAction } from "../types/ingredient-details";
import { TResponseIngredientData } from "../types/burger-ingredients";

export function addIngredientData(ingredientData: TResponseIngredientData): IAddDetailsAction { 
  return ({ type: ADD_INGREDIENT_DETAILS,
    ingredient: ingredientData }
  );
}

export function removeIngredientData(): IRemoveDetailsAction { 
  return ({ type: REMOVE_INGREDIENT_DETAILS });
}