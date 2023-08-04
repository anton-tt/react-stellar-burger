import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { ingredientReducer } from './ingredient-details.js';
import { orderReducer } from './order-details.js';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ingredient: ingredientReducer,
  orderNumber: orderReducer
}); 

export default rootReducer;