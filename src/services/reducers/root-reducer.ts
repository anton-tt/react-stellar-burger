import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients.js';
import { ingredientReducer } from './ingredient-details.js';
import { constructorReducer } from './burger-constructor.js';
import { orderReducer } from './order-details.js';
import { registerUserReducer } from './user-register';
import { loginUserReducer } from './user-login';
import { logoutUserReducer } from './user-logout.js';
import { forgotPasswordReducer } from './password-forgot';
import { resetPasswordReducer } from './password-reset';
import { getUserReducer } from './user-get.js';
import { updateUserReducer } from './user-update.js';
import { updateTokenReducer } from './token-update.js';
import { wsFeedReducer } from './socket-feed.js';
import { wsHistoryReducer } from './socket-history.js';
import { getOrderStructureReducer } from './order-get.js';

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
  orderFeedData: wsFeedReducer,
  orderHistoryData: wsHistoryReducer,
  orderStructureData: getOrderStructureReducer
});  

export default rootReducer;