import { ADD_PRICE, DELETE_PRICE } from "../../utils/constants.js";
import { getBunsPrice } from "../../utils/utils.js";

const initialState = {
  totalPrice: 0
}
 
export const priceReducer = (state = initialState, action) => {
  if (action.ingredient !== undefined) {
    let ingredientPrice = 0;
    if (action.ingredient.type !== "bun" ) {
      ingredientPrice = action.ingredient.price;      
    } else {
      ingredientPrice = getBunsPrice(action.ingredient, action.oldIngredient);  
    }
    switch (action.type) {
      case ADD_PRICE: {
        return {
          totalPrice: state.totalPrice + ingredientPrice
        };
      }
      case DELETE_PRICE: {
        return {
          totalPrice: state.totalPrice - ingredientPrice
        };
      }
      default: {
        return state;
      }
    }
  } else {
    return state;
  }

}