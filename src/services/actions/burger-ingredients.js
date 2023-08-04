import { getIngredientsInfo } from "../../utils/api";
import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../constants.js";

export function getIngredientsList() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS });
    getIngredientsInfo()
    .then((res) => {  
      if (res && res.success) {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, 
        ingredientsList: res.data});
      } else {
        dispatch({type: GET_INGREDIENTS_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: GET_INGREDIENTS_FAILED })
      console.log(err);
    }) 
  }

}