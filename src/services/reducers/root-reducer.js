import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { orderReducer } from './order-details.js';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  orderNumber: orderReducer
}); 

export default rootReducer;