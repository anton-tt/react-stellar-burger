import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_CONSTRUCTOR } from "../const"; 
import { TResponseIngredientData } from "./burger-ingredients";  

export type TIngredientDataWithLocalId = TResponseIngredientData & {
  _localId: number;
}; 

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  ingredient: TIngredientDataWithLocalId;
}
  
export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  ingredient: TIngredientDataWithLocalId;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  dragIngredientId: number;
  dropIngredientId: number;
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TBurgerConstructorActions = 
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearConstructorAction;

export type TInitialState = {
  bunsData: TIngredientDataWithLocalId | undefined;
  fillingData: Array<TIngredientDataWithLocalId>;
}