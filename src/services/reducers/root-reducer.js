import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { ingredientReducer } from './ingredient-details.js';
import { constructorReducer } from './burger-constructor.js';
import { orderReducer } from './order-details.js';
import { registerUserReducer } from './user-register.js';
import { loginUserReducer } from './user-login.js';
import { logoutUserReducer } from './user-logout.js';
import { forgotPasswordReducer } from './password-forgot.js';
import { resetPasswordReducer } from './password-reset.js';
import { getUserReducer } from './user-get.js';
import { updateUserReducer } from './user-update.js';
import { updateTokenReducer } from './token-update.js';
import { wsFeedReducer } from './socket-feed.js';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ingredient: ingredientReducer,
  constructorData: constructorReducer,
  orderNumber: orderReducer,
  registerUserData: registerUserReducer,
  loginUserData: loginUserReducer,
  logoutUserData: logoutUserReducer,
  forgotPasswordData: forgotPasswordReducer,
  resetPasswordData: resetPasswordReducer,
  getUserData: getUserReducer,
  updateUserData: updateUserReducer,
  updateTokenData: updateTokenReducer,
  orderFeedData: wsFeedReducer
}); 

export default rootReducer;