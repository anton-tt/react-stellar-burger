import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { ingredientReducer } from './ingredient-details.js';
import { constructorReducer } from './burger-constructor.js';
import { orderReducer } from './order-details.js';
import { registerUserReducer } from './user-register.js';
import { loginUserReducer } from './user-login.js';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ingredient: ingredientReducer,
  constructorData: constructorReducer,
  orderNumber: orderReducer,
  registerUserData: registerUserReducer,
  loginUserData: loginUserReducer
}); 

export default rootReducer;