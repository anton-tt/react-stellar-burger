import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { ingredientReducer } from './ingredient-details.js';
import { constructorReducer } from './burger-constructor.js';
import { orderReducer } from './order-details.js';
import { priceReducer } from './order-price.js';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ingredient: ingredientReducer,
  constructorData: constructorReducer,
  orderNumber: orderReducer,
  orderPrice: priceReducer
}); 

export default rootReducer;