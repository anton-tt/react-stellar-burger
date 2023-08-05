import { ADD_PRICE, DELETE_PRICE } from "../constants.js";

const initialState = {
  totalPrice: 0
}

const getBunsPrice = (newBun, oldBun) => {
  let price = 0;
  if (oldBun === undefined) {
    price = newBun.price * 2;
  } else if (oldBun._id !== newBun._id) {
    price = price + (newBun.price - oldBun.price) * 2; 
  } else {
    price = 0;
  }
  return price
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