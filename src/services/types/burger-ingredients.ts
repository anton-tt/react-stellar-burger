import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../const";
  
export type TResponseIngredientData = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}; 

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS;
}
  
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  ingredientsList: Array<TResponseIngredientData>;
}
  
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TGetIngredientsActions = 
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction;

export type TInitialState = {
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredientsData: ReadonlyArray<TResponseIngredientData>;
}