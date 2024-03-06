import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../const";
import { TResponseIngredientData } from "./burger-ingredients";  

export interface IAddDetailsAction {
  readonly type: typeof ADD_INGREDIENT_DETAILS;
  ingredient: TResponseIngredientData;
}
  
export interface IRemoveDetailsAction {
  readonly type: typeof REMOVE_INGREDIENT_DETAILS;
}

export type TIngredientDetailsActions = 
  | IAddDetailsAction
  | IRemoveDetailsAction;

export type TInitialState = {
  ingredient: TResponseIngredientData | undefined;
}