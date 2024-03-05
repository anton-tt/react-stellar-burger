import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../const";
import { TResponseIngredientData, IGetIngredientsAction, IGetIngredientsSuccessAction, 
  IGetIngredientsFailedAction } from "../types/burger-ingredients";
import { getIngredientsInfo } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types/types";
import { TApplicationActions } from "../types/types";

const getIngredientsFeed = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS
});

const getIngredientsSuccess = (ingredientsList: Array<TResponseIngredientData>): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredientsList
});

const getIngredientsFailed = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED
});

export const getIngredientsList: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsFeed());
  getIngredientsInfo()
    .then((res) => {  
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data));
      } else {
        dispatch(getIngredientsFailed());
      }
    }).catch((err) => {
      dispatch(getIngredientsFailed())
      console.log(err);
    }) 
}